import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";



class AnimalsList extends Component {
  state ={
    searchInput: "",
  }

  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.setState.searchInput);
  }
   animalslisting = animals.map((item) => (
    <AnimalsCard key={item.name} name={item.name} />
  ));
 
    render() {

      const animalFilter = animals.filter(animal => {
        return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
      });

      const animalslisting = animalFilter.map((item) => (
        <AnimalsCard key={item.name} name={item.name} />
      ));

    

  return (
    <div>
      <div className="search">
      <FontAwesomeIcon icon={faSearch} />
            <input type="text" onChange={this.searchInputHandler}/>
</div>
    <div className="animalsList">
      <Switch>
        <Route exact path={this.props.match.path}>
          {animalslisting}
        </Route>
        <Route path={`${this.props.match.path}/:animal`}>
          <AnimalSingle />
        </Route>
      </Switch>
    </div>
    </div>
  );
};
}

export default AnimalsList;
