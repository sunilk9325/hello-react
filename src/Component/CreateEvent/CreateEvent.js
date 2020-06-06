import React, {Component} from 'react'
import Modal from '../../Component/UI/Modal/Modal'
import Button from '../../Component/UI/Button/Button'
import classes from './CreateEvent.module.css';
import cancel from '../../images/cancel.png'
import reschedule from '../../images/reschedule.png'

class CreateEvent extends Component{

    constructor(){
        super()
        this.myRef = React.createRef();
    }

    handleSubmission = event => {
        if(this.myRef.current[0].value === ""){
            return false;
        }
        const data = {
            name: this.myRef.current[0].value,
            repeat: this.myRef.current[1].checked
        }
        this.props.save(data)
        event.preventDefault();
    }

  render(){
    
    return (
        <Modal onClick={this.props.cancel}>
            <div className={classes.container}>
                <div className={classes.small_heading}>
                    Please fill following details
                </div>
                <form ref={this.myRef}>
                    <div className={classes.input_row}>
                        <input type="text" name="name" placeholder="Enter Name"/>
                    </div>
                    <div className={classes.input_row}>
                        <input type="checkbox" name="repeat"/> Repeat everyday
                    </div>
                </form>
                <div className={classes.action}>
                    <Button type="warning" style={{float: 'left', marginRight: '10px'}} onClick={this.handleSubmission}>
                        <img src={reschedule} className={classes.img_icon} style={{verticalAlign: 'middle'}} alt=""/> Schedule
                    </Button>
                    <Button type="danger" style={{float: 'left'}} onClick={this.props.cancel}>
                        <img src={cancel} className={classes.img_icon} alt=""/> Cancel
                    </Button>
                </div>
                <div className={classes.clearBoth} />
            </div>
        </Modal>
    );
  }

}


export default CreateEvent;
