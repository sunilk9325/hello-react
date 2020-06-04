import React, {Component} from 'react';

export default class Body extends Component{

    numberClick = (event) => {
        this.props.inputDigit(event.target.value)
    }

    operatorClick = (event) => {
        this.props.inputOperator(event.target.value)
    }

    render(){
        return (
            <div className="keypad">
                <div className="keypad-row">
                    <button className="btn keypad-secondary-btn" value="clear-all">CE</button>
                    <button className="btn keypad-secondary-btn" onClick={this.props.getClear} value="clear">C</button>
                    <button className="btn keypad-secondary-btn" onClick={this.props.onBackSpace} value="backspace"><i className="fa fa-caret-left fa-lg"></i></button>
                    <button className="btn keypad-secondary-btn" onClick={this.operatorClick} value="/">÷</button>
                </div>
                <div className="keypad-row">
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="7">7</button>
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="8">8</button>
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="9">9</button>
                    <button className="btn keypad-secondary-btn" onClick={this.operatorClick} value="*">×</button>
                </div>
                <div className="keypad-row">
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="4">4</button>
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="5">5</button>
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="6">6</button>
                    <button className="btn keypad-secondary-btn" onClick={this.operatorClick} value="-">−</button>
                </div>
                <div className="keypad-row">
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="1">1</button>
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="2">2</button>
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="3">3</button>
                    <button className="btn keypad-secondary-btn" onClick={this.operatorClick} value="+">+</button>
                </div>
                <div className="keypad-row">
                    <button className="btn keypad-secondary-btn" onClick={this.props.changeSign} value="+-">±</button>
                    <button className="btn keypad-primary-btn" onClick={this.numberClick} value="0">0</button>
                    <button className="btn keypad-secondary-btn" onClick={this.numberClick} value=".">.</button>
                    <button className="btn keypad-secondary-btn" onClick={this.props.getExpressionResult} value="=" style={ {color: 'grey'} }>=</button>
                </div>
            </div>
        )
    }
}
