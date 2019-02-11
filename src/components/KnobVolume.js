import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import {
  change_delay_left, change_reverb_left, change_lpf_left,
  change_hpf_left, change_volume_left, change_delay_right,
  change_reverb_right, change_lpf_right, change_hpf_right,
  change_volume_right
} from "../actions";

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
        const volume = (Drag[0].rotation / 250).toFixed(2);
        switch (this.state.componentId) {
          case "vol-1":
            store.dispatch(change_volume_left({ volume_left: volume }))
            console.log(store.getState().volume_left)
            break;
          case "fx-delay-1":
            store.dispatch(change_delay_left({ delay_left: volume }))
            console.log(store.getState().delay_left)
            break;
          case "fx-reverb-1":
            store.dispatch(change_reverb_left({ reverb_left: volume }))
            console.log(store.getState().reverb_left)
            break;
          case "fx-lpf-1":
            store.dispatch(change_lpf_left({ lpf_left: volume }))
            console.log(store.getState().lpf_left)
            break;
          case "fx-hpf-1":
            store.dispatch(change_hpf_left({ hpf_left: volume }))
            console.log(store.getState().hpf_left)
            break;
          case "vol-2":
            store.dispatch(change_volume_right({ volume_right: volume }))
            console.log(store.getState().volume_right)
            break;
          case "fx-delay-2":
            store.dispatch(change_delay_right({ delay_right: volume }))
            console.log(store.getState().delay_right)
            break;
          case "fx-reverb-2":
            store.dispatch(change_reverb_right({ reverb_right: volume }))
            console.log(store.getState().reverb_right)
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
}

export default KnobVolume;