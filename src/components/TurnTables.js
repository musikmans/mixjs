import VinylDisc from "./VinylDisc"
import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  musicOnTheLeft: state.musicOnTheLeft.musicOnTheLeft,
  musicOnTheRight: state.musicOnTheRight.musicOnTheRight,
});

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
    Draggable.create(`#${this.state.imageid}`, {
      type: "rotation",
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.musicOnTheLeft !== this.props.musicOnTheLeft) {
      const wavesurfer = this.props.musicOnTheLeft;
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
        const rotationAngle = 1000 * percentage;
        document.getElementById("vinyl-left").style.transform = `rotate(-${rotationAngle}deg)`;
      }
    });
    }
    if (prevProps.musicOnTheRight !== this.props.musicOnTheRight) {
      const wavesurferRight = this.props.musicOnTheRight;
      wavesurferRight.on('audioprocess', function () {
      if (wavesurferRight.isPlaying()) {
        const totalTime = wavesurferRight.getDuration();
        const currentTime = wavesurferRight.getCurrentTime();
        const percentage = (currentTime / totalTime)*100;
        const rotationAngle = 1000 * percentage;
        document.getElementById("vinyl-right").style.transform = `rotate(${rotationAngle}deg)`;
      } else {
        const totalTime = wavesurferRight.getDuration();
        const currentTime = wavesurferRight.getCurrentTime();
        const percentage = (currentTime / totalTime)*100;
        const rotationAngle = 1000 * percentage;
        document.getElementById("vinyl-right").style.transform = `rotate(-${rotationAngle}deg)`;
      }
    });
    }
  }

}

export default connect (mapStateToProps)(TurnTables);