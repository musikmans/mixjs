import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_delay_right } from "../actions";

const mapStateToProps = state => ({
    delay_right: state.delay_right.delay_right,
});

class FxDelayRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'Assets/fxButton_inactive.svg',
        };
        store.dispatch(change_delay_right({ delay_right: false }))
    }

    render() {
        return (
            <div
                id='fx-delay-2'
                className='fx-right'
            >
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        if (store.getState().isLoadedRight.isLoadedRight) {
                            if (store.getState().distortion_right.distortion_right === true || store.getState().lpf_right.lpf_right < 10000 ||
                                store.getState().hpf_right.hpf_right > 50 || store.getState().pan_right.pan_right < -0.05 ||
                                store.getState().pan_right.pan_right > 0.05) {
                                return;
                            }
                            this.setState({
                                img: 'Assets/fxButton_pressed.svg',
                            });
                        }
                    }}
                    onMouseUp={() => {
                        if (store.getState().isLoadedRight.isLoadedRight) {
                            if (store.getState().distortion_right.distortion_right === true || store.getState().lpf_right.lpf_right < 10000 ||
                                store.getState().hpf_right.hpf_right > 50 || store.getState().pan_right.pan_right < -0.05 ||
                                store.getState().pan_right.pan_right > 0.05) {
                                return;
                            }
                            if (store.getState().delay_right.delay_right !== true) {
                                // activate
                                this.setState({
                                    img: 'Assets/fxButton_active.svg',
                                });
                                store.dispatch(change_delay_right({ delay_right: true }))
                            } else {
                                // desactivate
                                this.setState({
                                    img: 'Assets/fxButton_inactive.svg',
                                });
                                store.dispatch(change_delay_right({ delay_right: false }))
                            }
                        }
                    }
                    }
                    alt="FX Delay Right"
                />

            </div>
        );
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
        if (store.getState().isLoadedRight.isLoadedRight && prevProps.delay_right !== this.props.delay_right) {
            //Update delay on the right
            if (this.props.delay_right) {
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

export default connect(mapStateToProps)(FxDelayRight);