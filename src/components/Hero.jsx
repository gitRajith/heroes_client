import React, { Component } from "react";

class Hero extends Component {
  state = {
    heroId: -189,
    movies: ["Infinity War", "Endgame", "First Avenger"],
    likeCount: 0,
  };
  render() {
    return (
      // movies=["Infinity War","Endgame","First Avenger];

      //<React.Fragment>

      /*
            <h1 style={{width:"18rem",fontSize:"90px"}}>Avengers incoming ...</h1> 
            <h2>{this.isHero()}</h2>
            <button type="button" className="btn btn-primary">Click on Avenger</button>

            */
      //</React.Fragment>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://i1.pngguru.com/preview/829/402/345/avengers-endgame-2019-avengers-snap-logo-avengers-logo-png-clipart-thumbnail.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Aenger Name</h5>
          <h6>Avenger Birth Name</h6>
          <ul>{this.showMovies()}</ul>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.likeAvenger(1);
            }}
          >
            Like{""}
            <span className="badge badge-light">{this.state.likeCount}</span>
          </button>
        </div>
      </div>

      //inside jsx css  font-size use as camel case like this "fontSize"
    );
  }

  isHero() {
    //if(this.state.heroId <0) return "Not an Avenger"; //if else can write like this
    // else return "Is an Avenger";

    return this.state.heroId < 0 ? "Not an Avenger" : "Is an Avenger"; //(turnery conditional operator)
    //we can write if else like this, (?) indicates then
  }

  showMovies() {
    //return li element for every value inside the movie

    if (this.state.movies.length === 0) return <p>No Movies Available</p>;
    return this.state.movies.map((movie) => <li key={movie}>{movie}</li>);
  }
  likeAvenger = (likeCounter) => {
    this.setState({ likeCount: this.state.likeCount + likeCounter });
  };
}

export default Hero;
