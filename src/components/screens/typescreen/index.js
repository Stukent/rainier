import React, { Component } from 'react';
import './style.scss';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

  
  



class Typescreen extends Component {
  render() {

    return (
        <div className="contenido">
            <div className="intro-header">
                <div className="main-title">Typefaces </div>
                <p>
                Explanation and usage of the fonts used in <strong>Mimic Social</strong> and <strong>Mimic pro</strong>. Along with usage for <a href="#">links,</a> <strong>bold,</strong> and <em>emphasized</em> text. The main fonts used for this are <a href="https://fonts.google.com/specimen/Lora" target="_blank">Lora</a> and <a href="https://fonts.google.com/specimen/Open+Sans" target="_blank">Open Sans</a>.
                </p>
            </div>
           
            <div className="font-section">
                <h1>What Do We Use?</h1>
                <div className="typeface-group">
                    <div className="lora">
                        <h2>Lora</h2>
                        <p><a href="https://fonts.google.com/specimen/Lora" target="_blank">Lora</a> is used in Stukent's Rainier Styleguide for the main headers ranging from 1 - 6. </p>
                        <span className="sub-title">Header Styles:</span>
                            <ul className="header-sizes">
                                <li><span className="font-styles">Lora Regular 40px</span></li>
                                <li><span className="font-styles-bolder">Lora Bold 40px</span></li>
                                <li><span className="font-styles-italic">Lora Bold Italic 40px</span></li>
                                
                            </ul>
                    </div>
                    <div className="sans">
                    <h2>Open Sans</h2>
                        <p><a href="https://fonts.google.com/specimen/Open+Sans" target="_blank">Open Sans</a> is used for the body typeface in the applications. Different meanings on text are given through the different weights that the font allows us to.</p>
                        <span className="sub-title">Different Weights:</span>
                        <ul className="font-weights"> 
                            <li><span class="light">300 - Open Sans Light</span></li>
                            <li><span class="reg">400 - Open Sans Regular</span></li>
                            <li><span class="emp">400i - Open Sans Regular Italic</span></li>
                            <li><span class="bold">700 - Open Sans Bold</span></li>
                        </ul>
                    </div>

                </div>
                <div className="explorations">
                    <h1>Explorations</h1>
                    <div className="wrapper">
                    <div className="font-opt">
                        <p> There are different ways to explore and implement the fonts within a project, but the key is consistency and harmony.</p>

                        <ul className="font-exp">
                        <li><a href="#">When it comes to links</a></li>
                        <li><strong>and bolder items for emphasis</strong></li>
                        <li><em>we also have italized</em></li>
                        <li className="under">or underlined for sarcasm</li>
                        </ul>
                    </div>
                    <div className="degradations">
                        <p><strong>Degredations</strong> are for when the Google Fonts stop working, or there is very low internet, or something goes wrong. Alternative set of fonts, so that way everything has a backup.</p>
                        <ul className="editor">
                            <li><span>font-family:</span> 'Lora', serif, Palatino;</li>
                            <li><span>font-family:</span> 'Open Sans', Arial, sans-serif; </li>
                        </ul>
                    </div>

                </div>
                </div>

                
                
                
            </div>
           
        </div>

    );
}
}

export default Typescreen;
