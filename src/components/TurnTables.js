import VinylDisc from "./VinylDisc"
import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  musicOnTheLeft: state.musicOnTheLeft.musicOnTheLeft
});

class TurnTables extends Component {
  componentDidMount() {
    Draggable.create('#vinyl-disc-left', {
      type: "rotation",
    })
  }

  render() {
    return (
      <div id='vinyl-left' className='vinyl-left'>
        <VinylDisc id='vinyl-disc-left' artwork={`${store.getState().vinyl_art_left}`} artworkid='img1' imageid='vinyl-disc-left' />
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.musicOnTheLeft !== this.props.musicOnTheLeft) {
      const wavesurfer = this.props.musicOnTheLeft;
      wavesurfer.on('audioprocess', function () {
        if (wavesurfer.isPlaying()) {
          const totalTime = wavesurfer.getDuration();
          const currentTime = wavesurfer.getCurrentTime();
          const percentage = (currentTime / totalTime) * 100;
          const rotationAngle = 1000 * percentage;
          document.getElementById("vinyl-left").style.transform = `rotate(${rotationAngle}deg)`;
        } else {
          const totalTime = wavesurfer.getDuration();
          const currentTime = wavesurfer.getCurrentTime();
          const percentage = (currentTime / totalTime) * 100;
          const rotationAngle = 1000 * percentage;
          document.getElementById("vinyl-left").style.transform = `rotate(-${rotationAngle}deg)`;
        }
      });
    }
  }

}

export default connect(mapStateToProps)(TurnTables);