import React, { Component } from 'react';
import { render } from 'react-dom';
import { ContainerCountry } from './ContainerCountry';
import { ContainerState } from './ContainerState';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);

    this.state = {
      selectedCountry: null,
      selectedState: null,
      resetStates: false
    };
  }

  handleCountryChange = (name) => {
    this.setState({selectedCountry: name});
    this.setState({resetStates: true});
  }

  handleStateChange = (name) => {
    this.setState({selectedState: name});
  }

  render() {
    const firstselect = (
      <div id="wrapper">
          <ContainerCountry onChange={this.handleCountryChange}/>
      </div>
    );

    const secondselect = null;
    if(this.state.selectedCountry != null){
        console.log('gathering states for '+this.state.selectedCountry);
        secondselect = <ContainerState resetStates={this.state.resetStates} onChange={this.handleStateChange} country={this.state.selectedCountry} />;
    }

    const selectedState = null;
    if(this.state.selectedState != null){
      selectedState = <div>State selected = {this.state.selectedState}</div>;
    }
    return (
      <div>
        {firstselect}<br />
        {secondselect}<br/>
        {selectedState}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
