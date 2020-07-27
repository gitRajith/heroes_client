import React, { Component } from "react";
import Hero from "./Hero";

class Heros extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Hero />
        </div>

        <div>
          <Hero />
        </div>

        <div>
          <Hero />
        </div>
      </React.Fragment>
    );
  }
}

export default Heros;
