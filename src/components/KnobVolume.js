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
  lpf_right: state.lpf_right.lpf_right,
  hpf_right: state.hpf_right.hpf_right,
});

class KnobVolume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: props.imageId,
      componentId: props.componentId,
      componentClass: props.componentClass
    };
    store.dispatch(change_lpf_left({ lpf_left: 10300 }))
    store.dispatch(change_hpf_left({ hpf_left: 0 }))
    store.dispatch(change_lpf_right({ lpf_right: 10300 }))
    store.dispatch(change_hpf_right({ hpf_right: 0 }))
  }

  componentDidMount() {
    const Drag = Draggable.create(`#${this.state.imageId}`, {
      type: "rotation",
      bounds: { minRotation: 0, maxRotation: 250 },
      onDrag: () => {
        const volume = Math.abs(Drag[0].rotation / 250).toFixed(2);
        switch (this.state.componentId) {
          case "fx-lpf-1":
            if (store.getState().isLoadedLeft.isLoadedLeft) {
              if (store.getState().reverb_left.reverb_left === true || store.getState().delay_left.delay_left === true ||
                store.getState().pan_left.pan_left < -0.03 || store.getState().pan_left.pan_left > 0.03 ||
                store.getState().hpf_left.hpf_left > 50) {
                Drag[0].endDrag()
                return;
              }
              let ReturnValue = 1 - volume;
              let frequency = Math.round((ReturnValue + 0.01) * 10000);
              store.dispatch(change_lpf_left({ lpf_left: frequency }))
              console.log(store.getState().lpf_left)
            }
            break;
          case "fx-hpf-1":
            if (store.getState().isLoadedLeft.isLoadedLeft) {
              if (store.getState().reverb_left.reverb_left === true || store.getState().delay_left.delay_left === true ||
                store.getState().pan_left.pan_left < -0.03 || store.getState().pan_left.pan_left > 0.03 ||
                store.getState().lpf_left.lpf_left < 10000) {
                Drag[0].endDrag()
                return;
              }
              let frequencyHigh = volume * 5000;
              store.dispatch(change_hpf_left({ hpf_left: frequencyHigh }))
              console.log(store.getState().hpf_left)
            }
            break;
          case "fx-lpf-2":
            if (store.getState().isLoadedRight.isLoadedRight) {
              if (store.getState().reverb_right.reverb_right === true || store.getState().delay_right.delay_right === true ||
                store.getState().pan_right.pan_right < -0.03 || store.getState().pan_right.pan_right > 0.03 ||
                store.getState().hpf_right.hpf_right > 50) {
                Drag[0].endDrag()
                return;
              }
              let ReturnValue2 = 1 - volume;
              let frequency2 = Math.round((ReturnValue2 + 0.01) * 10000);
              store.dispatch(change_lpf_right({ lpf_right: frequency2 }))
              console.log(store.getState().lpf_right)
            }
            break;
          default:
            if (store.getState().isLoadedRight.isLoadedRight) {
              if (store.getState().reverb_right.reverb_right === true || store.getState().delay_right.delay_right === true ||
                store.getState().pan_right.pan_right < -0.03 || store.getState().pan_right.pan_right > 0.03 ||
                store.getState().lpf_right.lpf_right < 10000) {
                Drag[0].endDrag()
                return;
              }
              let frequencyHigh2 = volume * 5000;
              store.dispatch(change_hpf_right({ hpf_right: frequencyHigh2 }))
              console.log(store.getState().hpf_right)
            }
            break;
        }
      }

    })
  }

  render() {
    return (
      <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
        <img id={`${this.state.imageId}`} src="Assets/knob_left-02.svg" alt="Button Knob"></img>
      </div >
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    const wavesurfer2 = store.getState().musicOnTheRight.musicOnTheRight;
    if (store.getState().isLoadedLeft.isLoadedLeft) {
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
    if (store.getState().isLoadedRight.isLoadedRight) {
      if (prevProps.lpf_right !== this.props.lpf_right) {
        // Update lowpass on the right
        const lowpass2 = wavesurfer2.backend.ac.createBiquadFilter();
        lowpass2.type = 'lowpass';
        lowpass2.frequency.value = this.props.lpf_right
        wavesurfer2.backend.setFilter(lowpass2);
      }
      if (prevProps.hpf_right !== this.props.hpf_right) {
        // Update highpass on the right
        const highpass2 = wavesurfer2.backend.ac.createBiquadFilter();
        highpass2.type = 'highpass';
        highpass2.frequency.value = this.props.hpf_right
        wavesurfer2.backend.setFilter(highpass2);
      }
    }
  }
}

export default connect(mapStateToProps)(KnobVolume);