import React, { Component } from 'react';
import './static/css/styles.css';
import 'normalize.css'; 

export default class BackgroundChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: '',
      inputValue2: '',
      text: 'Введите цвета в формате #rrggbb (например #FF0000)',
    };
  }
  updateInputValue(name, e) {
    let change = {};
      change[name] = e.target.value;
      this.setState(change);
  }
  setGradient() {
    const makeGradient = '#' + this.state.inputValue1;
  }
  checkColor() {
      const colorPattern = /^(#[a-fA-F0-9]{6})$/
      if ((this.state.inputValue1.match(colorPattern) && (this.state.inputValue2.match(colorPattern)))!= null) {
      const makeColor = this.refs.container.style.background = "linear-gradient(to right, " + '' + this.state.inputValue1 + ", " + '' + this.state.inputValue2 + ")";
      this.setState({text: makeColor});
      } else {
        this.setState({text: 'Проверьте введеные границы'});
      }
   }

  render() {
        return (
        <div className="container" ref="container">
            <div className="blocks-container">
              <div className="block-1">
                <h1>Background Generator</h1>
              </div>
              <div className="block-2">
                <h2>{this.state.text}</h2>
              </div>
            <div className="block-3">
                <input type="text"  className="color1" name="color1" placeholder="Введите левую границу" defaultValue = {this.state.inputValue1} onChange={this.updateInputValue.bind(this, 'inputValue1')}/>
                <input type="text" className="color2" name = "color2" placeholder="Введите правую границу" defaultValue = {this.state.inputValue2} onChange={this.updateInputValue.bind(this, 'inputValue2')}/>
                <button type="button" className="btn-change" onClick={this.checkColor.bind(this)}>GO</button>
            </div>
            </div>
        </div>  
        )
      }
    }