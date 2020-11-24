import React, { Component ,useState } from 'react';
import './PrincipleBar.css'
import Badge from 'react-bootstrap/Badge'
import AllPresence from '../components/AllPresence/AllPresence'
import { NavLink } from 'react-router-dom';
import {NewStaff} from '../components/NewStaff/NewStaff';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AllNotifications from '../components/AllNotifications/AllNotifications'
import Staff from '../components/Staff/Staff'


export class PrincipleBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: <div/>,
        }
        this.ShowNav = this.ShowNav.bind(this)
    }

    ShowNav(e){
        let tablinks = document.getElementsByClassName("nav-buttons");
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
          }
         try{
            document.getElementById(e.target.id).style.backgroundColor = 'rgb(167, 162, 162)';
         }    
         catch{
             console.log("press it again. problem is in principle bar / show nav")
        }     
        if(e.target.value === "presence"){
            this.setState({list: <AllPresence/>})
        }
        if(e.target.value === "addTeacher"){
            this.setState({list: <NewStaff/>})
        }
        if(e.target.value === "AllNotifications"){
            this.setState({list: <AllNotifications/>})
        }
        if(e.target.value === "About"){
            this.setState({list: <Staff/>})
        }

    }




    render(){
        return(
            <div className = "mainDiv">
                <div class="sidebar">
                <button 
                    id = "presence"
                    value = "presence"
                    className = "nav-buttons"
                    onClick = {this.ShowNav}>
                    נוכחות
                </button>
                <br/>
                <button
                    id = "addTeacher"
                    value = "addTeacher"
                    onClick = {this.ShowNav}
                    className = "nav-buttons"
                    >הוספת גננת
                </button>
                <br/>
                <button 
                    id = "AllNotifications"
                    value = "AllNotifications"
                    onClick = {this.ShowNav}
                    className = "nav-buttons"
                    >הודעות
                     <Badge variant="info">11</Badge>
                </button>                   

                <br/>
                <button
                    id = "About"
                    className = "nav-buttons"
                    value = "About"
                    onClick = {this.ShowNav}
                    >About
                </button>
                </div>
            <div 
                className = "mainSource"
                 >
                {this.state.list}
            </div>
            </div>
        );
    }
}


export default PrincipleBar;


