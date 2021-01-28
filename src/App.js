import './App.css';
import React, { Component } from 'react';
class App extends Component {
  state = { 
    Itemnames:{
        pizza:false,
        burger:false,
        noodles:false,
        pasta:false
    },
    imageurl:"https://thumbs.dreamstime.com/b/food-stall-icon-vector-filled-flat-sign-solid-pictogram-isolated-white-symbol-logo-food-stall-icon-vector-filled-flat-sign-164295893.jpg"
 }

 chkclick =(e) => {
    var{name,checked}=e.target;
    this.setState((e)=>{
    var Selecteditem=e.Itemnames;
    return Selecteditem[name]=checked;
    });
    };
render() { 
    var display =Object.keys(this.state.Itemnames).filter((x)=>this.state.Itemnames[x]);
    return (
        <div>
        <center>
          <img src={this.state.imageurl}  alt="logo"></img>
      <h1 ><strong>FOOD STALL</strong></h1>
      <p >food is the best and you know it!!!</p>
      </center>
      <hr/>
      <h3 >Go through our specials</h3><br/>
      <div>
      <input type="checkbox" name="pizza" onChange={this.chkclick}/> pizza<br/>
      <input type="checkbox" name="burger" onChange={this.chkclick}/>burger<br/>
      <input type="checkbox" name="noodles" onChange={this.chkclick}/>noodles<br/>
      <input type="checkbox" name="pasta" onChange={this.chkclick}/>pasta
      </div>
      <hr/>
      <div>
          <h4>checked items are:</h4>
          <strong>{display+","}</strong>
      </div>
      <br/>
      <button >order</button>
  </div>
      );
}
}
 
export default App;
