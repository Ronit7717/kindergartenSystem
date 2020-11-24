import React, { Component } from 'react';
import Presence from '../Presence/Presence';


export class AllPresence extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let list = [];
        for(let i = 0 ; i < 10 ; i++){
          list.push (<Presence 
          num_of_kids ={Math.round( (Math.random(30)*31)+10)}
          kindergarten_name = "גן הורדים"
          teacher = {Boolean(Math.round(Math.random()))}
          assistant = {Boolean(Math.round(Math.random()))}/>)
        }
        return (
        <div>
            {list}
        </div>
      );
    }
}

export default AllPresence;
