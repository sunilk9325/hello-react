import React, {Component, Fragment} from 'react';
// import { Consumer } from './Context'
import { MyContext } from './Context'


export default class ControlPanel extends Component{

    static contextType = MyContext;
    render(){
        return (
            <div className="control-panel my-2 mx-1">
                <button className="btn btn-block text-secondary" disabled="">
                    <i className="fa fa-history fa-2x"></i>
                </button>

                <div>--{this.context.data.name}, {this.context.data.roll}--</div>
                <button onClick={this.context.handleClick}>console me</button>

                {/* <Consumer>
                    {
                        ({data, handleClick}) => (
                        <Fragment>
                            <div>--{data.name}, {data.roll}--</div>
                            <button onClick={handleClick}>console me</button>
                        </Fragment>
                        )
                    }
                </Consumer> */}
            </div>
        )
    }
}
