import React, {Component, Fragment} from 'react';
import Header from "./Header";
import Body from "./Body";
import { Provider } from './Context'

export default class Main extends Component{

    consoleMe = () => {
        console.log("button click");
    }

    render(){

        const conext = {
            data: {
                name: "sunil",
                roll: 345
            },
            handleClick : this.consoleMe
        }

        return (
            <Fragment>
                <Header />
                <div className="mt-md-5">
                    <div className="row">
                        <div className="calculator col-md-5 mx-auto">
                            <Provider value={conext}>
                                <Body />
                            </Provider>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}