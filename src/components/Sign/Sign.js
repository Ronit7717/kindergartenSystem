import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import './Sign.css'


export class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
          k_num:"",
          inWork: "" ,
          apiResponse:""
        }
        this.update_k_num=this.update_k_num.bind(this);
        this.submitHendler=this.submitHendler.bind(this);


    }


    callAPI(){
        fetch("http://localhost:5000/kinderGartens")
        .then(res=>res.text())
        .then(res=>this.setState({apiResponse:res}));
      }

      callAPIpost(k_num){
        axios
        .post('http://localhost:5000/kinderGartens',{"k_num": k_num})
        .then(() => console.log('k_num signed'))
        .catch(err => {
          console.error("sub error "+err);
        });
      }
    
//      componentWillMount(){
//        this.callAPI();
//      }
    

    update_k_num = e => {
        this.setState({k_num:e.target.value});

      }

    submitHendler = e => {
        e.preventDefault()
        const k_num =this.state.k_num;
        this.callAPIpost(k_num);
  
        this.callAPI();
        
    }


    render() {
        return (
            <div>
              <div className="main">
                <form onSubmit={this.submitHendler}>
                <h1 className="sign_in">מערכת הגנים</h1>
                <TextField 
                className="k_num"
                label="מספר הגן" 
                type="password"
                margin="normal"  
                required
                rows={2} 
                size="large" 
                variant="outlined"
                onChange={this.update_k_num}
                />
                <br className="br"></br>
                <Button
                  
                    type="submit"
                    size="large"
                    variant="contained"
                     color="primary"
                    >
                    כניסה
                </Button>
                
                </form>
                <p>
                  {this.state.apiResponse}
                </p>
            </div>
          </div>
        );
    }
    }

export default Sign;