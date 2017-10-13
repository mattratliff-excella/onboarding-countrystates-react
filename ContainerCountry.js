import React from 'react';
import ReactDOM from 'react-dom';
import { ViewCountry } from './ViewCountry';

export class ContainerCountry extends React.Component {  
  constructor(props) {
    super(props);
    this.getCountries = this.getCountries.bind(this);

    this.state = {
      countries: []
    };
    this.getCountries();
  }
  
  getCountries = () => {
  fetch('https://xc-ajax-demo.herokuapp.com/api/countries/')  
    .then(response => response.json()
    .then(data => this.setState({countries: data}))); 
  } 

  handleChange = (name) => {
    this.props.onChange(name);
  }

  render() {
    return (
      <div id="container">
          <ViewCountry onChange={this.handleChange} data={this.state.countries} />
      </div>
      );
  }
}
 
ReactDOM.render(
  <ContainerCountry />,
  document.getElementById('root')
);