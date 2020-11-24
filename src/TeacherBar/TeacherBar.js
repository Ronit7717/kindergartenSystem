import React, { Component ,useState } from 'react';
import Button from '@material-ui/core/Button'
import './TeacherBar.css'
import {Crew} from '../components/Crew/Crew';
import ChildrenPresence from '../components/ChildrenPresence/ChildrenPresence'
import WriteNotification from '../components/WriteNotification/WriteNotification'


export class TeacherBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            component: <div></div>,
        }
        this.chooseNav = this.chooseNav.bind(this)
    }

    chooseNav(e){
        if(e.target.value === "crew"){
            this.setState({component:<Crew/>})
        }
        if(e.target.value === "ChildrenPresence"){
            this.setState({component:<ChildrenPresence/>})
        }
        if(e.target.value === "WriteNotification"){
            this.setState({component:<WriteNotification/>})
        }

    }


    render(){
        return(
            <div className = "main">
                <div className = "above">
                    <button 
                        className = "navButtons"
                        onClick = {this.chooseNav}
                        value = "crew">נוכחות צוות
                    </button>
                    <button className = "navButtons"
                        onClick = {this.chooseNav}
                        value = "ChildrenPresence">נוכחות ילדים
                    </button>
                    <button className = "navButtons"
                        onClick = {this.chooseNav}
                        value = "WriteNotification"
                    >הודעות</button>
                </div>
                <div>
                    {this.state.component}
                </div>
            </div>
        )
    }
}

export default TeacherBar;
