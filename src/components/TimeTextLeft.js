import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  id3Left: state.id3Left.id3Left,
  musicOnTheLeft: state.musicOnTheLeft.musicOnTheLeft,
  controls_left: state.controls_left.controls_left
});

function sectostr(time) {
  time = Math.floor(time)
  let min = Math.floor(time / 60);
  let sec = Math.round(time - (min * 60))
  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;
  return `${min}:${sec}`;
}

class TimeTextLeft extends Component {
  render() {
    return (
      <>
        <div id="textleft" className="textleft">Song: <br />Artist:
            </div><div id="timeleft" className="timeleft"></div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    if (store.getState().isLoadedLeft.isLoadedLeft) {
      if (prevProps.id3Left !== this.props.id3Left) {
        document.getElementById('textleft').innerText = `Song: ${this.props.id3Left.tags.title}\nArtist: ${this.props.id3Left.tags.artist}`
      }
      if (prevProps.musicOnTheLeft !== this.props.musicOnTheLeft) {
        wavesurfer.on('audioprocess', function () {
          if (wavesurfer.isPlaying()) {
            let totalTime = sectostr(wavesurfer.getDuration());
            let currentTime = sectostr(wavesurfer.getCurrentTime());

            document.getElementById('timeleft').innerHTML = `${currentTime} / ${totalTime}`
          }
        });
        wavesurfer.on('ready', function () {
          let currentTime = sectostr(wavesurfer.getDuration());
          document.getElementById('timeleft').innerHTML = `00:00 / ${currentTime}`;
        })
      }
      if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left === "stop") {
        let currentTime = sectostr(wavesurfer.getDuration());
        document.getElementById('timeleft').innerHTML = `00:00 / ${currentTime}`;
      }
    }
  }
}

export default connect(mapStateToProps)(TimeTextLeft);