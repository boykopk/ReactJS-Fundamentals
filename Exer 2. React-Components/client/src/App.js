import React, { Component } from 'react';
import './App.css';
import Street from './components/Street/Street';
import House from './components/House/House';
import HouseDetails from './components/HouseDetails/HouseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false
    }
  }
  componentWillMount() {
    fetch('http://localhost:9999/feed/street/all')
      .then(rawData => rawData.json())
      .then(data => {
        this.setState({
          streets: data.streets,
          hasFetched: true
        })
      })
  }

  getStreets() {
    return this.state.streets;
  }

  getSelectedStreet() {
    if (this.state.hasFetched) {
      return this.state.streets[this.state.selectedStreetIdx].homes;
    }
    return [];
  }

  getSelectedHouse() {
    if (this.state.hasFetched) {
      return this.state.streets[this.state.selectedStreetIdx].homes[this.state.selectedHouseIdx];
    }
    return [];
  }

  streetHoverEvent(idx) {
    this.setState({
      selectedStreetIdx: idx
    })
  }

  houseHoverEvent(idx) {
    this.setState({
      selectedHouseIdx: idx
    })
  }

  render() {
    return (
      <div className="App">
        <div className="streets">
          <h2>Streets</h2>
          {this.getStreets().map((street, idx) => (
            <Street location={street.location} key={idx} id={idx} streetHoverEvent={this.streetHoverEvent.bind(this)} />
          ))
          }
        </div>

        <div className="House">
          <h2>Houses</h2>
          {
            this.state.hasFetched ? this.getSelectedStreet().map((home, idx) => (
            <House type={home.type} description={home.description} imageUrl={home.imageUrl} key={idx} id={idx} price={home.price} houseHoverEvent={this.houseHoverEvent.bind(this)} />
          )) : ''
          }
        </div>
      
        <div>
          {this.state.hasFetched ? (<HouseDetails type={this.getSelectedHouse().type} description={this.getSelectedHouse().description} imageUrl={this.getSelectedHouse().imageUrl} key={this.state.selectedHouseIdx} price={this.getSelectedHouse().price} />) : ''}
        </div>
      </div>)
  }

}

export default App;
