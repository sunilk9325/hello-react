import React, {Component} from 'react';

export default class Screen extends Component{

    render(){
        return (
            <div className="mt-md-2" style={ {position: 'relative'} }>
                <div className="pr-2 h4" style={ {position: 'absolute', top: '0px', right: '0px'} }>
                    {this.props.expression}
                </div>
                <div className="display text-right pr-2 display-4 d-none d-lg-block pt-4">
                    {this.props.value}
                </div>
            </div>
        )
    }
}
