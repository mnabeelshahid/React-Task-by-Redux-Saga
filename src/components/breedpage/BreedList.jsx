import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogBreeds, SetSelectedBreed } from "../../actions/dogs";
import { Link } from "react-router-dom";

class BreedList extends Component {
  componentDidMount() {
    const { fetchDogBreeds } = this.props;
    console.log('dog breeds',fetchDogBreeds())
  }

  handleClick = breed => {
    console.log('breed',breed);
    this.props.setSelectedBreed(breed);
  };

  render() {
    const { dogBreeds = {} } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>Hello Chose a breed to view its images</h2>
        <ul>
          {Object.keys(dogBreeds).map(breed => {
            return (
              <li
                style={{ listStyleType: "none" }}
                key={breed}
                onClick={() => {
                  this.handleClick(breed);
                }}
              >
                <Link to="/showDogImages">{breed}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dogBreeds: state.dogs.dogBreeds
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchDogBreeds: () => dispatch({ type: "FETCH_DOG_BREEDS" }),
    setSelectedBreed: name =>
      dispatch({ type: "SET_SELECTED_BREED", payload: name })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreedList);
