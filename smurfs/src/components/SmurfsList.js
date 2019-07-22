import { Component } from 'react';
import { connect } from 'react-redux';

class SmurfsList extends Component {
  constructor() {
    super()
    this.state = {
      smurfs: '',
      getSmurfs: '',
      addSmurfs: ''      
    };
  };
    
    componentDidMount() {
      this.props.getSmurfs();
    }


  render() {
    if (this.props.fetchingSmurfs) {
      <h2>Loading... Please wait...</h2>;
    }
    return (
      <div>
        <form>
          <input type="text" name="name" placeholder="Name" value={this.state.name} />
          <input type="text" name="age" placeholder="Age" value={this.state.age} />
          <input type="text" name="height" placeholder="Height" value={this.state.height} />

        </form>
      </div>
    )

  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfsReducer.smurfs,
    getSmurfs: state.smurfsReducer.getSmurfs,
    addSmurfs: state.smurfsReducer.addSmurfs
  }
}

export default connect(
  mapStateToProps
)(SmurfsList);