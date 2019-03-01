import React, { Component } from "react"
import { connect } from 'react-redux';
import { store } from "../store";

const mapStateToProps = state => ({
  bpmLeft: state.bpmLeft.bpmLeft,
});

class BpmLeft extends Component {
  render() {
    return (
      <>
        <p className="bpmtop">BPM</p>
        <div id="bpmleft" className="bpmleft"></div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (store.getState().isLoadedLeft.isLoadedLeft) {
      if (prevProps.bpmLeft !== this.props.bpmLeft) {
        document.getElementById('bpmleft').innerHTML = this.props.bpmLeft;
      }
    }
  }
}

export default connect(mapStateToProps)(BpmLeft);