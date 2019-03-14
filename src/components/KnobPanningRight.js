import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_pan_right } from "../actions";
const { detect } = require('detect-browser');
const browser = detect();

const mapStateToProps = state => ({
  pan_right: state.pan_right.pan_right,
});

class KnobPanningRight extends Component {
  componentDidMount() {
    store.dispatch(change_pan_right({ pan_right: 0 }))
    const Drag = Draggable.create('#knob-pan-right', {
      type: "rotation",
      bounds: { minRotation: -125, maxRotation: 125 },
      onDrag: () => {
        const volume = ((Drag[0].rotation / 250) * 2).toFixed(2);
        if (store.getState().isLoadedRight.isLoadedRight) {
          if (store.getState().distortion_right.distortion_right === true || store.getState().delay_right.delay_right === true ||
            store.getState().lpf_right.lpf_right < 10000 || store.getState().hpf_right.hpf_right > 50) {
            Drag[0].endDrag()
            return;
          }
          store.dispatch(change_pan_right({ pan_right: volume }))
        }
      }
    })

  }
  render() {
    return (
      (browser.name === "safari") ?
        <div id='fx-pan-2' className='fx-right' style={{ backgroundColor: '#ba0d0d', fontSize: '1.5vh', transform: 'rotate(0deg)', fontFamily: "Anton, sans-serif", width: '8vh', height: '9vh', marginRight: '-0.9vh', marginTop: '-3.4vh', padding: '0.3vh' }}>
          <br /><br /><br /><br />
        </div>
        :
        <div id='fx-pan-2' className='fx-right'>
          <img id='knob-pan-right' src="Assets/knob_left-02.svg" alt="Button Knob Right" />
        </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
    if (store.getState().isLoadedRight.isLoadedRight && browser.name !== "safari" && prevProps.pan_right !== this.props.pan_right) {
      // Update panning on the right
      const panning = wavesurfer.backend.ac.createStereoPanner();
      panning.pan.value = this.props.pan_right
      wavesurfer.backend.setFilter(panning);
    }
  }
}

export default connect(mapStateToProps)(KnobPanningRight);