import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { changeLevel } from "../actions";

class CrossFader extends Component {
    componentDidMount() {
        const Drag= Draggable.create("#x-fader", {
        type: "x",
        bounds: '.mixer svg g g#prefix__Layer_1 g#prefix__CrossFader',
        onDrag: () => {
          const size = Math.round(Math.abs(Drag[0].minX)+Drag[0].maxX);
          let position = ((Drag[0].x)/size*2).toFixed(2);
          if (position<=-0.96) position=-1;
          if (position>=0.96) position=1;
          if (position>=-1 && position<=1) store.dispatch( changeLevel({ xfaderlevel: position }) )
          console.log(store.getState().xfaderlevel)
            }
        })
    }

    render() {
        return (
            <div id="x-fader" className="x-fader">
                <img src="Assets/x_fader.svg" alt="Crossfader" />
            </div>
        );
    }
}

export default CrossFader;