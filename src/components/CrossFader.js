import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";

class CrossFader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          xfaderlevel: 0,
        };
      }

    componentDidMount() {
        const Drag = Draggable.create("#x-fader", {
        type: "x",
        bounds:{minX:-258, maxX:258},
        onDrag: () => {
          const position = ((Drag[0].x / 516)*2).toFixed(2);
          this.setState((state, props) =>  {
              return {xfaderlevel: position};
          });
          console.log(this.state.xfaderlevel)
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