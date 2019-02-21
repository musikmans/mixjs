import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';
import { change_pan_left, change_pan_right } from "../actions";
const { detect } = require('detect-browser');
const browser = detect();

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
      componentClass: props.componentClass, 
    };
    store.dispatch(change_pan_left({ pan_left: 0 }))
    store.dispatch(change_pan_right({ pan_right: 0 }))
  }


  componentDidMount() {
    const Drag = Draggable.create(`#${this.state.imageId}`, {
      type: "rotation",
      bounds: { minRotation: -125, maxRotation: 125 },
      onDrag: () => {
        const volume = ((Drag[0].rotation / 250) * 2).toFixed(2);
        switch (this.state.componentId) {
          case "fx-pan-1":
            if (store.getState().isLoadedLeft.isLoadedLeft) {
              if (store.getState().reverb_left.reverb_left === true || store.getState().delay_left.delay_left === true ||
                store.getState().lpf_left.lpf_left < 10000 || store.getState().hpf_left.hpf_left > 50) {
                Drag[0].endDrag()
                return;
              }
              store.dispatch(change_pan_left({ pan_left: volume }))
              console.log(store.getState().pan_left)
            }
            break;
          default:
            if (store.getState().isLoadedRight.isLoadedRight) {
              if (store.getState().reverb_right.reverb_right === true || store.getState().delay_right.delay_right === true ||
                store.getState().lpf_right.lpf_right < 10000 || store.getState().hpf_right.hpf_right > 50) {
                Drag[0].endDrag()
                return;
              }
              store.dispatch(change_pan_right({ pan_right: volume }))
              console.log(store.getState().pan_right)
            }
            break;
        }
      }
    })

  }
  render() {
    return (
      (browser.name==="safari") ?
        <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`} style={{backgroundColor:'#fff',fontSize:'1.5vh',transform:'rotate(0deg)',fontFamily: "Anton, sans-serif", width:'4vw', marginLeft:'-0.9vh',  marginTop:'-3.4vh', padding: '0.3vh'}}>
          Function not available on safari
      </div>
        :
        <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
          <img id={`${this.state.imageId}`} src="Assets/knob_left-02.svg" alt="Button Knob"></img>
        </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    const wavesurfer2 = store.getState().musicOnTheRight.musicOnTheRight;
    if (browser.name!=="safari") {
      if (store.getState().isLoadedLeft.isLoadedLeft) {
        if (prevProps.pan_left !== this.props.pan_left) {
          // Update panning on the left
          const panning = wavesurfer.backend.ac.createStereoPanner();
          panning.pan.value = this.props.pan_left
          wavesurfer.backend.setFilter(panning);
        }
      }
      if (store.getState().isLoadedRight.isLoadedRight) {
        if (prevProps.pan_right !== this.props.pan_right) {
          // Update lowpass on the right
          const panning2 = wavesurfer2.backend.ac.createStereoPanner();
          panning2.pan.value = this.props.pan_right
          wavesurfer2.backend.setFilter(panning2);
        }
      }
    }
  }
}

export default connect(mapStateToProps)(KnobPanning);