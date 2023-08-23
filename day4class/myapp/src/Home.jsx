import React, { Component } from 'react'

export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
        count: 0,name:""
    }
  }
  inc=()=>{
    this.setState({count:this.state.count + 1});
    this.setState({name:"Vimal"})
  }
    render() {
    return (
      <div><h1>Hai I am the Classs Component</h1>
      <h4>{this.state.count}{this.state.name}</h4>
      <button onClick={this.inc}>prss</button></div>
    )
  }
}

export default Home