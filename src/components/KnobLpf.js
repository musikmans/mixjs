import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_lpf_left } from "../actions";

const mapStateToProps = state => ({
  lpf_left: state.lpf_left.lpf_left,
});

class KnobLpf extends Component {
  componentDidMount() {
    store.dispatch(change_lpf_left({ lpf_left: 10300 }))
    const Drag = Draggable.create(`#knob-lpf-left`, {
      type: "rotation",
      bounds: { minRotation: 0, maxRotation: 250 },
      onDrag: () => {
        const volume = Math.abs(Drag[0].rotation / 250).toFixed(2);
        if (store.getState().isLoadedLeft.isLoadedLeft) {
          if (store.getState().distortion_left.distortion_left === true || store.getState().delay_left.delay_left === true ||
            store.getState().pan_left.pan_left < -0.05 || store.getState().pan_left.pan_left > 0.05 ||
            store.getState().hpf_left.hpf_left > 50) {
            Drag[0].endDrag()
            return;
          }
          let ReturnValue = 1 - volume;
          let frequency = Math.round((ReturnValue + 0.01) * 10000);
          store.dispatch(change_lpf_left({ lpf_left: frequency }))
        }
      }
    })
  }

  render() {
    return (
      <div id='fx-lpf-1' className='fx-left'>
        <img id='knob-lpf-left' src="Assets/knob_left-02.svg" alt="Button Knob"></img>
      </div >
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    if (store.getState().isLoadedLeft.isLoadedLeft && prevProps.lpf_left !== this.props.lpf_left) {
      // Update lowpass on the left
      const lowpass = wavesurfer.backend.ac.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.value = this.props.lpf_left
      wavesurfer.backend.setFilter(lowpass);
    }
  }
}

export default connect(mapStateToProps)(KnobLpf);