import React, { Component , useState} from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';


function ChildrenPresence(props){
    var list = [{id:"205546841", f_name:"שירה",l_name:"כהן", presence: false},{id:"204444841", f_name:"לאה",l_name:"לוי", presence: false}];
    var checkboxList = [];
    function checkboxes (){
        for(let i = 0 ; i < list.length ; i++){
            checkboxList.push(<tr>
                            <td><input type = "checkbox" value = {list[i].id} onClick = {(e) =>changePresence(e)}/></td>
                            <td>{list[i].id}</td>                           
                            <td>{list[i].f_name}</td>
                            <td>{list[i].l_name}</td>
                            </tr>);
        }
    }

    function changePresence(val){
        for(let i = 0 ; i < list.length ; i++){
            if(list[i].id === val.target.value){
                list[i].presence = !list[i].presence;        
            }
        }            
    }
    return(
        <div>
           <section onLoad = {checkboxes()}>
               <table>
                   <tbody>
                       <tr>
                           <td>האם נמצאת</td>
                           <td>מספר זהות</td>
                           <td>שם פרטי</td>
                           <td>שם משפחה</td>
                       </tr>
                        {checkboxList}
                   </tbody>
               </table>
           </section>
        </div>
    );
}

export default ChildrenPresence;