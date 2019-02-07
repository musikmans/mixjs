import React, { Component } from "react"
import { Draggable } from "gsap/Draggable"

class PitchRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pitchLevelRight: 0,
        };
      }

    componentDidMount() {
        const Drag = Draggable.create("#right-side-pitch", {
        type: "y",
        bounds:{minY:-315, maxY:315},
        onDrag: () => {
          const position = ((Drag[0].y / 630)*2).toFixed(2);
          this.setState((state, props) =>  {
              return {pitchLevelRight: position};
          });
          console.log(this.state.pitchLevelRight)
            }
        })
    }

    render() {
        return (
            <div id="fader-pitch-right" className="fader-pitch-right">
                <img id="right-side-pitch" src="Assets/fader_right.svg" alt="Pitch fader on right side" />
            </div>
        );
    }
}

export default PitchRight;