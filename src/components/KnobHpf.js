import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_hpf_left } from "../actions";

const mapStateToProps = state => ({
  hpf_left: state.hpf_left.hpf_left,
});

class KnobHpf extends Component {
  componentDidMount() {
    const Drag = Draggable.create(`#knob-hpf-left`, {
      type: "rotation",
      bounds: { minRotation: 0, maxRotation: 250 },
      onDrag: () => {
        const volume = Math.abs(Drag[0].rotation / 250).toFixed(2);
        if (store.getState().isLoadedLeft.isLoadedLeft) {
          if (store.getState().distortion_left.distortion_left === true || store.getState().delay_left.delay_left === true ||
            store.getState().pan_left.pan_left < -0.05 || store.getState().pan_left.pan_left > 0.05 ||
            store.getState().lpf_left.lpf_left < 10000) {
            Drag[0].endDrag()
            return;
          }
          let frequencyHigh = volume * 5000;
          store.dispatch(change_hpf_left({ hpf_left: frequencyHigh }))
        }

      }

    })
  }

  render() {
    return (
      <div id='fx-hpf-1' className='fx-left'>
        <img id='knob-hpf-left' src="Assets/knob_left-02.svg" alt="Button Knob"></img>
      </div >
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    if (store.getState().isLoadedLeft.isLoadedLeft && prevProps.hpf_left !== this.props.hpf_left) {
        // Update highpass on the left
        const highpass = wavesurfer.backend.ac.createBiquadFilter();
        highpass.type = 'highpass';
        highpass.frequency.value = this.props.hpf_left
        wavesurfer.backend.setFilter(highpass);
    }
  }
}

export default connect(mapStateToProps)(KnobHpf);