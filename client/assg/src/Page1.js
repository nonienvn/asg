import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import axios from "axios";
 
import "react-datepicker/dist/react-datepicker.css";

export default class Page1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "",
             email: "",
             gender: "",
             address: "",
             dob: new Date()
        }
    }
    handleDateChange(date) {
        console.log(date)
        this.setState({
          dob: date
        })
      }
    handleNameChange = (event) => {
       this.setState({
           name: event.target.value
       })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
     }
     handleGenderChange = (event) => {
        
        this.setState({
            gender: event.target.value
        })

        
        
     }
     handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
        })
     }

     handleSubmit = (event) => {
        event.preventDefault();
         const data = JSON.stringify({
             name: this.state.name,
             email: this.state.email,
             dob: this.state.dob,
             address: this.state.address,
             gender: this.state.gender
         } )
         console.log(data)
         axios.post('http://localhost:3000/api/save', data,{
             headers: {
                 "Content-Type": "application/json"
             }
         })
      .then(res=>{
        console.log(res);
        console.log(res.data);
     })}
    render() {
        return (
            <div>
                <form>
                    <div>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                </div> <div>
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
                <div onChange={this.handleGenderChange}>
                    <p>select gender</p>
                <input type="radio" value="Male" name="gender" /> Male
                  <input type="radio" value="Female" name="gender" /> Female
                
                  </div>
                  <label>Address</label>
                <input type="text" value={this.state.address} onChange={this.handleAddressChange}></input>
               <div>
                   select DOB
               <DatePicker
              selected={ this.state.dob }
              onChange={ (date) => this.handleDateChange(date) }
              name="dob"
              dateFormat="MM/dd/yyyy"
          /> </div>
          <button type="submit" onClick={this.handleSubmit}>submit</button>
                </form>
            </div>
        )
    }
}
