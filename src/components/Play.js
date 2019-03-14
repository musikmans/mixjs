import React, { Component } from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import {
  change_controls_left,
  change_loop_left,
} from '../actions';

const mapStateToProps = state => ({
  controls_left: state.controls_left.controls_left,
  musicOnTheLeft: state.musicOnTheLeft.musicOnTheLeft,
});

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'Assets/play_inactive.svg',
    };

    this.playMusic = this.playMusic.bind(this);
    this.dontPlay = this.dontPlay.bind(this);
  }

  playMusic() {
    if (store.getState().isLoadedLeft.isLoadedLeft === false) {
      return;
    }
    if (store.getState().controls_left.controls_left !== 'play') {
      this.setState({
        img: 'Assets/play_active.svg',
      });
      store.dispatch(change_controls_left({ controls_left: 'play' }));
      store.getState().musicOnTheLeft.musicOnTheLeft.on('ready', function () {
        store.getState().musicOnTheLeft.musicOnTheLeft.play(0);
      });
      // Play music here
      store.getState().musicOnTheLeft.musicOnTheLeft.play();
    } else {
      this.setState({
        img: 'Assets/play_inactive.svg',
      });
      store.dispatch(change_controls_left({ controls_left: 'pause' }));
      store.dispatch(change_loop_left({ loop_left: 'inactive' }));
      store.getState().musicOnTheLeft.musicOnTheLeft.playPause();
    }
  }

  dontPlay() {
    if (store.getState().isLoadedLeft.isLoadedLeft === false) {
      return;
    }
    this.setState({
      img: 'Assets/play_pressed.svg',
    });
  }

  render() {
    return (
      <div
        id="play-left"
        className="controls-left"
      >
        <img
          src={this.state.img}
          onMouseDown={() => {
            this.dontPlay()
          }}
          onMouseUp={() => {
            this.playMusic();
          }}
          alt="Play button on the left"
        />

      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.controls_left !== this.props.controls_left &&
      this.props.controls_left !== 'play') {
      this.setState({
        img: 'Assets/play_inactive.svg',
      });
      store.dispatch(change_loop_left({ loop_left: 'inactive' }));
    }
    if (prevProps.controls_left !== this.props.controls_left &&
      this.props.controls_left === 'play') {
      this.setState({
        img: 'Assets/play_active.svg',
      });
      store.dispatch(change_loop_left({ loop_left: 'inactive' }));
    }
  }
}

export default connect(mapStateToProps)(Play);
