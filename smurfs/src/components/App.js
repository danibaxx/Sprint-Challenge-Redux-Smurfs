import React, { Component } from 'react';
import { connect } from 'react-redux';

import SmurfsList from './SmurfsList';

import { getSmurfs } from '../actions';

import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      smurfs: '',
      getSmurfs: '',
      addSmurfs: '',
      fetchingSmurfs: ''    
    };
  };
  
    componentDidMount() {
    // this.props.getSmurfs();
    };

    handleChange = event => {
      event.preventDefault()

      this.setState({ [event.target.name]: event.target.value });
    }

    render() {
    if (this.props.fetchingSmurfs) {
      return <h2>Loading... Please wait...</h2>;
    }

    return (
      <div className="App">
        <SmurfsList handleChange={this.handleChange }/>
        <button type='submit'>Add Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs,
    addSmurfs: state.addSmurfs
  }
}

export default connect(
  mapStateToProps
)(App);

