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

class FourBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/four_bars_inactive.svg",
            componentId: props.componentId,
            componentClass: props.componentClass,
            fourBarsInterval: '',
            fourBarsIntervalRight: ''
        };
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                    src={this.state.img}

                    onMouseDown={() => {
                        if (this.state.componentId === "loop-four-left") {
                            if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'sixteenbars') {
                                return;
                            }
                            this.setState({
                                img: "Assets/four_bars_pressed.svg"
                            })
                        } else {
                            if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'eightbars' || store.getState().loop_right.loop_right === 'sixteenbars') {
                                return;
                            }
                            this.setState({
                                img: "Assets/four_bars_pressed.svg"
                            })
                        }
                    }}

                    onMouseUp={() => {
                        if (this.state.componentId === "loop-four-left") {
                            if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'sixteenbars') {
                                return;
                            }
                            if (store.getState().loop_left.loop_left !== "fourbars" && store.getState().controls_left.controls_left === "play") {
                                this.setState({
                                    img: "Assets/four_bars_active.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "fourbars" }))
                                console.log(store.getState().loop_left)
                                const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
                                const currentTime = wavesurfer.getCurrentTime();
                                const bpm = store.getState().bpmLeft.bpmLeft;
                                const musicBarsPerMin = bpm / 4;
                                const oneBarLength = (60 / musicBarsPerMin) * 2;
                                const endloop = currentTime + oneBarLength;
                                const secToInt = oneBarLength * 1000;
                                this.setState({
                                    fourBarsInterval: setInterval(function () { store.getState().musicOnTheLeft.musicOnTheLeft.play(currentTime, endloop) }, secToInt)
                                });
                            } else {
                                this.setState({
                                    img: "Assets/four_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "inactive" }))
                                if (store.getState().controls_left.controls_left === 'play') {
                                    clearInterval(this.state.fourBarsInterval);
                                    this.setState({
                                        fourBarsInterval: ''
                                    });
                                    store.getState().musicOnTheLeft.musicOnTheLeft.play()
                                }
                                console.log(store.getState().loop_left)
                            }
                        } else {
                            if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'eightbars' || store.getState().loop_right.loop_right === 'sixteenbars') {
                                return;
                            }
                            if (store.getState().loop_right.loop_right !== "fourbars" && store.getState().controls_right.controls_right === "play") {
                                this.setState({
                                    img: "Assets/four_bars_active.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "fourbars" }))
                                console.log(store.getState().loop_right)
                                const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
                                const currentTime = wavesurfer.getCurrentTime();
                                const bpm = store.getState().bpmRight.bpmRight;
                                const musicBarsPerMin = bpm / 4;
                                const oneBarLength = (60 / musicBarsPerMin) * 2;
                                const endloop = currentTime + oneBarLength;
                                const secToInt = oneBarLength * 1000;
                                this.setState({
                                    fourBarsIntervalRight: setInterval(function () { store.getState().musicOnTheRight.musicOnTheRight.play(currentTime, endloop) }, secToInt)
                                });
                            } else {
                                this.setState({
                                    img: "Assets/four_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "inactive" }))
                                if (store.getState().controls_right.controls_right === 'play') {
                                    clearInterval(this.state.fourBarsIntervalRight);
                                    this.setState({
                                        fourBarsIntervalRight: ''
                                    });
                                    store.getState().musicOnTheRight.musicOnTheRight.play()
                                }
                                console.log(store.getState().loop_right)
                            }
                        }
                    }}

                    alt="Loop four bar"
                />

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.componentId === "loop-four-left") {
            if (prevProps.loop_left !== this.props.loop_left && (this.props.loop_left !== "fourbars")) {
                this.setState({
                    img: "Assets/four_bars_inactive.svg"
                })
            }
            if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left !== 'play') {
                clearInterval(this.state.fourBarsInterval);
                this.setState({
                    fourBarsInterval: ''
                });
            }
        } else {
            if (prevProps.loop_right !== this.props.loop_right && (this.props.loop_right !== "fourbars")) {
                this.setState({
                    img: "Assets/four_bars_inactive.svg"
                })
            }
            if (prevProps.controls_right !== this.props.controls_right && this.props.controls_right !== 'play') {
                clearInterval(this.state.fourBarsIntervalRight);
                this.setState({
                    fourBarsIntervalRight: ''
                });
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.fourBarsInterval);
        clearInterval(this.state.fourBarsIntervalRight);
    }
}

export default connect(mapStateToProps)(FourBars);