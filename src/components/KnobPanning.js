import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_pan_left } from "../actions";
const { detect } = require('detect-browser');
const browser = detect();

const mapStateToProps = state => ({
  pan_left: state.pan_left.pan_left,
});

class KnobPanning extends Component {
  componentDidMount() {
    store.dispatch(change_pan_left({ pan_left: 0 }))
    const Drag = Draggable.create('#knob-pan-left', {
      type: "rotation",
      bounds: { minRotation: -125, maxRotation: 125 },
      onDrag: () => {
        const volume = ((Drag[0].rotation / 250) * 2).toFixed(2);
        if (store.getState().isLoadedLeft.isLoadedLeft) {
          if (store.getState().distortion_left.distortion_left === true || store.getState().delay_left.delay_left === true ||
            store.getState().lpf_left.lpf_left < 10000 || store.getState().hpf_left.hpf_left > 50) {
            Drag[0].endDrag()
            return;
          }
          store.dispatch(change_pan_left({ pan_left: volume }))
        }
      }
    })

  }
  render() {
    return (
      (browser.name === "safari") ?
        <div id='fx-pan-1' className='fx-left' style={{ backgroundColor: '#ba0d0d', fontSize: '1.5vh', transform: 'rotate(0deg)', fontFamily: "Anton, sans-serif", width: '8vh', height: '9vh', marginLeft: '-0.9vh', marginTop: '-3.4vh', padding: '0.3vh' }}>
          <br /><br /><br /><br />
        </div>
        :
        <div id='fx-pan-1' className='fx-left'>
          <img id='knob-pan-left' src="Assets/knob_left-02.svg" alt="Button Knob"></img>
        </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
      if (store.getState().isLoadedLeft.isLoadedLeft && browser.name !== "safari" && prevProps.pan_left !== this.props.pan_left) {
        // Update panning on the left
        const panning = wavesurfer.backend.ac.createStereoPanner();
        panning.pan.value = this.props.pan_left
        wavesurfer.backend.setFilter(panning);
      }
  }
}

export default connect(mapStateToProps)(KnobPanning);