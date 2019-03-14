import VinylDisc from "./VinylDisc"
import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  musicOnTheRight: state.musicOnTheRight.musicOnTheRight
});

class TurnTablesRight extends Component {
  componentDidMount() {
    Draggable.create('#vinyl-disc-right', {
      type: "rotation",
    })
  }

  render() {
    return (
      <div id='vinyl-right' className='vinyl-right'>
        <VinylDisc id='vinyl-disc-right' artwork={`${store.getState().vinyl_art_right}`} artworkid='img2' imageid='vinyl-disc-right' />
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.musicOnTheRight !== this.props.musicOnTheRight) {
      const wavesurfer = this.props.musicOnTheRight;
      wavesurfer.on('audioprocess', function () {
        if (wavesurfer.isPlaying()) {
          const totalTime = wavesurfer.getDuration();
          const currentTime = wavesurfer.getCurrentTime();
          const percentage = (currentTime / totalTime) * 100;
          const rotationAngle = 1000 * percentage;
          document.getElementById("vinyl-right").style.transform = `rotate(${rotationAngle}deg)`;
        } else {
          const totalTime = wavesurfer.getDuration();
          const currentTime = wavesurfer.getCurrentTime();
          const percentage = (currentTime / totalTime) * 100;
          const rotationAngle = 1000 * percentage;
          document.getElementById("vinyl-right").style.transform = `rotate(-${rotationAngle}deg)`;
        }
      });
    }
  }

}

export default connect(mapStateToProps)(TurnTablesRight);