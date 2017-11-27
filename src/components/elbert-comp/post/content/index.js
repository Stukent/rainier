import React, {Component} from 'react'
import classNames from 'classnames'
import seedrandom from 'seedrandom'


export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentFilter: 'all',
      textFilter: ''
    }
  }
  render() {
    const props = this.props
    const {scenario, closeContent, sim: {id}} = props
    const {selections} = scenario

    const random = seedrandom(id)

    function shuffleArray(arr) {
      let d = [...arr].sort()
      for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(random() * (c + 1))
        var a = d[c]
        d[c] = d[b]
        d[b] = a
      }
      return d
    }
    const shuffledSelectionsKeys = shuffleArray(Object.keys(selections))

    return (
      <div className="content-chooser-overlay" onClick={closeContent}>
        <div className="content-chooser" onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
        }}>
          <div className="header">
            <select defaultValue={this.state.contentFilter} onChange={(e)=>{
              this.setState({contentFilter: e.target.value})
            }}>
              <option value="all">All Content Choices</option>
              <option value="advertisement">Advertisement</option>
              <option value="image">Pictures</option>
              <option value="video">Videos</option>
              <option value="article">Blog Posts</option>
              <option value="infographic">Infographic</option>
              <option value="meme">Meme</option>
              <option value="holiday advertisement">Holiday Advertisement</option>
              <option value="holiday image">Holiday Image</option>
            </select>
            <input
              value={this.state.textFilter}
              placeholder="Search"
              onChange={({target:{value}})=>this.setState({textFilter: value})}
            />
            {this.state.textFilter && <i className="fa fa-times-circle" onClick={()=>this.setState({textFilter: ''})} />}
          </div>
          <div className="items">
            {shuffledSelectionsKeys.map((index)=>{
              const selection = selections[index]
              const {contentFilter, textFilter} = this.state
              if (contentFilter !== 'all' && selection.media !== this.state.contentFilter)
              return null

              if (textFilter) {
                const lowerCased = textFilter.toLowerCase()
                const {title, description} = selection
                if (!title.toLowerCase().includes(lowerCased) && !description.toLowerCase().includes(lowerCased)) {
                  return null
                }
              }
              

              return <Choice {...props} key={index} index={index} selection={selection}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}

function Choice({index, selection, edit, scenario, closeContent}) {
  const product = scenario.products[selection.product] || null
  return (
    <button className={classNames('tile', selection.media)} style={{
      backgroundImage: `url(//d254z8v8fjnox4.cloudfront.net/imgs/scenario/${scenario.awsKey}/selections/${selection.thumbnail.src})`
    }} onClick={()=>{
      edit('content.selectionKey', index)()
      closeContent()
    }}>
      <div className="tile-label">
        <div className="title">
          {selection.title}
        </div>
        <div className="description">
          {selection.description}
        </div>
        {!!product && (
          <div className="product">
            <i className="fa fa-shopping-cart" aria-hidden="true"/>
            Promotes {product.title}
          </div>
        )}
        <div className="price">${selection.cost}</div>
      </div>
      {selection.media === 'video' && (
        <div className="video">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
        </div>
      )}
    </button>
  )
}
