import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';

class MyComp extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
        <div>
            <span>Clicks: {this.state.clicked}</span>
            <button onClick={e=>{this.setState({ clicked: this.state.clicked + 1 || 1});}}>Click Me</button>
        </div>
    );
  }
}

ReactDOM.render(<MyComp />, window.app);
