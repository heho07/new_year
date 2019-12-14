import React, { Component } from "react";

class Add_player extends Component {
  // behövde skriva om koden med en konstruktor för att få tillgång till props
  constructor(props) {
    super(props);

  }

  add_iron_gang(){
    // this.props.potential_players.forEach(name =>{
    //   let test = this.props.create_player_event(name, false);
    //   if (test === -1){
    //     return;
    //   }
    // })
    let names = this.props.potential_players;
    let test = -1;
    for (var i = names.length - 1; i >= 0; i--) {
      test = this.props.create_player_event(names[i], false);
      if (test != -1) {
        console.log("Avbryter inläggningen helt");
        break;
      }
    }
  }

  render() {
  	return(
	    <div>
	    	<form onSubmit={event => this.props.create_player_event(event)}>
		        <label>
		          Name:
		          <input type="text" value={this.props.name_input_val} onChange={event => this.props.name_input_handle_change(event)} />
		        </label>
		        <input type="submit" value="Submit" />
	      </form>
        <button onClick = {() => this.add_iron_gang()}>Alla ska med!</button>
	    </div>
	);
  }
}

export default Add_player;