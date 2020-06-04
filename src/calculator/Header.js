import React, {Component} from 'react';

export default class Header extends Component{

    render(){
        return (
            <nav className="header navbar navbar-dark bg-dark">
                <div className="container">
                    <div className="row mx-auto">
                        <i className="fa fa-calculator fa-3x text-white my-auto"></i>
                        <div className="h3 ml-3 my-auto text-light">React Calc</div>
                    </div>
                </div>
            </nav>
        )
    }
}
