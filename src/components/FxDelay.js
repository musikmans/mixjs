import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_delay_left } from "../actions";

const mapStateToProps = state => ({
    delay_left: state.delay_left.delay_left,
});

class FxDelay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'Assets/fxButton_inactive.svg',
        };
        store.dispatch(change_delay_left({ delay_left: false }))
    }

    render() {
        return (
            <div
                id='fx-delay-1'
                className='fx-left'
            >
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        if (store.getState().isLoadedLeft.isLoadedLeft) {
                            if (store.getState().distortion_left.distortion_left === true || store.getState().lpf_left.lpf_left < 10000 ||
                                store.getState().hpf_left.hpf_left > 50 || store.getState().pan_left.pan_left < -0.05 ||
                                store.getState().pan_left.pan_left > 0.05) {
                                return;
                            }
                            this.setState({
                                img: 'Assets/fxButton_pressed.svg',
                            });
                        }
                    }}
                    onMouseUp={() => {
                        if (store.getState().isLoadedLeft.isLoadedLeft) {
                            if (store.getState().distortion_left.distortion_left === true || store.getState().lpf_left.lpf_left < 10000 ||
                                store.getState().hpf_left.hpf_left > 50 || store.getState().pan_left.pan_left < -0.05 ||
                                store.getState().pan_left.pan_left > 0.05) {
                                return;
                            }
                            if (store.getState().delay_left.delay_left !== true) {
                                // activate
                                this.setState({
                                    img: 'Assets/fxButton_active.svg',
                                });
                                store.dispatch(change_delay_left({ delay_left: true }))
                            } else {
                                // desactivate
                                this.setState({
                                    img: 'Assets/fxButton_inactive.svg',
                                });
                                store.dispatch(change_delay_left({ delay_left: false }))
                            }
                        }
                    }
                    }
                    alt="FX Delay Left"
                />

            </div>
        );
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
        if (store.getState().isLoadedLeft.isLoadedLeft && prevProps.delay_left !== this.props.delay_left) {
            //Update delay on the left
            if (this.props.delay_left) {
                const delay = wavesurfer.backend.ac.createDelay();
                const feedback = wavesurfer.backend.ac.createGain();
                const filter = wavesurfer.backend.ac.createBiquadFilter();
                delay.delayTime.value = 0.05;
                feedback.gain.value = 0.5;
                filter.frequency.value = 1000;

                delay.connect(feedback);
                feedback.connect(filter);
                filter.connect(delay);

                wavesurfer.backend.setFilter(delay);
            } else {
                const delay = wavesurfer.backend.ac.createDelay();
                const feedback = wavesurfer.backend.ac.createGain();
                const filter = wavesurfer.backend.ac.createBiquadFilter();
                delay.delayTime.value = 0;
                feedback.gain.value = 0;
                filter.frequency.value = 1000;

                delay.connect(feedback);
                feedback.connect(filter);
                filter.connect(delay);

                wavesurfer.backend.setFilter(delay);
            }
        }
    }
}

export default connect(mapStateToProps)(FxDelay);