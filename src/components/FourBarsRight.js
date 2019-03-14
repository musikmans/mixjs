import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_loop_right } from "../actions";

const mapStateToProps = (state) => ({
    loop_right: state.loop_right.loop_right,
    controls_right: state.controls_right.controls_right,
});

class FourBarsRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/four_bars_inactive.svg",
            fourBarsIntervalRight: '',
        };
    }

    render() {
        return (
            <div id="loop-four-right" className="controls-right">
                <img
                    src={this.state.img}

                    onMouseDown={() => {
                        if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'twobars' || store.getState().loop_right.loop_right === 'eightbars') {
                            return;
                        }
                        this.setState({
                            img: "Assets/four_bars_pressed.svg"
                        })
                    }}

                    onMouseUp={() => {
                        if (store.getState().loop_right.loop_right === 'onebar' || store.getState().loop_right.loop_right === 'twobars' || store.getState().loop_right.loop_right === 'eightbars') {
                            return;
                        }
                        if (store.getState().loop_right.loop_right !== "fourbars" && store.getState().controls_right.controls_right === "play") {
                            this.setState({
                                img: "Assets/four_bars_active.svg",
                            })
                            store.dispatch(change_loop_right({ loop_right: "fourbars" }))
                            const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
                            const currentTime = wavesurfer.getCurrentTime();
                            const bpm = store.getState().bpmRight.bpmRight;
                            const musicBarsPerMin = bpm / 4;
                            const oneBarLength = (60 / musicBarsPerMin) * 4;
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
                        }
                    }}

                    alt="Loop four bar right"
                />

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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

    componentWillUnmount() {
        clearInterval(this.state.fourBarsIntervalRight);
    }
}

export default connect(mapStateToProps)(FourBarsRight);