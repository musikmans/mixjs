import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";

class KnobVolume extends Component {
    constructor(props) {
        super(props);
        this.state = {
          level: 0,
          imageId: props.imageId,
          componentId: props.componentId,
          componentClass: props.componentClass
        };
      }
      

    componentDidMount() {
            const Drag = Draggable.create(`#${this.state.imageId}`, {
            type: "rotation",
            bounds:{minRotation:0, maxRotation:250},
            onDrag: () => {
              const volume = (Drag[0].rotation / 250).toFixed(2);
              this.setState((state, props) =>  {
                  return {level: volume};
              });
              console.log(this.state.level)
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