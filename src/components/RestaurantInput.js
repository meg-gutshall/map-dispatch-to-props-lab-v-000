import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = e => {
    this.setState({
      name: e.target.value
    });
  }

  handleOnLocationChange = e => {
    this.setState({
      location: e.target.value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addRestaurant(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            onChange={this.handleOnNameChange}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={this.handleOnLocationChange}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: (newRestaurant) => {
//       dispatch(addRestaurant(newRestaurant))
//     }
//   }
// }

//connect this component by wrapping RestaurantInput below
export default connect(null, { addRestaurant })(RestaurantInput);
