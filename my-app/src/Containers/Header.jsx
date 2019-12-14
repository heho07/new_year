import React, { Component } from "react";

class Header extends Component {
  // behövde skriva om koden med en konstruktor för att få tillgång till props
  constructor(props) {
    super(props);
    
  }

 
  handle_click(event){
    event.preventDefault();
    this.props.set_status(event.target.value);
  }

  

  render() {
  	return(
	    <div>
        <button value = "home" onClick = {(event) => this.handle_click(event)}>Gå tillbaka</button>
	    </div>
	);
  }
}

export default Header;