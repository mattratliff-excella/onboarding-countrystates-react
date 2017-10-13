import React from 'react';
import ReactDOM from 'react-dom';
import { ViewState } from './ViewState';

export class ContainerState extends React.Component {  
  constructor(props) {
    super(props);
    this.getStates = this.getStates.bind(this);

    this.state = {
      states: []
    };
    this.getStates();
  }
  
  getStates = () => {
    if(this.props.country != null){
        var bodyStr = "country="+this.props.country;
        fetch('https://xc-ajax-demo.herokuapp.com/api/states/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
        body: bodyStr
      }).then(response => response.json()
        .then(data => this.setState({states: data})))
    }
}

  handleChange = (name) => {
    this.props.onChange(name);
  }

    render(){
      if(this.props.resetStates == true){
        this.getStates();
      }
       return (
          <div>
              <ViewState onChange={this.handleChange} data={this.state.states} />
          </div>
         )
    }
}
 
ReactDOM.render(
  <ContainerState />,
  document.getElementById('root')
);