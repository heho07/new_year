import React, { Component } from "react";

class Display_players extends Component {
  // behövde skriva om koden med en konstruktor för att få tillgång till props
  constructor(props) {
    super(props);
    this.state={
      show_players:false,
    }
  }

 
  show_all_players(){

    return(
        <div>
          {this.props.players.map(player =>{
            return this.show_player(player)
          })}
        </div>
      )

  }  

  show_player(name){
    // console.log(name);
    return(
      <div key = {name}>
        <p >{name}</p> 
        <button value = {name} onClick = {(name) => this.props.remove_player(name.target.value)}>X</button>
      </div>
      );
  }

  set_show_or_hide(){
    this.setState({
      show_players:!this.state.show_players,
    });
  }


  render() {
  	return(
	    <div>
        <button onClick = {() => this.set_show_or_hide()}>Visa spelare</button>
        {this.state.show_players ?  this.show_all_players(): <div/> }
	    </div>
	);
  }
}

export default Display_players;