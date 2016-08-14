import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import clickApp from './reducers/reducer';
import * as action from './actions/actions';

let store = createStore(clickApp);

class MyComp extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const self = this;
    this.unsubscribe = this.props.store.subscribe(e=>{self.forceUpdate()});
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick() {
    this.props.store.dispatch(
      action.click()
    );
  }

  render() {

    return (
        <div>
            <span>Clicks: {this.props.store.getState().clickCount}</span>
            <button onClick={this.handleClick}>Click Me</button>
        </div>
    );
  }
}

ReactDOM.render(<MyComp store={store} />, window.app);
