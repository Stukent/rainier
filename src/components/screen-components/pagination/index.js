import React, { Component } from 'react';
import './style.scss';



class Paginate extends Component {
    render() {

      return (
        <div className="paginate">
            <nav aria-label="page-nav">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#">
                            <span>&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" >
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <nav aria-label="page-nav-two">
                <ul className="pagination-two">
                    <li className="page-item">
                        <a className="page-link-two" href="#">
                            <span>&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link-two" href="#">1</a></li>
                    <li className="page-item"><a className="page-link-two" href="#">2</a></li>
                    <li className="page-item"><a className="page-link-two" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link-two" href="#" >
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
      );
    }
  }
  
  export default Paginate;
  
