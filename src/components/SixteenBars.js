import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_loop_left, change_loop_right } from "../actions";

const mapStateToProps = (state) => ({
    loop_left: state.loop_left.loop_left,
    loop_right: state.loop_right.loop_right,
    controls_left: state.controls_left.controls_left,
    controls_right: state.controls_right.controls_right,
});

class SixteenBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/sixteen_bars_inactive.svg",
            componentId: props.componentId,
            componentClass: props.componentClass,
            sixteenBarsInterval: '',
            sixteenBarsIntervalRight: ''
        };
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        if (this.state.componentId === "loop-sixteen-left") {
                            if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'fourbars') {
                                return;
                            }
                            this.setState({
                                img: "Assets/sixteen_bars_pressed.svg"
                            })
                        } else {
                            if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'eightbars' || store.getState().loop_right.loop_right === 'fourbars') {
                                return;
                            }
                            this.setState({
                                img: "Assets/sixteen_bars_pressed.svg"
                            })
                        }
                    }}

                    onMouseUp={() => {
                        if (this.state.componentId === "loop-sixteen-left") {
                            if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'fourbars') {
                                return;
                            }
                            if (store.getState().loop_left.loop_left !== "sixteenbars" && store.getState().controls_left.controls_left === "play") {
                                this.setState({
                                    img: "Assets/sixteen_bars_active.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "sixteenbars" }))
                                const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
                                const currentTime = wavesurfer.getCurrentTime();
                                const bpm = store.getState().bpmLeft.bpmLeft;
                                const musicBarsPerMin = bpm / 4;
                                const oneBarLength = (60 / musicBarsPerMin) * 4;
                                const endloop = currentTime + oneBarLength;
                                const secToInt = oneBarLength * 1000;
                                this.setState({
                                    sixteenBarsInterval: setInterval(function () { store.getState().musicOnTheLeft.musicOnTheLeft.play(currentTime, endloop) }, secToInt)
                                });
                            } else {
                                this.setState({
                                    img: "Assets/sixteen_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "inactive" }))
                                if (store.getState().controls_left.controls_left === 'play') {
                                    clearInterval(this.state.sixteenBarsInterval);
                                    this.setState({
                                        sixteenBarsInterval: ''
                                    });
                                    store.getState().musicOnTheLeft.musicOnTheLeft.play()
                                }
                            }
                        } else {
                            if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'eightbars' || store.getState().loop_right.loop_right === 'fourbars') {
                                return;
                            }
                            if (store.getState().loop_right.loop_right !== "sixteenbars" && store.getState().controls_right.controls_right === "play") {
                                this.setState({
                                    img: "Assets/sixteen_bars_active.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "sixteenbars" }))
                                const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
                                const currentTime = wavesurfer.getCurrentTime();
                                const bpm = store.getState().bpmRight.bpmRight;
                                const musicBarsPerMin = bpm / 4;
                                const oneBarLength = (60 / musicBarsPerMin) * 4;
                                const endloop = currentTime + oneBarLength;
                                const secToInt = oneBarLength * 1000;
                                this.setState({
                                    sixteenBarsIntervalRight: setInterval(function () { store.getState().musicOnTheRight.musicOnTheRight.play(currentTime, endloop) }, secToInt)
                                });
                            } else {
                                this.setState({
                                    img: "Assets/sixteen_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "inactive" }))
                                if (store.getState().controls_right.controls_right === 'play') {
                                    clearInterval(this.state.sixteenBarsIntervalRight);
                                    this.setState({
                                        sixteenBarsIntervalRight: ''
                                    });
                                    store.getState().musicOnTheRight.musicOnTheRight.play()
                                }
                            }
                        }
                    }}

                    alt="Loop sixteen bar"
                />

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.componentId === "loop-sixteen-left") {
            if (prevProps.loop_left !== this.props.loop_left && (this.props.loop_left !== "sixteenbars")) {
                this.setState({
                    img: "Assets/sixteen_bars_inactive.svg",
                })
            }
            if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left !== 'play') {
                clearInterval(this.state.sixteenBarsInterval);
                this.setState({
                    sixteenBarsInterval: ''
                });
            }
        } else {
            if (prevProps.loop_right !== this.props.loop_right && (this.props.loop_right !== "sixteenbars")) {
                this.setState({
                    img: "Assets/sixteen_bars_inactive.svg",
                })
            }
            if (prevProps.controls_right !== this.props.controls_right && this.props.controls_right !== 'play') {
                clearInterval(this.state.sixteenBarsIntervalRight);
                this.setState({
                    sixteenBarsIntervalRight: ''
                });
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.sixteenBarsInterval);
        clearInterval(this.state.sixteenBarsIntervalRight);
    }
}

export default connect(mapStateToProps)(SixteenBars);