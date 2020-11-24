import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications'


export class AllNotifications extends Component{

    constructor(props){
        super(props);
        this.state = {
            send : false,
            recieve : false,
            nameOpt : ["1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9","10" ,"11" ,"12" ,"13" ,"14" ,"15" ,"16" ,"17" ,"18" ,"19" ]
        }
        this.handleRecieve=this.handleRecieve.bind(this);
        this.handleSend=this.handleSend.bind(this);

    }

    handleRecieve(){
        this.setState({recieve : true})
        this.setState({send : false})

    }

    handleSend(){
        this.setState({recieve : false})
        this.setState({send : true})
    }


    render(){
        let list = [];
        for(let i = 0 ; i < 5 ; i++){
          list.push(<Notifications name = {this.state.nameOpt[i]}/>)
        }
        return (
        <div>
        <button onClick = {this.handleRecieve}>הודעות נכנסות</button>
        <button onClick = {this.handleSend}>הודעות יוצאות</button>

        <section 
        className = "recieve"                 
        style = {{display: this.state.recieve? "" : "none"}}>
            {list}
        </section>
        <section 
        className = "send"                 
        style = {{display: this.state.send? "" : "none"}}>
            <h2>send section</h2>
        </section>

        </div>
      );
    }
}

export default AllNotifications;
