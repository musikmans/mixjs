import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_loop_left, change_loop_right, the_left_interval } from "../actions";

const mapStateToProps = (state) => ({
    loop_left: state.loop_left.loop_left,
    loop_right: state.loop_right.loop_right,
    controls_left: state.controls_left.controls_left,
    controls_right: state.controls_right.controls_right,
});

const musicInterval = function () {
    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
    const currentTime = wavesurfer.getCurrentTime();
    const bpm = store.getState().bpmLeft.bpmLeft;
    const musicBarsPerMin = bpm / 4;
    const eightBarLength = (60 / musicBarsPerMin) * 8;
    const endloop = currentTime + eightBarLength;
    const secToInt = eightBarLength * 1000;
    const theMusicInterval = setInterval(function () { store.getState().musicOnTheLeft.musicOnTheLeft.play(currentTime, endloop) }, secToInt);
    store.dispatch(the_left_interval({ intervalLeft: theMusicInterval }));
  }

class SixteenBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/sixteen_bars_inactive.svg",
            componentId: props.componentId,
            componentClass: props.componentClass
        };
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        if (this.state.componentId === "loop-sixteen-left") {
                        if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'fourbars' ) {
                            return;
                        }
                        this.setState({
                            img: "Assets/sixteen_bars_pressed.svg"
                        })
                        } else {
                            this.setState({
                                img: "Assets/sixteen_bars_pressed.svg"
                            })
                        }
                    }}

                    onMouseUp={() => {
                        if (this.state.componentId === "loop-sixteen-left") {
                            if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'eightbars' || store.getState().loop_left.loop_left === 'fourbars' ) {
                                return;
                            }
                            if (store.getState().loop_left.loop_left !== "sixteenbars" && store.getState().controls_left.controls_left === "play") {
                                this.setState({
                                    img: "Assets/sixteen_bars_active.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "sixteenbars" }))
                                musicInterval();
                                console.log(store.getState().loop_left)
                            } else {
                                this.setState({
                                    img: "Assets/sixteen_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_left({ loop_left: "inactive" }))
                                if (store.getState().controls_left.controls_left === 'play') {
                                    clearInterval(store.getState().intervalLeft.intervalLeft);
                                    store.dispatch(the_left_interval({ intervalLeft: '' }));
                                    store.getState().musicOnTheLeft.musicOnTheLeft.play()
                                }
                                console.log(store.getState().loop_left)
                            }
                        } else {
                            if (store.getState().loop_right.loop_right !== "sixteenbars" && store.getState().controls_right.controls_right === "play") {
                                this.setState({
                                    img: "Assets/sixteen_bars_active.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "sixteenbars" }))
                                console.log(store.getState().loop_right)
                            } else {
                                this.setState({
                                    img: "Assets/sixteen_bars_inactive.svg",
                                })
                                store.dispatch(change_loop_right({ loop_right: "inactive" }))
                                console.log(store.getState().loop_right)
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
            if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left === 'stop') {
                console.log("stop");
            }
        } else {
            if (prevProps.loop_right !== this.props.loop_right && (this.props.loop_right !== "sixteenbars")) {
                this.setState({
                    img: "Assets/sixteen_bars_inactive.svg",
                })
            }
        }
    }
}

export default connect(mapStateToProps)(SixteenBars);