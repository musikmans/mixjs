import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_controls_right } from "../actions";

const mapStateToProps = state => ({
  id3Right: state.id3Right.id3Right,
  musicOnTheRight: state.musicOnTheRight.musicOnTheRight,
  controls_right: state.controls_right.controls_right
});

function sectostr(time) {
  time = Math.floor(time)
  let min = Math.floor(time / 60);
  let sec = Math.round(time - (min * 60))
  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;
  return `${min}:${sec}`;
}

class TimeTextRight extends Component {
  render() {
    return (
      <>
        <div id="textright" className="textright">Song: <br />Artist:
            </div><div id="timeright" className="timeright"></div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
    wavesurfer.on('finish', function () {
      store.dispatch(change_controls_right({ controls_right: "stop" }))
  });
    if (store.getState().isLoadedRight.isLoadedRight) {
      if (prevProps.id3Right !== this.props.id3Right) {
        document.getElementById('textright').innerText = `Song: ${this.props.id3Right.tags.title}\nArtist: ${this.props.id3Right.tags.artist}`
      }
      if (prevProps.musicOnTheRight !== this.props.musicOnTheRight) {
        wavesurfer.on('audioprocess', function () {
          if (wavesurfer.isPlaying()) {
            let totalTime = sectostr(wavesurfer.getDuration());
            let currentTime = sectostr(wavesurfer.getCurrentTime());

            document.getElementById('timeright').innerHTML = `${currentTime} / ${totalTime}`
          }
        });
        wavesurfer.on('ready', function () {
          let currentTime = sectostr(wavesurfer.getDuration());
          document.getElementById('timeright').innerHTML = `00:00 / ${currentTime}`;
        })
      }
      if (prevProps.controls_right !== this.props.controls_right && this.props.controls_right === "stop") {
        let currentTime = sectostr(wavesurfer.getDuration());
        document.getElementById('timeright').innerHTML = `00:00 / ${currentTime}`;
      }
    }
  }
}

export default connect(mapStateToProps)(TimeTextRight);