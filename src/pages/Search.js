import React, { Component, Fragment } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import "./styles/Search.css";
import Hero from "../components/Hero";
import Header from "../img/poke-hero.png";
import * as actions from "../store/actions";
import { bindActionCreators } from "redux";
import PokemonList from "../components/PokemonList";
import { Link } from "react-router-dom";

let currentPage = () => {
  $("li#home").removeClass("active");
  $("li#search").addClass("active");
  $("li#trainer").removeClass("active");
};

class Search extends Component {
  /* state = {
    searchDisabled: true,
    regions: {
      kanto: "offset=0&limit=151"
    }
  }; */
  componentDidMount() {
    currentPage();
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  pokemonSearch = e => {
    this.props.actions.pokemonSearch(e.target.value);
  };
  handleClickRegionKanto = async e => {
    this.props.actions.disableSearchBox(false);
    this.props.actions.fetchPokemons(this.props.data.regions.kanto);
  };

  componentWillUnmount() {
    //This function was disabled because we dont need to re-fetch at this time
   // this.props.actions.clearDOM();
  }

  render() {
    console.log("Search Store:", this.props);
    console.log("Search Actions:", this.props.actions);
    return (
      <Fragment>
        <Hero heroBanner={Header} />
        <div className="container mt-4" id="test">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                onChange={this.pokemonSearch}
                type="text"
                className="form-control"
                name="search-pokemon"
                placeholder="Search Pokemons"
                disabled={this.props.search.searchDisabled}
              />
            </div>
          </form>
          <div className="d-flex bd-highlight mb-3">
            <button
              className="btn btn-primary p-2 bd-highlight"
              onClick={this.handleClickRegionKanto}
            >
              Show Kanto's Pokemons
            </button>
            
            <Link to="/trainer" className="btn btn-secondary ml-auto p-2 bd-highlight">
            My Pokemons
            </Link>
          </div>
          <div className="mt-4" id="pokemon-list">
            <PokemonList
              data={this.props.data}
              trainerData={this.props.trainer}
              actions={this.props.actions}
            />
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
)(Search);
