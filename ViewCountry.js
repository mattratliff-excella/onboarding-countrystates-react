import React from 'react';
import ReactDOM from 'react-dom';

export class ViewCountry extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render(){
      let options = <option>Default</option>;
      
      if(this.props.data != null){
        options = this.props.data.map((data) => {
                return <option value={data.code}>{data.name}</option>;
            })
      }
       return (
          <div>
            Select Country:<br/>
            <select onChange={this.handleChange}>
            <option>Choose One</option>
            {options}
            </select>
        </div>
         )
    }
}

ReactDOM.render(
	<ViewCountry />,
	document.getElementById('root')
);