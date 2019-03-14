import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_lpf_right } from "../actions";

const mapStateToProps = state => ({
  lpf_right: state.lpf_right.lpf_right,
});

class KnobLpfRight extends Component {
  componentDidMount() {
    store.dispatch(change_lpf_right({ lpf_right: 10300 }))
    const Drag = Draggable.create(`#knob-lpf-right`, {
      type: "rotation",
      bounds: { minRotation: 0, maxRotation: 250 },
      onDrag: () => {
        const volume = Math.abs(Drag[0].rotation / 250).toFixed(2);
        if (store.getState().isLoadedRight.isLoadedRight) {
          if (store.getState().distortion_right.distortion_right === true || store.getState().delay_right.delay_right === true ||
            store.getState().pan_right.pan_right < -0.05 || store.getState().pan_right.pan_right > 0.05 ||
            store.getState().hpf_right.hpf_right > 50) {
            Drag[0].endDrag()
            return;
          }
          let ReturnValue = 1 - volume;
          let frequency = Math.round((ReturnValue + 0.01) * 10000);
          store.dispatch(change_lpf_right({ lpf_right: frequency }))
        }
      }
    })
  }

  render() {
    return (
      <div id='fx-lpf-2' className='fx-right'>
        <img id='knob-lpf-right' src="Assets/knob_left-02.svg" alt="Button Knob"></img>
      </div >
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
    if (store.getState().isLoadedRight.isLoadedRight && prevProps.lpf_right !== this.props.lpf_right) {
      // Update lowpass on the right
      const lowpass = wavesurfer.backend.ac.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.value = this.props.lpf_right
      wavesurfer.backend.setFilter(lowpass);
    }
  }
}

export default connect(mapStateToProps)(KnobLpfRight);