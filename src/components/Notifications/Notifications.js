import React, { Component , useState} from 'react';
import './Notifications.css'


 function Notifications(props){

    function setContentVisible(){
        if(content === false){
            document.getElementById(props.name).style.marginBottom = "8%";        
            setcontent(true)
        }
        
        if(content === true){
            document.getElementById(props.name).style.marginBottom = "0%";        
            setcontent(false)
        }
    }

    
    const [content , setcontent] = useState(false);
    const [status , setStatus] = useState("");

    let noteDetails=
    {
        sender:"גן איקס",
        subject:" שלום לכולם",
        content:"אחת אחת נבדוק שזה עובד"
    }


    return(
        <div className = "main" id = {props.name}>
            <div className = "subject">
                <button 
                    className = "showcon"
                    onClick = {setContentVisible}>
                        {'>>'}
                </button>
                <div className = "label-div">
                    <label>שם השולח:</label>
                    <label> {noteDetails.sender}</label>
                </div>
                <div className = "label-div">
                    <label>נושא:</label>
                    <label> {noteDetails.subject}</label>
                </div>
                <label className = "status-label">סטטוס הפניה:</label>
                <div className="dropdown">
                <select>
                    <option onClick = {()=>setStatus("בהמתנה")}>בהמתנה</option>
                    <option onClick = {()=>setStatus("בטיפול")}>בטיפול</option>
                    <option onClick = {()=>setStatus("בוצע")}>בוצע</option>
                </select>
                </div>
            </div>
            <div 
                className = "content"
                style = {{display: content===false? "none" : ""}}>
                {noteDetails.content}
            </div>
        </div>

    );
}


export default Notifications;