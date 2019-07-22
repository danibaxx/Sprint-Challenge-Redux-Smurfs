import { Component } from 'react';
import { connect } from 'react-redux';

const SmurfsList = () => {
    return (
      <div>
        <form>
          <input type="text" name="name" placeholder="Name" value={this.state.name} />
          <input type="text" name="age" placeholder="Age" value={this.state.age} />
          <input type="text" name="height" placeholder="Height" value={this.state.height} />
          <button onClick={() => addSmurfs(smurf)}>Add Smurf</button>

        </form>
      </div>
    )
}

export default SmurfsList;
