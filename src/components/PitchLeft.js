import React, { Component } from "react"
import { Draggable } from "gsap/Draggable"

class PitchLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pitchLevelLeft: 0,
        };
      }

    componentDidMount() {
        const Drag = Draggable.create("#left-side-pitch", {
        type: "y",
        bounds:{minY:-315, maxY:315},
        onDrag: () => {
          const position = ((Drag[0].y / 630)*2).toFixed(2);
          this.setState((state, props) =>  {
              return {pitchLevelLeft: position};
          });
          console.log(this.state.pitchLevelLeft)
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