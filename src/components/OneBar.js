import React, { Component } from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import { change_loop_left } from '../actions';

const mapStateToProps = state => ({
  loop_left: state.loop_left.loop_left,
  controls_left: state.controls_left.controls_left,
});

class OneBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'Assets/one_bar_inactive.svg',
      oneBarInterval: ''
    };
  }

  render() {
    return (
      <div
        id="loop-one-left"
        className="controls-left"
      >
        <img
          src={this.state.img}
          onMouseDown={() => {
            if (store.getState().loop_left.loop_left === 'twobars' || store.getState().loop_left.loop_left === 'fourbars' || store.getState().loop_left.loop_left === 'eightbars') {
              return;
            }
            this.setState({
              img: 'Assets/one_bar_pressed.svg',
            });
          }}
          onMouseUp={() => {
            if (store.getState().loop_left.loop_left === 'twobars' || store.getState().loop_left.loop_left === 'fourbars' || store.getState().loop_left.loop_left === 'eightbars') {
              return;
            }
            if (store.getState().loop_left.loop_left !== 'onebar' && store.getState().controls_left.controls_left === 'play') {
              this.setState({
                img: 'Assets/one_bar_active.svg',
              });
              store.dispatch(change_loop_left({ loop_left: 'onebar' }));
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
            }
          }}
          alt="Loop one second Left"
        />

      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.loop_left !== this.props.loop_left &&
      this.props.loop_left !== 'onebar'
    ) {
      this.setState({
        img: 'Assets/one_bar_inactive.svg',
      });
    }
    if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left !== 'play') {
      clearInterval(this.state.oneBarInterval);
      this.setState({
        oneBarInterval: ''
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.oneBarInterval);
  }
}

export default connect(mapStateToProps)(OneBar);
