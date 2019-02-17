import VinylDisc from "./VinylDisc"
import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { change_vinyl_left, change_vinyl_right } from "../actions";

class TurnTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageid: props.imageid,
      componentId: props.componentId,
      componentClass: props.componentClass,
    };
  }

  componentDidMount() {
    const Drag = Draggable.create(`#${this.state.imageid}`, {
      type: "rotation",
      bounds: { minRotation: 0, maxRotation: 100000 },
      onDrag: () => {
        const discRotation = Drag[0].rotation.toFixed(2);
        switch (this.state.componentId) {
          case "vinyl-left":
            store.dispatch(change_vinyl_left({ vinyl_left: discRotation }))
            console.log(store.getState().vinyl_left)
            break;
          default:
            store.dispatch(change_vinyl_right({ vinyl_right: discRotation }))
            console.log(store.getState().vinyl_right)
            break;
        }
      }
    })
  }

  render() {
    if (this.state.componentId==="vinyl-left") {
      return (
        <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
          <VinylDisc id={`${this.state.imageid}`} artwork={`${store.getState().vinyl_art_left}`} artworkid='img1' imageid={`${this.state.imageid}`} />
        </div>
      )
    } else {
    return (
      <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
        <VinylDisc id={`${this.state.imageId}`} artwork={`${store.getState().vinyl_art_right}`} artworkid='img2' imageid={`${this.state.imageid}`} />
      </div>
    )}
  }

  componentDidUpdate() {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    wavesurfer.on('audioprocess', function () {
      if (wavesurfer.isPlaying()) {
        const totalTime = wavesurfer.getDuration();
        const currentTime = wavesurfer.getCurrentTime();
        const percentage = (currentTime / totalTime)*100;
        const rotationAngle = 1000 * percentage;
        document.getElementById("vinyl-left").style.transform = `rotate(${rotationAngle}deg)`;
      } else {
        const totalTime = wavesurfer.getDuration();
        const currentTime = wavesurfer.getCurrentTime();
        const percentage = (currentTime / totalTime)*100;
        const rotationAngle = 2000 * percentage;
        document.getElementById("vinyl-left").style.transform = `rotate(-${rotationAngle}deg)`;
      }
    });
  }

}

export default TurnTables;