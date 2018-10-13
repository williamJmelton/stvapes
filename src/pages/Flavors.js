import React, { Component } from "react";
import Flavor from '../components/Flavor';

import db from "../Utility/Firebase";

class Flavors extends Component {
  recievedFlavors = [];
  FlavorsToRender;
  state = {
    flavors: []
  }

  componentDidMount() {
    db.collection("flavors")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.recievedFlavors.push({
            name: doc.id,
            flavors: doc.data()
          });
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      }).then(() => {
        this.setState({
          flavors: this.recievedFlavors
        })
      });
  }

  render() {
    let juices = null;

    if ( this.state.flavors.length !== 0 ) {
      console.log('we have data!');
      juices = (
        <div>
          {this.recievedFlavors.map((flavor, index) => {
            return <Flavor brand={flavor.name} key={index} flavors={flavor.flavors} />
          })}
        </div>
      )
    }

    return(
      <div>
        {juices}
      </div>
    );
  }

}

export default Flavors;
