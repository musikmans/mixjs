import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_loop_left } from "../actions";

const mapStateToProps = (state) => ({
    loop_left: state.loop_left.loop_left,
    controls_left: state.controls_left.controls_left,
});

class FourBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/four_bars_inactive.svg",
            fourBarsInterval: '',
        };
    }

    render() {
        return (
            <div id="loop-four-left" className="controls-left">
                <img
                    src={this.state.img}

                    onMouseDown={() => {
                        if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'twobars' || store.getState().loop_left.loop_left === 'eightbars') {
                            return;
                        }
                        this.setState({
                            img: "Assets/four_bars_pressed.svg"
                        })
                    }}

                    onMouseUp={() => {
                        if (store.getState().loop_left.loop_left === 'onebar' || store.getState().loop_left.loop_left === 'twobars' || store.getState().loop_left.loop_left === 'eightbars') {
                            return;
                        }
                        if (store.getState().loop_left.loop_left !== "fourbars" && store.getState().controls_left.controls_left === "play") {
                            this.setState({
                                img: "Assets/four_bars_active.svg",
                            })
                            store.dispatch(change_loop_left({ loop_left: "fourbars" }))
                            const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
                            const currentTime = wavesurfer.getCurrentTime();
                            const bpm = store.getState().bpmLeft.bpmLeft;
                            const musicBarsPerMin = bpm / 4;
                            const oneBarLength = (60 / musicBarsPerMin) * 4;
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
                        }
                    }}

                    alt="Loop four bar left"
                />

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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
    }

    componentWillUnmount() {
        clearInterval(this.state.fourBarsInterval);
    }
}

export default connect(mapStateToProps)(FourBars);