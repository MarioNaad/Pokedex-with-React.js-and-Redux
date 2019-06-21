import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import Pokedex from "../img/poke-dex.png";


let currentPage = () => {
  $("li#home").addClass("active");
  $("li#search").removeClass("active");
  $("li#trainer").removeClass("active");
};

class Home extends Component {
  componentDidMount() {
    currentPage();
  }

  
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="Home__col col-4">
              <img className="home_logo " src={Pokedex} alt="Conf Logo" />
            </div>
            <div className="Home__col col-7 ">
              <h1>The Ultimate PokeDex</h1>
              <p>
                Get all your favorite Pokemons info from all of the Pokemon
                World Regions. What are you waiting for... Gotta Catch'Em All
                !!!
              </p>
              <div className="Badges__buttons">
                <Link to="/search" className="btn btn-primary">
                  I Choose You
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
