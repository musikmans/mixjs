import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_hpf_right } from "../actions";

const mapStateToProps = state => ({
  hpf_right: state.hpf_right.hpf_right,
});

class KnobHpfRight extends Component {
  componentDidMount() {
    const Drag = Draggable.create(`#knob-hpf-right`, {
      type: "rotation",
      bounds: { minRotation: 0, maxRotation: 250 },
      onDrag: () => {
        const volume = Math.abs(Drag[0].rotation / 250).toFixed(2);
        if (store.getState().isLoadedRight.isLoadedRight) {
          if (store.getState().distortion_right.distortion_right === true || store.getState().delay_right.delay_right === true ||
            store.getState().pan_right.pan_right < -0.05 || store.getState().pan_right.pan_right > 0.05 ||
            store.getState().lpf_right.lpf_right < 10000) {
            Drag[0].endDrag()
            return;
          }
          let frequencyHigh = volume * 5000;
          store.dispatch(change_hpf_right({ hpf_right: frequencyHigh }))
        }

      }

    })
  }

  render() {
    return (
      <div id='fx-hpf-2' className='fx-right'>
        <img id='knob-hpf-right' src="Assets/knob_left-02.svg" alt="Button Knob"></img>
      </div >
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
    if (store.getState().isLoadedRight.isLoadedRight && prevProps.hpf_right !== this.props.hpf_right) {
        // Update highpass on the right
        const highpass = wavesurfer.backend.ac.createBiquadFilter();
        highpass.type = 'highpass';
        highpass.frequency.value = this.props.hpf_right
        wavesurfer.backend.setFilter(highpass);
    }
  }
}

export default connect(mapStateToProps)(KnobHpfRight);