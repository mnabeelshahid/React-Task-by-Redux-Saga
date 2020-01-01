import React, { Component } from "react";
import BreedList from "../breedpage";
import BreedImages from "../BreedImages";
import {BrowserRouter,Route} from "react-router-dom"

class MainPage extends Component {
  render() {
    return (
        <BrowserRouter>
      <div>
        {/* <BreedList /> */}
        {/* <BreedImages /> */}
         <Route exact path="/" component={BreedList}/>
         <Route exact path="/showDogImages" component={BreedImages}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default MainPage;
