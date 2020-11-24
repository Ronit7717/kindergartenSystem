import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Crew.css'




export class Crew extends Component {
    constructor(props) {
        super(props);
        this.state = {
          c_password:"",
          value:"k_teacher",
          atWork:false,
        }
        this.submitHandler=this.submitHandler.bind(this);
        this.passwordHandler=this.passwordHandler.bind(this);
        this.chooseDutyHandler=this.chooseDutyHandler.bind(this);

    }
    

    submitHandler(){
        var index;
        var faund = false;
        var a=[{f_name:"Ronit", ID:"318771730", duty:""},
               {f_name:"Yehudit", ID:"209373760" , duty:""}];
        if(this.state.c_password.length!==9){
            alert("ID number is wrong")
        }
        else{
            for(var i=0 ; i<a.length ; i++) {
                if(a[i].ID===this.state.c_password){
                    faund = true;
                    index = i;
                }
            
            }
            if(!faund){
                alert("ID number not faund")
            }
            else{
                for(var i=0 ; i<a.length ; i++) {

                }
                a[index].duty=this.state.value;
                alert("Welcome "+a[index].f_name+", your duty is "+a[index].duty)
            }
        }
    }

    passwordHandler = e =>{
        this.setState({c_password:e.target.value})
    }

    chooseDutyHandler(e){
        this.setState({value: e.target.value});
        e.preventDefault();
    }




    render() {
        return (
            <div className = "main">
                <div className="dutyRadio">
                <RadioGroup 
                    onClick={this.chooseDutyHandler}
                    name="duty"
                    row aria-label="position"
                    defaultValue="k_teacher" >
                <FormControlLabel 
                    className="other"
                    labelPlacement="top"
                    value="other" 
                    control={<Radio />} 
                    label="אחר" />
                <FormControlLabel
                    labelPlacement="top"
                    value="assistant" 
                    control={<Radio />} 
                    label="סייעת" />
                <FormControlLabel 
                    labelPlacement="top"
                    value="k_teacher" 
                    control={<Radio />} 
                    label="גננת" />
                </RadioGroup>
                <br></br>
                </div>
                <div className="enter-and-submit">
                <TextField
                    onChange={this.passwordHandler}
                    className="ID_number"
                    label="מספר זהות" 
                    margin="normal"  
                />
                <br></br>
                <Button 
                    className="buttons"
                    onClick={this.addText}>
                    יציאה
                </Button>
                <Button
                    className="buttons"
                    onClick={this.submitHandler}>
                    כניסה
                </Button>

                </div>
          </div>
        );
    }
    }

export default Crew;