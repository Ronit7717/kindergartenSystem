import React, { Component , useState} from 'react';
import './Staff.css'
import {NewStaff} from '../NewStaff/NewStaff';



 function Staff(){

    const [openForm , setopenForm] = useState(false);

    
//    let noteDetails=
//    {
//        k_name:"גן איקס",
//        subject:" שלום לכולם",
//        content:"אחת אחת נבדוק שזה עובד"
//    }


    return(
        <div className = "main">
            <button
                className = "button"
                onClick = {() => {setopenForm(!openForm)}}>+
            </button>
        <div
            className = "new-staff"
            style = {{display: openForm? "" : "none"}}>
                <NewStaff />
            </div>
        </div>

    );
}


export default Staff;