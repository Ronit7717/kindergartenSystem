import React from 'react';
import Presence from '../src/components/Presence/Presence'
import Teacher from '../src/components/Teacher/Teacher';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}));
  }

  componentWillMount(){
    this.callAPI();
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
    <div className="App">
      <Teacher/>
    </div>
  );
}}

export default App;
