import React, { Component } from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import {
  change_controls_right,
  change_loop_right,
} from '../actions';

const mapStateToProps = state => ({
  controls_right: state.controls_right.controls_right,
  musicOnTheRight: state.musicOnTheRight.musicOnTheRight,
});

class PlayRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'Assets/play_inactive.svg',
    };

    this.playMusic = this.playMusic.bind(this);
    this.dontPlay = this.dontPlay.bind(this);
  }

  playMusic() {
    if (store.getState().isLoadedRight.isLoadedRight === false) {
      return;
    }
    if (store.getState().controls_right.controls_right !== 'play') {
      this.setState({
        img: 'Assets/play_active.svg',
      });
      store.dispatch(change_controls_right({ controls_right: 'play' }));
      store.getState().musicOnTheRight.musicOnTheRight.on('ready', function () {
        store.getState().musicOnTheRight.musicOnTheRight.play(0);
      });
      // Play music here
      store.getState().musicOnTheRight.musicOnTheRight.play();
    } else {
      this.setState({
        img: 'Assets/play_inactive.svg',
      });
      store.dispatch(change_controls_right({ controls_right: 'pause' }));
      store.dispatch(change_loop_right({ loop_right: 'inactive' }));
      store.getState().musicOnTheRight.musicOnTheRight.playPause();
    }
  }

  dontPlay() {
    if (store.getState().isLoadedRight.isLoadedRight === false) {
      return;
    }
    this.setState({
      img: 'Assets/play_pressed.svg',
    });
  }

  render() {
    return (
      <div
        id="play-right"
        className="controls-right"
      >
        <img
          src={this.state.img}
          onMouseDown={() => {
            this.dontPlay()
          }}
          onMouseUp={() => {
            this.playMusic();
          }}
          alt="Play button on the right"
        />

      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.controls_right !== this.props.controls_right &&
      this.props.controls_right !== 'play') {
      this.setState({
        img: 'Assets/play_inactive.svg',
      });
      store.dispatch(change_loop_right({ loop_right: 'inactive' }));
    }
    if (prevProps.controls_right !== this.props.controls_right &&
      this.props.controls_right === 'play') {
      this.setState({
        img: 'Assets/play_active.svg',
      });
      store.dispatch(change_loop_right({ loop_right: 'inactive' }));
    }
  }
}

export default connect(mapStateToProps)(PlayRight);
