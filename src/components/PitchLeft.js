import React, { Component } from "react"
import { Draggable } from "gsap/Draggable"
import { store } from "../store";
import { changeLeftPitchLevel } from "../actions";

class PitchLeft extends Component {
    componentDidMount() {
        const Drag = Draggable.create("#left-side-pitch", {
        type: "y",
        bounds: '.mixer svg g g#prefix__Layer_1 g#prefix__Pitch-2 .prefix__cls-4',
        onDrag: () => {
          const size = Math.round(Math.abs(Drag[0].minY)+Drag[0].maxY);
          let position = ((Drag[0].y)/size*2).toFixed(2);
          if (position<=-0.96) position=-1;
          if (position>=0.96) position=1;
          if (position>=-1 && position<=1) store.dispatch( changeLeftPitchLevel({ leftPitchLevel: position }) )
          console.log(store.getState().leftPitchLevel)
            }
        })
    }

    render() {
        return (
            <div id="fader-pitch-left" className="fader-pitch-left">
                <img id="left-side-pitch" src="Assets/fader.svg" alt="Pitch fader on left side" />
            </div>
        );
    }
}

export default PitchLeft;