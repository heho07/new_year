import React, { Component } from "react";

import Add_player from "./Add_players.jsx";
import Display_players from "./Display_players.jsx";
import Header from "./Header.jsx";


class Home extends Component {
  // behövde skriva om koden med en konstruktor för att få tillgång till props
  constructor(props) {
    super(props);
    this.state = {
    	players:[],
    	name_input_val:"",

    	potential_players:["Erik", "Herman", "Joakim", "Joel", "Max", "Markus", "Harmony", "Josefin", "Jennifer", "Valdemar"],

    	

    	status:"home",
    };

    this.valid_status = ["home", "game"];
    this.nicknames = {
    		Erik:"Jesus",
    		Herman:"James",
    		Joakim:"Peter",
    		Joel:"Andrew",
    		Max:"Philip",
    		Markus:"Judas iscariot",
    		Harmony:"Simon the zealot",
    		Josefin:"John",
    		Jennifer:"Matthew",
    		Valdemar:"Thomas",
    		//fyll i om fler
    	};

  }

  create_player_event(event, isEvent = true) {
  	let name ="";
  	if (isEvent) {
  		event.preventDefault();
  		name = this.state.name_input_val;
  	}
  	else{
  		name = event
  	}

    if (name.length === 0) {
      window.alert("Kan inte ha tomma namn u stopid");
      return 100;
    }

  	if (this.state.players.includes(name)) {
  		console.log("Spelare " + name + " finns redan med. Välj något annat");
  		window.alert("Spelare " + name + " finns redan med! Välj ett annat namn plis");
  		return 101;
  	}
  	else{
  		this.setState({
  			name_input_val:"",
  		});
  		this.state.players.push(name);
  		console.log("Player " + name + " added!");
  	}
  	return -1;
  }

  name_input_handle_change(new_name){
  	this.setState({
  		name_input_val:new_name.target.value,
  	});
  }
  

  remove_player(name){
  	let players = this.state.players;
  	let index = players.indexOf(name);
  	if (index === -1) {
  		console.log(name + " hittades inte i arrayen när den skulle tas bort :(");
  	}
  	else{
  		players.splice(index, 1);
  		this.setState({
  			players:players,
  		})
  	}

  }

  set_status(status_name){
  	console.log(this.valid_status);
  	if (this.valid_status.includes(status_name)) {
  		this.setState({
  			status:status_name,
  		})
  	}
  	else{
  		console.log("oopsie " + status_name + " är ej en giltig status");
  	}
  }


  render() {

  	let display = "";
  	let status = this.state.status;
  	switch(status){
  		case "home":
  			display = (
  				<div>
			    	<img src = "https://i.imgur.com/Qf3Jw6e.jpg"/>
			    	<button onClick = {() => console.log(this.state.players)}>console logga alla spelare</button>
			    	<Add_player
			    		name_input_handle_change = {new_val => this.name_input_handle_change(new_val)}
			    		name_input_val = {this.state.name_input_val}
			    		create_player_event = {(event, isEvent = true) => this.create_player_event(event, isEvent)}
			    		potential_players = {this.state.potential_players}
			    	/>

			    	<Display_players
			    		players = {this.state.players}
			    		remove_player = {name => this.remove_player(name)}
			    	/>
		    	</div>);
  				break;
  		default:
  			console.log(this.state.status);
  			display = (<div>
  							<p>något blev fel lmao</p>
						</div>);
  	}

  	return(
	    <div>
	    	<Header
	    		set_status = {(status_name) => this.set_status(status_name)}
	    	/>
	    	{display}

	    </div>
	);
  }
}

export default Home;