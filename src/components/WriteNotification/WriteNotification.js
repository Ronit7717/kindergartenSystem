import React, { Component , useState} from 'react';
import './WriteNotification.css'


function WriteNotification(props){

    const [subject , setSubject] = useState("");
    const [content , setContent] = useState("");

    function handleClick(){
        alert(subject+"  "+ content);
    }

    return(
        <div>
            <input 
                placeholder = "נושא"
                onChange = {(e)=> setSubject(e.target.value)}/>
            <br/>
            <textarea 
                rows="4" cols="50" 
                placeholder = "הודעה"
                onChange = {(e)=> setContent(e.target.value)}/>
            <br/>
            <div>
                <button 
                    type = "submit"
                    onClick = {()=>handleClick()}>אישור
                </button>
            </div>
        </div>
    );
}

export default WriteNotification;