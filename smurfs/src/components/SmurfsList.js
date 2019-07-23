import React from 'react';



class SmurfsList extends React.Component {
  constructor() {
    super();
    this.state = {
      addSmurf: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();

    this.setState({
      name: '',
      height: '',
      age: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} required />
          <input type="text" name="age" placeholder="Age" value={this.state.age} required />
          <input type="text" name="height" placeholder="Height" value={this.state.height} required />
        </form>
      </div>
    );
  };
  
}

export default SmurfsList;
