import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_distortion_left } from "../actions";

const mapStateToProps = state => ({
    distortion_left: state.distortion_left.distortion_left,
});

class FxDistortion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'Assets/fxButton_inactive.svg',
        };
        store.dispatch(change_distortion_left({ distortion_left: false }))
    }

    render() {
        return (
            <div
                id='fx-distortion-1'
                className='fx-left'
            >
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        if (store.getState().isLoadedLeft.isLoadedLeft) {
                            if (store.getState().delay_left.delay_left === true || store.getState().lpf_left.lpf_left < 10000 ||
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
                            if (store.getState().delay_left.delay_left === true || store.getState().lpf_left.lpf_left < 10000 ||
                                store.getState().hpf_left.hpf_left > 50 || store.getState().pan_left.pan_left < -0.05 ||
                                store.getState().pan_left.pan_left > 0.05) {
                                return;
                            }
                            if (store.getState().distortion_left.distortion_left !== true) {
                                // activate
                                this.setState({
                                    img: 'Assets/fxButton_active.svg',
                                });
                                store.dispatch(change_distortion_left({ distortion_left: true }))
                            } else {
                                // desactivate
                                this.setState({
                                    img: 'Assets/fxButton_inactive.svg',
                                });
                                store.dispatch(change_distortion_left({ distortion_left: false }))
                            }
                        }

                    }}
                    alt="Distortion Button Left"
                />

            </div>
        );
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
        if (store.getState().isLoadedLeft.isLoadedLeft && prevProps.distortion_left !== this.props.distortion_left) {
            if (this.props.distortion_left) {
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

export default connect(mapStateToProps)(FxDistortion);