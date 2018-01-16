import React, { Component } from 'react';
import './style.scss';
import {Button, Dropdown, Form, Paginate, Selectors, Accordion, Card, Table, Modal, ModalSmall, ModalInvert} from 'timp'
  



class Widgets extends Component {
  render() {

    return (
        <div className="contenido">
             <div className="intro">
                <div className="main-title">
                    Widgets & Forms
                </div>
                <div className="intro-text">
                <p>Displays of the widgets and table concepts to use in <strong>Mimic Pro</strong> in order to make them more user friendly and responsive in all devices.</p>
                </div>

                
            </div>

            <div className="table-info">
                <h2>Tables</h2>
                <p><strong>Mimic Pro</strong> uses tables to display ad campign results, landing pages altered, product catalogs, etc. One of the biggest challenges is to make a table that withholds so much information that when it collapses it portays the information in such a manner that the user still comprehends what they will analyze. </p>
                <Table />
            </div>

            <div className="button-info">
                <h2>Buttons</h2>
                <p>These are the buttons used and their other phases such as hovered on, active, normal, dectivated, and such. <strong>Colors may vary.</strong></p>
                <div className="buttons">
                    <Button />
                </div>
            </div>


            <div className="dropdown-info">
                <h2>Dropdowns</h2>
                <p>This widget is mainly used on top navigations, but can also be altered to work for a bottom navigation bar. As well as other items, the wider dropdowns work for any content dropdown as seen upon creating a new ad campaign in <strong>Mimic Pro.</strong></p>
                <Dropdown />
            </div>

            <div className="form-info">
                <h2>Forms</h2>
                <p>In order to create a new ad campaign we are going to need a form coming from a dropdown on <strong>Mimic Pro</strong>.</p>
                <Form />
            </div>

            <div className="pag-info">
                <h2>Pagination</h2>
                <p>With so many keywords we need to put them into different pages, so pagination is needed in order to keep our tables organized.</p>
                <Paginate />
            </div>

            <div className="selectors">
                <h2>Selector Inputs</h2>
                <p>Fairly simple, these are the different inputs one can have for checklist. For example, we could use these for the keywords table.</p>
                <Selectors />
            </div>

            <div className="accordion-info">
                <h2>Accordions (Collapse)</h2>
                <p>To save space we have acordions to show information you might be looking based on a question. Something similar to this is found in <strong>Mimic Social</strong> when clicking on Molly.</p>
                <Accordion />
            </div>

            <div className="cards">
                <h2>Cards</h2>
                <p>Cards can be used for a list or catalog of products like in Mimic Pro, or in Social where you have to select images for posts, and in Pro with the Product Catalogs.</p>
                <Card />
            </div>

            <div className="modals">
            <h2>Modals</h2>
            <p>Modals are designed to provide information withint the same page the user is navigating. Here are some of the examples of modals used.</p>
            <Modal/>
            <p>The big one above is an example of how to display a decent amount ofinformation to the user in a neat and organized way.</p>
            <ModalSmall />
            <p>The smaller one is for alert uses, or quick walkthroughs.</p>
            <ModalInvert />
            <p>And finally, to match the style of our alert and notifications there is also an inverted version of the smaller modal.</p>
            </div>
            
        </div>

    );
}
}

export default Widgets;
