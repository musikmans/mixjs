import React, { Component } from "react"
import { connect } from 'react-redux';
import { store } from "../store";

const mapStateToProps = state => ({
  bpmRight: state.bpmRight.bpmRight,
});

class BpmRight extends Component {
  render() {
    return (
      <>
        <p className="bpmtopright">BPM</p>
        <div id="bpmright" className="bpmright"></div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (store.getState().isLoadedRight.isLoadedRight) {
      if (prevProps.bpmRight !== this.props.bpmRight) {
        document.getElementById('bpmright').innerHTML = this.props.bpmRight;
      }
    }
  }
}

export default connect(mapStateToProps)(BpmRight);