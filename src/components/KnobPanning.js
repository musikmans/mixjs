import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { change_pan_left, change_pan_right } from "../actions";

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
            bounds:{minRotation:-125, maxRotation:125},
            onDrag: () => {
              const volume = ((Drag[0].rotation / 250)*2).toFixed(2);
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
}

export default KnobPanning;