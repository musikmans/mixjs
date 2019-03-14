import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_loop_left } from "../actions";

const mapStateToProps = (state) => ({
    loop_left: state.loop_left.loop_left,
    controls_left: state.controls_left.controls_left,
});

class TwoBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/two_bars_inactive.svg",
            twoBarsInterval: '',
        };
    }

    render() {
        return (
            <div id="loop-two-left" className="controls-left">
                <img
                    src={this.state.img}

                    onMouseDown={() => {
                        if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'fourbars' || store.getState().loop_left.loop_left === 'eightbars') {
                            return;
                        }
                        this.setState({
                            img: "Assets/two_bars_pressed.svg"
                        })
                    }}

                    onMouseUp={() => {
                        if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'fourbars' || store.getState().loop_left.loop_left === 'eightbars') {
                            return;
                        }
                        if (store.getState().loop_left.loop_left !== "twobars" && store.getState().controls_left.controls_left === "play") {
                            this.setState({
                                img: "Assets/two_bars_active.svg",
                            })
                            store.dispatch(change_loop_left({ loop_left: "twobars" }))
                            const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
                            const currentTime = wavesurfer.getCurrentTime();
                            const bpm = store.getState().bpmLeft.bpmLeft;
                            const musicBarsPerMin = bpm / 4;
                            const oneBarLength = (60 / musicBarsPerMin) * 2;
                            const endloop = currentTime + oneBarLength;
                            const secToInt = oneBarLength * 1000;
                            this.setState({
                                twoBarsInterval: setInterval(function () { store.getState().musicOnTheLeft.musicOnTheLeft.play(currentTime, endloop) }, secToInt)
                            });
                        } else {
                            this.setState({
                                img: "Assets/two_bars_inactive.svg",
                            })
                            store.dispatch(change_loop_left({ loop_left: "inactive" }))
                            if (store.getState().controls_left.controls_left === 'play') {
                                clearInterval(this.state.twoBarsInterval);
                                this.setState({
                                    twoBarsInterval: ''
                                });
                                store.getState().musicOnTheLeft.musicOnTheLeft.play()
                            }
                        }
                    }}

                    alt="Loop two bar left"
                />

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.loop_left !== this.props.loop_left && (this.props.loop_left !== "twobars")) {
            this.setState({
                img: "Assets/two_bars_inactive.svg"
            })
        }
        if (prevProps.controls_left !== this.props.controls_left && this.props.controls_left !== 'play') {
            clearInterval(this.state.twoBarsInterval);
            this.setState({
                twoBarsInterval: ''
            });
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.twoBarsInterval);
    }
}

export default connect(mapStateToProps)(TwoBars);