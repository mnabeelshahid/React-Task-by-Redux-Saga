import React, { Component } from "react";
import { connect } from "react-redux";

const inlineStyle = {
  image: {
    height: "250px",
    width: "250px",
    margin: "5px",
    border: "4px solid",
  }
};
class BreedImages extends Component {
  componentDidMount() {
    const { fetchDogImages ,selectedDog} = this.props;
    fetchDogImages(selectedDog);
  }
  render() {
    const { dogImages = [] } = this.props;
    console.log("hello")
      console.log(dogImages)
    return (
      <div>
         {Object.keys(dogImages).map(image => {

           console.log(image)
          return<img src={image} style={inlineStyle.image} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dogImages: state.dogs.dogImages,
    selectedDog: state.dogs.selectedBreed
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchDogImages: breedName => dispatch({type:'GET_IMAGES',payload:breedName})
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreedImages);
