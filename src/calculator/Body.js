import React, {Component, Fragment} from 'react';
import Screen from './Screen';
import ControlPanel from './ControlPanel';
import Keypad from './Keypad';

export default class Body extends Component{

    constructor(props){
        super(props)

        this.expressionBuilder = [];
        this.val = '';

        this.state = {
            expression: '',
            value: ''
        }
    }

    inputDigit = (value) => {

        console.log("dig - ", this.conProp)
        if(this.val){
            this.val += value.toString();
        }else{
            this.val = value.toString();
        }
        
        this.setState({
            value: this.val
        })
    }

    inputOperator = (value) => {

        console.log("op - ", this.conProp)
        this.expressionBuilder.push(this.state.value);
        this.expressionBuilder.push(value.toString());

        this.val = '';
        this.setState({
            expression: this.expressionBuilder.join(' '),
            value: this.val
        })
    }

    getExpressionResult = (value) => {
        this.expressionBuilder.push(this.state.value);

        let expression = this.expressionBuilder.join(' ');
        this.val = eval(expression);
        this.setState({
            expression: '',
            value: this.val
        })

        this.val = ''
        this.expressionBuilder = []
    }

    getClear = () => {
        this.setState({
            expression: '',
            value: ''
        })

        this.val = ''
        this.expressionBuilder = []
    }

    onBackSpace = () => {
        this.val = this.val.substring(0, this.val.length - 1);

        this.setState({
            value: this.val
        })
    }

    changeSign = () => {
        console.log("nuber val - ", Number(this.val))
        this.val = (Number(this.val) > 0)? '-'+this.val : this.val.substring(1, this.val.length);
        this.setState({
            value: this.val
        })
    }

    render(){
        return (
            <Fragment >
                <Screen value={this.state.value} expression={this.state.expression} />
                <ControlPanel />
                <Keypad 
                inputDigit={this.inputDigit} 
                inputOperator={this.inputOperator} 
                getExpressionResult={this.getExpressionResult}
                getClear={this.getClear}
                onBackSpace={this.onBackSpace}
                changeSign={this.changeSign}
                />
            </Fragment>
        )
    }
}
