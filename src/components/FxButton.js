import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import {
    change_delay_left, change_reverb_left, change_delay_right,
    change_reverb_right,
} from "../actions";

const mapStateToProps = state => ({
    delay_left: state.delay_left.delay_left,
    reverb_left: state.reverb_left.reverb_left,
    delay_right: state.delay_right.delay_right,
    reverb_right: state.reverb_right.reverb_right,
});

class FxButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'Assets/FxButton_inactive.svg',
            imageId: props.imageId,
            componentId: props.componentId,
            componentClass: props.componentClass
        };
        store.dispatch(change_delay_left({ delay_left: false }))
        store.dispatch(change_delay_right({ delay_right: false }))
        store.dispatch(change_reverb_left({ reverb_left: false }))
        store.dispatch(change_reverb_right({ reverb_right: false }))
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
                        switch (this.state.componentId) {
                            case "fx-delay-1":
                                if (store.getState().isLoadedLeft.isLoadedLeft) {
                                    if (store.getState().reverb_left.reverb_left === true || store.getState().lpf_left.lpf_left < 10000 ||
                                        store.getState().hpf_left.hpf_left > 50 || store.getState().pan_left.pan_left < -0.03 ||
                                        store.getState().pan_left.pan_left > 0.03) {
                                        return;
                                    }
                                    this.setState({
                                        img: 'Assets/FxButton_pressed.svg',
                                    });
                                }
                                break;
                            case "fx-reverb-1":
                                if (store.getState().isLoadedLeft.isLoadedLeft) {
                                    if (store.getState().delay_left.delay_left === true || store.getState().lpf_left.lpf_left < 10000 ||
                                        store.getState().hpf_left.hpf_left > 50 || store.getState().pan_left.pan_left < -0.03 ||
                                        store.getState().pan_left.pan_left > 0.03) {
                                        return;
                                    }
                                    this.setState({
                                        img: 'Assets/FxButton_pressed.svg',
                                    });
                                }
                                break;
                            case "fx-delay-2":
                                if (store.getState().isLoadedRight.isLoadedRight) {
                                    if (store.getState().reverb_right.reverb_right === true || store.getState().lpf_right.lpf_right < 10000 ||
                                        store.getState().hpf_right.hpf_right > 50 || store.getState().pan_right.pan_right < -0.03 ||
                                        store.getState().pan_right.pan_right > 0.03) {
                                        return;
                                    }
                                    this.setState({
                                        img: 'Assets/FxButton_pressed.svg',
                                    });
                                }
                                break;
                            default:
                                if (store.getState().isLoadedRight.isLoadedRight) {
                                    if (store.getState().delay_right.delay_right === true || store.getState().lpf_right.lpf_right < 10000 ||
                                        store.getState().hpf_right.hpf_right > 50 || store.getState().pan_right.pan_right < -0.03 ||
                                        store.getState().pan_right.pan_right > 0.03) {
                                        return;
                                    }
                                    this.setState({
                                        img: 'Assets/FxButton_pressed.svg',
                                    });
                                }
                                break;
                        }
                    }}
                    onMouseUp={() => {
                        switch (this.state.componentId) {
                            case "fx-delay-1":
                                if (store.getState().isLoadedLeft.isLoadedLeft) {
                                    if (store.getState().reverb_left.reverb_left === true || store.getState().lpf_left.lpf_left < 10000 ||
                                        store.getState().hpf_left.hpf_left > 50 || store.getState().pan_left.pan_left < -0.03 ||
                                        store.getState().pan_left.pan_left > 0.03) {
                                        return;
                                    }
                                    if (store.getState().delay_left.delay_left !== true) {
                                        // activate
                                        this.setState({
                                            img: 'Assets/FxButton_active.svg',
                                        });
                                        store.dispatch(change_delay_left({ delay_left: true }))
                                    } else {
                                        // desactivate
                                        this.setState({
                                            img: 'Assets/FxButton_inactive.svg',
                                        });
                                        store.dispatch(change_delay_left({ delay_left: false }))
                                    }
                                }
                                break;
                            case "fx-reverb-1":
                                if (store.getState().isLoadedLeft.isLoadedLeft) {
                                    if (store.getState().delay_left.delay_left === true || store.getState().lpf_left.lpf_left < 10000 ||
                                        store.getState().hpf_left.hpf_left > 50 || store.getState().pan_left.pan_left < -0.03 ||
                                        store.getState().pan_left.pan_left > 0.03) {
                                        return;
                                    }
                                    if (store.getState().reverb_left.reverb_left !== true) {
                                        // activate
                                        this.setState({
                                            img: 'Assets/FxButton_active.svg',
                                        });
                                        store.dispatch(change_reverb_left({ reverb_left: true }))
                                    } else {
                                        // desactivate
                                        this.setState({
                                            img: 'Assets/FxButton_inactive.svg',
                                        });
                                        store.dispatch(change_reverb_left({ reverb_left: false }))
                                    }
                                }
                                break;
                            case "fx-delay-2":
                                if (store.getState().isLoadedRight.isLoadedRight) {
                                    if (store.getState().reverb_right.reverb_right === true || store.getState().lpf_right.lpf_right < 10000 ||
                                        store.getState().hpf_right.hpf_right > 50 || store.getState().pan_right.pan_right < -0.03 ||
                                        store.getState().pan_right.pan_right > 0.03) {
                                        return;
                                    }
                                    if (store.getState().delay_right.delay_right !== true) {
                                        // activate
                                        this.setState({
                                            img: 'Assets/FxButton_active.svg',
                                        });
                                        store.dispatch(change_delay_right({ delay_right: true }))
                                    } else {
                                        // desactivate
                                        this.setState({
                                            img: 'Assets/FxButton_inactive.svg',
                                        });
                                        store.dispatch(change_delay_right({ delay_right: false }))
                                    }
                                }
                                break;
                            default:
                                if (store.getState().isLoadedRight.isLoadedRight) {
                                    if (store.getState().delay_right.delay_right === true || store.getState().lpf_right.lpf_right < 10000 ||
                                        store.getState().hpf_right.hpf_right > 50 || store.getState().pan_right.pan_right < -0.03 ||
                                        store.getState().pan_right.pan_right > 0.03) {
                                        return;
                                    }
                                    if (store.getState().reverb_right.reverb_right !== true) {
                                        // activate
                                        this.setState({
                                            img: 'Assets/FxButton_active.svg',
                                        });
                                        store.dispatch(change_reverb_right({ reverb_right: true }))
                                    } else {
                                        // desactivate
                                        this.setState({
                                            img: 'Assets/FxButton_inactive.svg',
                                        });
                                        store.dispatch(change_reverb_right({ reverb_right: false }))
                                    }
                                }
                                break;
                        }
                    }
                    }
                    alt="FX Button"
                />

            </div>
        );
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
        switch (this.state.componentId) {
            case "fx-delay-1":
                if (store.getState().isLoadedLeft.isLoadedLeft) {
                    if (prevProps.delay_left !== this.props.delay_left) {
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
                break;
            case "fx-reverb-1":
                if (store.getState().isLoadedLeft.isLoadedLeft) {
                    if (prevProps.reverb_left !== this.props.reverb_left) {
                        if (this.props.reverb_left) {
                            const distortion = wavesurfer.backend.ac.createWaveShaper();

                            function makeDistortionCurve(amount) {
                                var k = typeof amount === 'number' ? amount : 50,
                                    n_samples = 44100,
                                    curve = new Float32Array(n_samples),
                                    deg = Math.PI / 180,
                                    i = 0,
                                    x;
                                for (; i < n_samples; ++i) {
                                    x = i * 2 / n_samples - 1;
                                    curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
                                }
                                return curve;
                            };

                            distortion.curve = makeDistortionCurve(20);
                            distortion.oversample = '2x';
                            wavesurfer.backend.setFilter(distortion);

                        } else {
                            const distortion = wavesurfer.backend.ac.createWaveShaper();
                            wavesurfer.backend.setFilter(distortion);
                        }
                    }
                }
                break;
            case "fx-delay-2":
                if (store.getState().isLoadedRight.isLoadedRight) {
                    if (prevProps.delay_right !== this.props.delay_right) {
                        const wavesurfer2 = store.getState().musicOnTheRight.musicOnTheRight;
                        //Update delay on the right
                        if (this.props.delay_right) {
                            const delay = wavesurfer2.backend.ac.createDelay();
                            const feedback = wavesurfer2.backend.ac.createGain();
                            const filter = wavesurfer2.backend.ac.createBiquadFilter();
                            delay.delayTime.value = 0.05;
                            feedback.gain.value = 0.5;
                            filter.frequency.value = 1000;

                            delay.connect(feedback);
                            feedback.connect(filter);
                            filter.connect(delay);

                            wavesurfer2.backend.setFilter(delay);
                        } else {
                            const delay = wavesurfer2.backend.ac.createDelay();
                            const feedback = wavesurfer2.backend.ac.createGain();
                            const filter = wavesurfer2.backend.ac.createBiquadFilter();
                            delay.delayTime.value = 0;
                            feedback.gain.value = 0;
                            filter.frequency.value = 1000;

                            delay.connect(feedback);
                            feedback.connect(filter);
                            filter.connect(delay);

                            wavesurfer2.backend.setFilter(delay);
                        }
                    }
                }
                break;
            default:
                if (store.getState().isLoadedRight.isLoadedRight) {
                    if (prevProps.reverb_right !== this.props.reverb_right) {
                        const wavesurfer2 = store.getState().musicOnTheRight.musicOnTheRight;
                        if (this.props.reverb_right) {
                            const distortion = wavesurfer2.backend.ac.createWaveShaper();

                            function makeDistortionCurve(amount) {
                                var k = typeof amount === 'number' ? amount : 50,
                                    n_samples = 44100,
                                    curve = new Float32Array(n_samples),
                                    deg = Math.PI / 180,
                                    i = 0,
                                    x;
                                for (; i < n_samples; ++i) {
                                    x = i * 2 / n_samples - 1;
                                    curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
                                }
                                return curve;
                            };

                            distortion.curve = makeDistortionCurve(20);
                            distortion.oversample = '2x';
                            wavesurfer2.backend.setFilter(distortion);

                        } else {
                            const distortion = wavesurfer2.backend.ac.createWaveShaper();
                            wavesurfer2.backend.setFilter(distortion);
                        }
                    }
                }
                break;
        }
    }
}

export default connect(mapStateToProps)(FxButton);