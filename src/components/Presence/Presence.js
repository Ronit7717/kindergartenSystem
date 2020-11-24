import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import './Presence.css'
import { Checkbox } from '@material-ui/core';



export class Presence extends Component{
    constructor(props){
        super(props);
        this.state = {
            kindergarten_name:props.kindergarten_name,
            num_of_kids:props.num_of_kids,
            teacher:props.teacher,
            assistant:props.assistant,
        }
    }


    render(){
        return(
            <div>
                <div class="column">
                    <div class="card">
                        <div className = "header">
                            <div>
                                <h2 className = "card_title">{this.state.kindergarten_name}</h2>
                            </div>
                        </div>
                        <div className = "presence_details">
                        <div className = "shown-data">
                            <h6>גננת</h6>
                            <li
                                style = {{color: this.state.assistant === true? "red" : "black"}}>
                            </li>
                        </div>
                        <div className = "shown-data">
                            <h6>סייעת</h6>
                            <li 
                                style = {{color: this.state.assistant === true? "red" : "black"}}>
                            </li>
                        </div>
                        <div className = "shown-data">
                            <img 
                                src = {require("../../pic/kid.png")}
                                />
                            <figcaption>{this.state.num_of_kids+ "  "}</figcaption>
 
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        
           
        );
    }
}


export default Presence;