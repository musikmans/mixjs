import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_distortion_right } from "../actions";

const mapStateToProps = state => ({
    distortion_right: state.distortion_right.distortion_right,
});

class FxDistortionRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'Assets/fxButton_inactive.svg',
        };
        store.dispatch(change_distortion_right({ distortion_right: false }))
    }

    render() {
        return (
            <div
                id='fx-distortion-2'
                className='fx-right'
            >
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        if (store.getState().isLoadedRight.isLoadedRight) {
                            if (store.getState().delay_right.delay_right === true || store.getState().lpf_right.lpf_right < 10000 ||
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
                            if (store.getState().delay_right.delay_right === true || store.getState().lpf_right.lpf_right < 10000 ||
                                store.getState().hpf_right.hpf_right > 50 || store.getState().pan_right.pan_right < -0.05 ||
                                store.getState().pan_right.pan_right > 0.05) {
                                return;
                            }
                            if (store.getState().distortion_right.distortion_right !== true) {
                                // activate
                                this.setState({
                                    img: 'Assets/fxButton_active.svg',
                                });
                                store.dispatch(change_distortion_right({ distortion_right: true }))
                            } else {
                                // desactivate
                                this.setState({
                                    img: 'Assets/fxButton_inactive.svg',
                                });
                                store.dispatch(change_distortion_right({ distortion_right: false }))
                            }
                        }

                    }}
                    alt="Distortion Button RightisLoadedRight"
                />

            </div>
        );
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
        if (store.getState().isLoadedRight.isLoadedRight && prevProps.distortion_right !== this.props.distortion_right) {
            if (this.props.distortion_right) {
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
}

export default connect(mapStateToProps)(FxDistortionRight);