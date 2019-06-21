import React, { Component, Fragment } from "react";
import $ from "jquery";
import "./styles/Trainer.css";
import { connect } from "react-redux";
import Hero from "../components/Hero";
import Header from "../img/trainer-hero.png";
import WhatPokemon from "../img/what-pokemon.png";
import * as actions from "../store/actions";
import { bindActionCreators } from "redux";
import PokemonCatchedList from "../components/PokemonCatchedList";
import { Link } from "react-router-dom";

let currentPage = () => {
  $("li#home").removeClass("active");
  $("li#search").removeClass("active");
  $("li#trainer").addClass("active");
};

class Trainer extends Component {
  componentDidMount() {
    currentPage();
  }
  
  
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Hero heroBanner={Header} />
        <div className="container">
          <div className="text-center title">
            <h1>Hello Trainer...</h1>
            <span className="description">
              <p>
                Here you can check your new buddies and their exceptionals
                stats, why you dont take a look by yourself and remember
                <br /> Gotta Catch'Em All....
              </p>
            </span>
          </div>

          <div  className="mt-4">
            {this.props.trainer.ownPokemons.catched.length <= 0 && (
              <Fragment>
                <img
                  className=" mx-auto d-block img"
                  src={WhatPokemon}
                  alt="Gengar sahpe"
                />
                <h3 className="description text-center">
                  You don't have any Pokemons yet...
                </h3>
              </Fragment>
            )}

            <PokemonCatchedList
              data={this.props.data}
              trainerData={this.props.trainer}
              actions={this.props.actions}
            />
            <div className="d-flex bd-highlight mb-3">
              <Link to="/search" className="btn btn-secondary p-2 bd-highlight">
                Search new Pokemons
              </Link>
              {this.props.trainer.ownPokemons.catched.length > 0 && (
                <button
                  className="btn btn-primary  ml-auto p-2 bd-highlight"
                  onClick={this.props.actions.releasePokemons}
                >
                  Release These Pokemons
                </button>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trainer);
