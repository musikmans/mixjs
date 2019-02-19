import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import {
  change_lpf_left,
  change_hpf_left, change_lpf_right, change_hpf_right,
} from "../actions";

const mapStateToProps = state => ({
  lpf_left: state.lpf_left.lpf_left,
  hpf_left: state.hpf_left.hpf_left,
});

class KnobVolume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: props.imageId,
      componentId: props.componentId,
      componentClass: props.componentClass
    };
  }

  componentDidMount() {
    const Drag = Draggable.create(`#${this.state.imageId}`, {
      type: "rotation",
      bounds: { minRotation: 0, maxRotation: 250 },
      onDrag: () => {
        const volume = Math.abs(Drag[0].rotation / 250).toFixed(2);
        switch (this.state.componentId) {
          case "fx-lpf-1":
            let ReturnValue = 1 - volume;
            let frequency = Math.round((ReturnValue + 0.01) * 10000);
            store.dispatch(change_lpf_left({ lpf_left: frequency }))
            console.log(store.getState().lpf_left)
            break;
          case "fx-hpf-1":
            let frequencyHigh = volume * 5000;
            store.dispatch(change_hpf_left({ hpf_left: frequencyHigh }))
            console.log(store.getState().hpf_left)
            break;
          case "fx-lpf-2":
            store.dispatch(change_lpf_right({ lpf_right: volume }))
            console.log(store.getState().lpf_right)
            break;
          default:
            store.dispatch(change_hpf_right({ hpf_right: volume }))
            console.log(store.getState().hpf_right)
            break;
        }
      }
    })
  }

  render() {
    return (
      <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
        <img id={`${this.state.imageId}`} src="Assets/knob_left-02.svg" alt="Button Knob"></img>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    if (prevProps.lpf_left !== this.props.lpf_left) {
      // Update lowpass on the left
      const lowpass = wavesurfer.backend.ac.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.value = this.props.lpf_left
      wavesurfer.backend.setFilter(lowpass);
    }
    if (prevProps.hpf_left !== this.props.hpf_left) {
      // Update highpass on the left
      const highpass = wavesurfer.backend.ac.createBiquadFilter();
      highpass.type = 'highpass';
      highpass.frequency.value = this.props.hpf_left
      wavesurfer.backend.setFilter(highpass);
    }
  }
}

export default connect(mapStateToProps)(KnobVolume);