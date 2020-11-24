import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import './NewStaff.css'


export class NewStaff extends Component {
    teacherData;
    constructor(props) {
        super(props);
        this.state = {
            Id_num:"",
            f_name:"",
            l_name:"",
            adress:"",
            email:"",
            phone1:"",
            phone2:"",
            
        }
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount(){
        this.teacherData = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem('user')){
            this.setState({
                Id_num:this.teacherData.Id_num,
                f_name:this.teacherData.f_name,
                l_name:this.teacherData.l_name,
                adress:this.teacherData.adress,
                email:this.teacherData.email,
                phone1:this.teacherData.phone1,
                phone2:this.teacherData.phone2,
            })
        }
    }


    componentWillUpdate( nextProps , nextState){
        localStorage.setItem('user', JSON.stringify(nextState));
    }
      
    handleClick(e){
        e.preventDefault();
        var newTeacher=
        {
            Id_num:this.state.Id_num,
            f_name:this.state.f_name,
            l_name:this.state.l_name,
            adress:this.state.adress,
            email:this.state.email,
            phone1:this.state.phone1,
            phone2:this.state.phone2
        }
        localStorage.removeItem('user');
        this.setState({
            Id_num:"",
            f_name:"",
            l_name:"",
            adress:"",
            email:"",
            phone1:"",
            phone2:"",
    })

        }
    


    

    render(){
        return (
            <div className="container"> 
                <form className = "form" onSubmit = {this.handleClick}>
                    <div className = "form-group">
                        <label>מספר זהות</label>
                        <input 
                            type = "text" 
                            value = {this.state.Id_num}
                            className = "form-control"
                            onChange={(e) => this.setState({Id_num : e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label>שם פרטי</label>
                        <input 
                            value = {this.state.f_name}
                            type = "text" 
                            className = "form-control"
                            onChange={(e) => this.setState({f_name : e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label>שם משפחה</label>
                        <input 
                            value = {this.state.l_name}
                            type = "text" 
                            className = "form-control"
                            onChange={(e) => this.setState({l_name : e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label>מייל</label>
                        <input 
                            value = {this.state.email}
                            type = "email" 
                            className = "form-control"
                            onChange={(e) => this.setState({email : e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label>כתובת</label>
                        <input
                            value = {this.state.adress} 
                            type = "text" 
                            className = "form-control"
                            onChange={(e) => this.setState({adress : e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label>מספר טלפון 1</label>
                        <input 
                            value = {this.state.phone1}
                            type = "tel" 
                            className = "form-control"
                            onChange={(e) => this.setState({phone1 : e.target.value})}/>
                    </div>
                    <div className = "form-group">
                        <label>מספר טלפון 2</label>
                        <input 
                            value = {this.state.phone2}
                            type = "tel" 
                            className = "form-control"
                            onChange={(e) => this.setState({phone2 : e.target.value})}/>
                    </div>
                    <button type = "submit" className = "bth bth-primary bth-block">הוספה</button>
                </form>
            </div>
        );
    }

}
export default NewStaff;