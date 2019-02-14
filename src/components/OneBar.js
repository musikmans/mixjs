import React, {Component} from 'react';
import {store} from '../store';
import {connect} from 'react-redux';
import {change_loop_left, change_loop_right} from '../actions';

const mapStateToProps = state => ({
  loop_left: state.loop_left.loop_left,
  loop_right: state.loop_right.loop_right,
});

class OneBar extends Component {
  constructor (props) {
    super (props);
    this.state = {
      img: 'Assets/one_bar_inactive.svg',
      componentId: props.componentId,
      componentClass: props.componentClass,
      side: props.side,
    };
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
            this.setState ({
              img: 'Assets/one_bar_pressed.svg',
            });
          }}
          onMouseUp={() => {
            if (this.state.componentId === 'loop-one-left') {
              if (
                store.getState ().loop_left.loop_left !== 'onebar' &&
                store.getState ().controls_left.controls_left === 'play'
              ) {
                this.setState ({
                  img: 'Assets/one_bar_active.svg',
                });
                store.dispatch (change_loop_left ({loop_left: 'onebar'}));
                console.log (store.getState ().loop_left);
              } else {
                this.setState ({
                  img: 'Assets/one_bar_inactive.svg',
                });
                store.dispatch (change_loop_left ({loop_left: 'inactive'}));
                console.log (store.getState ().loop_left);
              }
            } else {
              if (
                store.getState ().loop_right.loop_right !== 'onebar' &&
                store.getState ().controls_right.controls_right === 'play'
              ) {
                this.setState ({
                  img: 'Assets/one_bar_active.svg',
                });
                store.dispatch (change_loop_right ({loop_right: 'onebar'}));
                console.log (store.getState ().loop_right);
              } else {
                this.setState ({
                  img: 'Assets/one_bar_inactive.svg',
                });
                store.dispatch (change_loop_right ({loop_right: 'inactive'}));
                console.log (store.getState ().loop_right);
              }
            }
          }}
          alt="Loop one bar"
        />

      </div>
    );
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.state.componentId === 'loop-one-left') {
      if (
        prevProps.loop_left !== this.props.loop_left &&
        this.props.loop_left !== 'onebar'
      ) {
        this.setState ({
          img: 'Assets/one_bar_inactive.svg',
        });
      }
    } else {
      if (
        prevProps.loop_right !== this.props.loop_right &&
        this.props.loop_right !== 'onebar'
      ) {
        this.setState ({
          img: 'Assets/one_bar_inactive.svg',
        });
      }
    }
  }
}

export default connect (mapStateToProps) (OneBar);
