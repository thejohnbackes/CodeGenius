'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class TestComponent extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.onClick = () => this.props.dispatch(testAction())
  }
  render(){
    return (
      <div>
        <p> {this.props.children} </p>
        <p> This is a really great component! </p>
        <button onClick={this.onClick}> Click Me </button>
      </div>
    )
  }
}

function testAction(){
  console.log('test action is fired');
  return {
    type: 'TEST_ACTION',
    payload: {
      text: "Now I've got something!"
    }
  }
}

const initialState = {
  text: ["I've got plenty of nuthin', and nuthin's plenty for me."]
}

const ActionTypes = {
  TEST_ACTION: 'TEST_ACTION'
}

export function TestReducer( state=initialState, action){
  if(action.type === ActionTypes.TEST_ACTION){
    let newText = state.text.concat([{text: action.payload.text}])
    console.log('running the things');
    return {text: newText}
  }
  console.log('testing', state);
  return state;
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
    // onSelection: (_selection) => dispatch(selection(_selection)),
    // onAnnotation: (_selection, _annotation) => dispatch(annotation(_selection, _annotation))
  }
}

export default connect(mapStateToProps)(TestComponent)
