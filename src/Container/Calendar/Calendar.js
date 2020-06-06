import React, {Component} from 'react'
import Block from '../../Component/UI/Block/Block'
import ShowDetails from '../../Component/ShowDetails/ShowDetails'
import CreateEvent from '../../Component/CreateEvent/CreateEvent'
import Heading from '../../Component/UI/Heading/Heading'
import classes from './Calendar.module.css';

class Calendar extends Component{

  constructor(props){
    super(props);
    this.state = {
      dates: {
        '_29': 'Sunday',
        '_30': 'Monday',
        '_31': 'Tuesday',
        '_1': 'Wednesday',
        '_2': 'Thursday',
        '_3': 'Friday',
        '_4': 'Saturday'
      },
      times: {
        '_8': 'AM',
        '_9': 'AM',
        '_10': 'AM',
        '_11': 'AM',
        '_12': 'PM',
        '_1': 'PM'
      },
      blocked_details: ['29_8', '30_8', '31_8', '1_8', '2_8', '3_8', '29_9', '29_10', '29_11', '29_12', '29_1', '30_1', '31_1', '1_1', '2_1', '3_1', '4_8', '4_9', '4_10', '4_11', '4_12', '4_1'],
      booked_details: {
        '2_9': {name: 'Rene Plessner', repeat: false},
        '30_10': {name: 'Justin Canetti', repeat: true},
        '31_10': {name: 'Justin Canetti', repeat: true},
        '1_10': {name: 'Justin Canetti', repeat: true},
        '2_10': {name: 'Justin Canetti', repeat: true},
        '3_10': {name: 'Justin Canetti', repeat: true},
        '30_11': {name: 'Hillary Clinton', starred: true},
        '1_12': {name: 'Justin Timberlake', repeat: true},
      },
      selected_event: '',
      create_event: ''
    }
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  }

  onDrop = (event, category) => {
    let id = event.dataTransfer.getData("id");
    this.setState((prevState) => {
      let updatedBooking = { ...prevState.booked_details }
      updatedBooking[category] = updatedBooking[id]
      delete updatedBooking[id]
      return { booked_details: updatedBooking }
    })
  }

  showModal = id => () => {
    let [date, time] = id.split("_")
    let details = {
      name: this.state.booked_details[id].name,
      repeat: this.state.booked_details[id].repeat,
      date,
      day: this.state.dates[`_${date}`],
      time,
      meridiem: this.state.times[`_${time}`]
    }

    this.setState({
      selected_event: details
    })
  }

  remove = () => {
    this.setState({
      selected_event: '',
      create_event: ''
    })
  }

  saveEvent = data => {
    this.setState((prevState) => {
      let updatedBooking = {...prevState.booked_details, ...{
        [prevState.create_event]: data
      }}
      
      return {
        booked_details: updatedBooking,
        create_event: ''
      }
    })
  }

  createNewEvent = id => () => {
    this.setState({
      create_event: id
    })
  }

  render(){

    let dates = Object.entries(this.state.dates)
    let times = Object.entries(this.state.times)
    let bookedDate = Object.keys(this.state.booked_details)
    let blockedDate = this.state.blocked_details
    let selectedEvent = this.state.selected_event
    let createEvent = this.state.create_event

    return (
      <div className={classes.container}>
        <table>
          <thead>
            <tr>
              <th></th>
              {
                dates.map(([date, day]) => {
                  date = date.substring(1)
                  return <th key={date}><Heading large={date} small={day} /></th>
                })
              }
            </tr>
          </thead>
          <tbody>
          {
            times.map(([time, meridiem]) => {
              time = time.substring(1)
              return (<tr key={time}>
                <td><Heading medium={`${time} ${meridiem}`}/></td>
                {
                  dates.map(([date]) => {
                    date = date.substring(1)
                    let id = `${date}_${time}`
                    let status = (blockedDate.includes(id)) ? 'blocked' : (bookedDate.includes(id)) ? 'booked' : 'open'
                    if(status === 'booked'){

                      const details = this.state.booked_details[id]
                      return (
                        <td  key={id} draggable onDragStart = {(e) => this.onDragStart(e, id)} onClick={this.showModal(id)}>
                          <Block 
                          status={status}
                          details={details}
                          id={id} 
                          time={`${time}${meridiem}`}/>
                        </td>
                      )
                    }

                    if(status === 'open'){
                      return (
                        <td key={id} onDragOver={(e) => this.onDragOver(e)} 
                        onDrop={(e) => this.onDrop(e, id)}
                        onClick={this.createNewEvent(id)}>
                          <Block 
                          status={status} 
                          id={id} 
                          time={`${time}${meridiem}`}/>
                        </td>
                      )
                    }

                    return (
                      <td key={id}>
                        <Block 
                        status={status} 
                        id={id} 
                        time={`${time}${meridiem}`}/>
                      </td>
                    )
                  })
                }
              </tr>)
            })
          }
          </tbody>
        </table>
        {
          selectedEvent !== '' && <ShowDetails selected={selectedEvent} cancel={this.remove}/>
        }
        {
          createEvent !== '' && <CreateEvent save={this.saveEvent} cancel={this.remove}/>
        }
      </div>
    );
  }

}


export default Calendar;
