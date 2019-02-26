import React, {Component} from 'react';
import {store} from '../store';
import {connect} from 'react-redux';
import {
  change_controls_left,
  change_controls_right,
  change_loop_left,
  change_loop_right,
} from '../actions';

const mapStateToProps = state => ({
  controls_left: state.controls_left.controls_left,
  controls_right: state.controls_right.controls_right,
  musicOnTheLeft: state.musicOnTheLeft.musicOnTheLeft,
  musicOnTheRight: state.musicOnTheRight.musicOnTheRight,
});

class Play extends Component {
  constructor (props) {
    super (props);
    this.state = {
      img: 'Assets/play_inactive.svg',
      componentId: props.componentId,
      componentClass: props.componentClass,
    };

    this.playMusic = this.playMusic.bind (this);
    this.dontPlay = this.dontPlay.bind (this);
  }

  playMusic (side) {
    if (side === 'play-left') {
      if (store.getState().isLoadedLeft.isLoadedLeft === false) {
        return;
      }
      if (store.getState().controls_left.controls_left !== 'play') {
        this.setState ({
          img: 'Assets/play_active.svg',
        });
        store.dispatch (change_controls_left ({controls_left: 'play'}));
        store.getState().musicOnTheLeft.musicOnTheLeft.on('ready', function () {
          store.getState().musicOnTheLeft.musicOnTheLeft.play(0);
        });
        // Play music here
        store.getState().musicOnTheLeft.musicOnTheLeft.play();
      } else {
        this.setState ({
          img: 'Assets/play_inactive.svg',
        });
        store.dispatch (change_controls_left ({controls_left: 'pause'}));
        store.dispatch (change_loop_left ({loop_left: 'inactive'}));
        store.getState().musicOnTheLeft.musicOnTheLeft.playPause();
      }
    } else {
      if (store.getState().isLoadedRight.isLoadedRight === false) {
        return;
      }
      if (store.getState().controls_right.controls_right !== 'play') {
        this.setState ({
          img: 'Assets/play_active.svg',
        });
        store.dispatch (change_controls_right ({controls_right: 'play'}));
        store.getState().musicOnTheRight.musicOnTheRight.on('ready', function () {
          store.getState().musicOnTheRight.musicOnTheRight.play(0);
        });
        // Play music here
        store.getState().musicOnTheRight.musicOnTheRight.play();
      } else {
        this.setState ({
          img: 'Assets/play_inactive.svg',
        });
        store.dispatch (change_controls_right ({controls_right: 'pause'}));
        store.dispatch (change_loop_right ({loop_right: 'inactive'}));
        store.getState().musicOnTheRight.musicOnTheRight.playPause();
      }
    }
  }

  dontPlay(side) {
    if (side === 'play-left') {
        if (store.getState ().isLoadedLeft.isLoadedLeft === false) {
            return;
          }
          this.setState ({
            img: 'Assets/play_pressed.svg',
        });
    } else {
        if (store.getState ().isLoadedRight.isLoadedRight === false) {
            return;
          }
          this.setState ({
            img: 'Assets/play_pressed.svg',
          });
    }
  }

  render () {
    return (
      <div
        id={`${this.state.componentId}`}
        className={`${this.state.componentClass}`}
      >
        <img
          src={this.state.img}
          onMouseDown={() => {
            this.dontPlay(this.state.componentId)
          }}
          onMouseUp={() => {
            this.playMusic(this.state.componentId);
          }}
          alt="Play button"
        />

      </div>
    );
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.state.componentId === 'play-left') {
      if (
        prevProps.controls_left !== this.props.controls_left &&
        this.props.controls_left !== 'play'
      ) {
        this.setState ({
          img: 'Assets/play_inactive.svg',
        });
        store.dispatch (change_loop_left ({loop_left: 'inactive'}));
      }
      if (
        prevProps.controls_left !== this.props.controls_left &&
        this.props.controls_left === 'play'
      ) {
        this.setState ({
          img: 'Assets/play_active.svg',
        });
        store.dispatch (change_loop_left ({loop_left: 'inactive'}));
      }
    } else {
      if (
        prevProps.controls_right !== this.props.controls_right &&
        this.props.controls_right !== 'play'
      ) {
        this.setState ({
          img: 'Assets/play_inactive.svg',
        });
        store.dispatch (change_loop_right ({loop_right: 'inactive'}));
      }
      if (
        prevProps.controls_right !== this.props.controls_right &&
        this.props.controls_right === 'play'
      ) {
        this.setState ({
          img: 'Assets/play_active.svg',
        });
        store.dispatch (change_loop_right ({loop_right: 'inactive'}));
      } 
    }
  }
}

export default connect (mapStateToProps) (Play);
