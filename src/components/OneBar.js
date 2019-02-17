import React, { Component } from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import { change_loop_left, change_loop_right, the_left_interval } from '../actions';

const mapStateToProps = state => ({
  loop_left: state.loop_left.loop_left,
  loop_right: state.loop_right.loop_right,
  controls_left: state.controls_left.controls_left,
  controls_right: state.controls_right.controls_right,
});

class OneBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'Assets/one_bar_inactive.svg',
      componentId: props.componentId,
      componentClass: props.componentClass,
      oneBarInterval: ''
    };
  }

  render() {
    return (
      <div
        id={`${this.state.componentId}`}
        className={`${this.state.componentClass}`}
      >
        <img
          src={this.state.img}
          onMouseDown={() => {
            if (this.state.componentId === 'loop-one-left') {
              if (store.getState().loop_left.loop_left === 'fourbars' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'sixteenbars') {
                return;
              }
              this.setState({
                img: 'Assets/one_bar_pressed.svg',
              });
            } else {
              this.setState({
                img: 'Assets/one_bar_pressed.svg',
              });
            }
          }}
          onMouseUp={() => {
            if (this.state.componentId === 'loop-one-left') {
              if (store.getState().loop_left.loop_left === 'fourbars' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'sixteenbars') {
                return;
              }
              if (store.getState().loop_left.loop_left !== 'onebar' && store.getState().controls_left.controls_left === 'play') {
                this.setState({
                  img: 'Assets/one_bar_active.svg',
                });
                store.dispatch(change_loop_left({ loop_left: 'onebar' }));
                console.log(store.getState().loop_left);
                const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
                const currentTime = wavesurfer.getCurrentTime();
                const bpm = store.getState().bpmLeft.bpmLeft;
                const musicBarsPerMin = bpm / 4;
                const oneBarLength = 60 / musicBarsPerMin;
                const endloop = currentTime + oneBarLength;
                const secToInt = oneBarLength * 1000;
                this.setState({
                  oneBarInterval: setInterval(function () { store.getState().musicOnTheLeft.musicOnTheLeft.play(currentTime, endloop) }, secToInt)
                });
              } else {
                this.setState({
                  img: 'Assets/one_bar_inactive.svg',
                });
                store.dispatch(change_loop_left({ loop_left: 'inactive' }));
                if (store.getState().controls_left.controls_left === 'play') {
                  clearInterval(this.state.oneBarInterval);
                  this.setState({
                    oneBarInterval: ''
                  });
                  store.getState().musicOnTheLeft.musicOnTheLeft.play()
                }
                console.log(store.getState().loop_left);
              }
            } else {
              if (
                store.getState().loop_right.loop_right !== 'onebar' &&
                store.getState().controls_right.controls_right === 'play'
              ) {
                this.setState({
                  img: 'Assets/one_bar_active.svg',
                });
                store.dispatch(change_loop_right({ loop_right: 'onebar' }));
                console.log(store.getState().loop_right);
              } else {
                this.setState({
                  img: 'Assets/one_bar_inactive.svg',
                });
                store.dispatch(change_loop_right({ loop_right: 'inactive' }));
                console.log(store.getState().loop_right);
              }
            }
          }}
          alt="Loop one second"
        />

      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.componentId === 'loop-one-left') {
      if (
        prevProps.loop_left !== this.props.loop_left &&
        this.props.loop_left !== 'onebar'
      ) {
        this.setState({
          img: 'Assets/one_bar_inactive.svg',
        });
      }
      if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left === 'stop') {
        clearInterval(this.state.oneBarInterval);
        this.setState({
          oneBarInterval: ''
        });
      }
    } else {
      if (
        prevProps.loop_right !== this.props.loop_right &&
        this.props.loop_right !== 'onebar'
      ) {
        this.setState({
          img: 'Assets/one_bar_inactive.svg',
        });
      }
    }
  }
}

export default connect(mapStateToProps)(OneBar);
