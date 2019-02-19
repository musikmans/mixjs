import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_pan_left, change_pan_right } from "../actions";

const mapStateToProps = state => ({
  pan_left: state.pan_left.pan_left,
  pan_right: state.pan_right.pan_right,
});

class KnobPanning extends Component {
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
      bounds: { minRotation: -125, maxRotation: 125 },
      onDrag: () => {
        const volume = ((Drag[0].rotation / 250) * 2).toFixed(2);
        switch (this.state.componentId) {
          case "fx-pan-1":
            store.dispatch(change_pan_left({ pan_left: volume }))
            console.log(store.getState().pan_left)
            break;
          default:
            store.dispatch(change_pan_right({ pan_right: volume }))
            console.log(store.getState().pan_right)
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
    const wavesurfer2 = store.getState().musicOnTheRight.musicOnTheRight;
    if (prevProps.pan_left !== this.props.pan_left) {
      // Update panning on the left
      const panning = wavesurfer.backend.ac.createStereoPanner();
      panning.pan.value = this.props.pan_left
      wavesurfer.backend.setFilter(panning);
    }
    if (prevProps.pan_right !== this.props.pan_right) {
      // Update lowpass on the right
      const panning2 = wavesurfer2.backend.ac.createStereoPanner();
      panning2.pan.value = this.props.pan_right
      wavesurfer2.backend.setFilter(panning2);
    }
  }
}

export default connect(mapStateToProps)(KnobPanning);