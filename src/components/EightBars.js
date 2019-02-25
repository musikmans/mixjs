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

class EightBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/eight_bars_inactive.svg",
            componentId: props.componentId,
            componentClass: props.componentClass,
            eightBarsInterval: '',
            eightBarsIntervalRight: ''
        };
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        if (this.state.componentId === "loop-eight-left") {
                            if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'sixteenbars' || store.getState().loop_left.loop_left === 'fourbars') {
                                return;
                            }
                            this.setState({
                                img: "Assets/eight_bars_pressed.svg"
                            })
                        } else {
                            if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'sixteenbars' || store.getState().loop_right.loop_right === 'fourbars') {
                                return;
                            }
                            this.setState({
                                img: "Assets/eight_bars_pressed.svg"
                            })
                        }
                    }}

                    onMouseUp={() => {
                        if (this.state.componentId === "loop-eight-left") {
                            if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'fourbars' || store.getState().loop_left.loop_left === 'sixteenbars') {
                                return;
                            }
                            if (store.getState().loop_left.loop_left !== "eightbars" && store.getState().controls_left.controls_left === "play") {
                                this.setState({
                                    img: "Assets/eight_bars_active.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "eightbars" }))
                                const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
                                const currentTime = wavesurfer.getCurrentTime();
                                const bpm = store.getState().bpmLeft.bpmLeft;
                                const musicBarsPerMin = bpm / 4;
                                const oneBarLength = (60 / musicBarsPerMin) * 4;
                                const endloop = currentTime + oneBarLength;
                                const secToInt = oneBarLength * 1000;
                                this.setState({
                                    eightBarsInterval: setInterval(function () { store.getState().musicOnTheLeft.musicOnTheLeft.play(currentTime, endloop) }, secToInt)
                                });
                                console.log(store.getState().loop_left)
                            } else {
                                this.setState({
                                    img: "Assets/eight_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "inactive" }))
                                if (store.getState().controls_left.controls_left === 'play') {
                                    clearInterval(this.state.eightBarsInterval);
                                    this.setState({
                                        eightBarsInterval: ''
                                    });
                                    store.getState().musicOnTheLeft.musicOnTheLeft.play()
                                }
                                console.log(store.getState().loop_left)
                            }
                        } else {
                            if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'fourbars' || store.getState().loop_right.loop_right === 'sixteenbars') {
                                return;
                            }
                            if (store.getState().loop_right.loop_right !== "eightbars" && store.getState().controls_right.controls_right === "play") {
                                this.setState({
                                    img: "Assets/eight_bars_active.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "eightbars" }))
                                const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
                                const currentTime = wavesurfer.getCurrentTime();
                                const bpm = store.getState().bpmRight.bpmRight;
                                const musicBarsPerMin = bpm / 4;
                                const oneBarLength = (60 / musicBarsPerMin) * 4;
                                const endloop = currentTime + oneBarLength;
                                const secToInt = oneBarLength * 1000;
                                this.setState({
                                    eightBarsIntervalRight: setInterval(function () { store.getState().musicOnTheRight.musicOnTheRight.play(currentTime, endloop) }, secToInt)
                                });
                                console.log(store.getState().loop_right)
                            } else {
                                this.setState({
                                    img: "Assets/eight_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "inactive" }))
                                if (store.getState().controls_right.controls_right === 'play') {
                                    clearInterval(this.state.eightBarsIntervalRight);
                                    this.setState({
                                        eightBarsIntervalRight: ''
                                    });
                                    store.getState().musicOnTheRight.musicOnTheRight.play()
                                }
                                console.log(store.getState().loop_right)
                            }
                        }
                    }}

                    alt="Loop eight bar"
                />

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.componentId === "loop-eight-left") {
            if (prevProps.loop_left !== this.props.loop_left && (this.props.loop_left !== "eightbars")) {
                this.setState({
                    img: "Assets/eight_bars_inactive.svg",
                })
            }
            if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left !== 'stop') {
                clearInterval(this.state.eightBarsInterval);
                this.setState({
                    eightBarsInterval: ''
                });
            }
        } else {
            if (prevProps.loop_right !== this.props.loop_right && (this.props.loop_right !== "eightbars")) {
                this.setState({
                    img: "Assets/eight_bars_inactive.svg",
                })
            }
            if (prevProps.controls_right !== this.props.controls_right && this.props.controls_right !== 'stop') {
                clearInterval(this.state.eightBarsIntervalRight);
                this.setState({
                    eightBarsIntervalRight: ''
                });
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.state.eightBarsInterval);
        clearInterval(this.state.eightBarsIntervalRight);
    }

}

export default connect(mapStateToProps)(EightBars);