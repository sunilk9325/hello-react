import React, {Component} from 'react'
import Modal from '../../Component/UI/Modal/Modal'
import Button from '../../Component/UI/Button/Button'
import classes from './ShowDetails.module.css';
import cancel from '../../images/cancel.png'
import reschedule from '../../images/reschedule.png'

class ShowDetails extends Component{

  
  render(){
    let selected = this.props.selected;

    return (
        <Modal onClick={this.props.cancel}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    {selected.name}
                </div>
                <div className={classes.content}>
                    {`${selected.day}, March ${selected.date} at ${selected.time}:00${selected.meridiem.toLowerCase()}`}
                </div>
                {
                    selected.repeat === true &&
                    <div className={classes.repeat_flag}>
                    &#8635; Repeats every day
                    </div>
                }
                <div className={classes.action}>
                    <Button type="warning" style={{float: 'left', marginRight: '10px', cursor: 'not-allowed'}}>
                    <img src={reschedule} className={classes.img_icon} alt=""/> Reschedule
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


export default ShowDetails;
