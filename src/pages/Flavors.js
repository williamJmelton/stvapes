import React, { Component } from 'react';
import Flavor from '../components/Flavor';

import db from '../Utility/Firebase';

class Flavors extends Component {
  recievedFlavors = [];

  state = {
    flavors: []
  };

  componentDidMount() {
    db.collection('flavors')
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
        // eslint-disable-next-line
        console.log('Error getting documents', err);
      })
      .then(() => {
        this.setState({
          flavors: this.recievedFlavors
        });
      });
  }

  FlavorsToRender;

  render() {
    let juices = null;
    const { flavors } = this.state;

    if (flavors.length !== 0) {
      // eslint-disable-next-line
      console.log('we have data!');
      juices = (
        <div>
          {this.recievedFlavors.map(flavor => (
            <Flavor
              brand={flavor.name}
              key={flavor.name}
              flavors={flavor.flavors}
            />
          ))}
        </div>
      );
    }

    return <div>{juices}</div>;
  }
}

export default Flavors;
