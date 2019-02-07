import VinylDisc from "./VinylDisc"
import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";

class TurnTables extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: 0,
          imageId: props.imageId,
          componentId: props.componentId,
          componentClass: props.componentClass,
          artwork: props.artwork,
          artworkid: props.artworkid
        };
      }
      

    componentDidMount() {
            const Drag = Draggable.create(`#${this.state.imageId}`, {
            type: "rotation",
            onDrag: () => {
              const discRotation = Drag[0].rotation.toFixed(2);
              this.setState((state, props) =>  {
                  return {position: discRotation};
              });
              console.log(this.state.position)
            }
        })
        
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
            <VinylDisc id={`${this.state.imageId}`} artwork={`${this.state.artwork}`} artworkid={`${this.state.artworkid}`} />
            </div>
        );
    }
}

export default TurnTables;