import React, { Component } from "react"
import { store } from "../store";
import { change_controls_right } from "../actions";

class Stop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/stop_inactive.svg",
        };

        this.stopMusic = this.stopMusic.bind(this);
        this.dontActivateStop = this.dontActivateStop.bind(this);
    }

    stopMusic() {
        if (store.getState().isLoadedRight.isLoadedRight === false) {
            return;
        }
        if (store.getState().controls_right.controls_right !== "stop") {
            this.setState({
                img: "Assets/stop_inactive.svg",
            })
            store.dispatch(change_controls_right({ controls_right: "stop" }))

        } else {
            this.setState({
                img: "Assets/stop_inactive.svg",
            })
        }
    }

    dontActivateStop() {
        if (store.getState().isLoadedRight.isLoadedRight === false) {
            return;
        }
        this.setState({
            img: "Assets/stop_pressed.svg"
        })
        store.getState().musicOnTheRight.musicOnTheRight.stop();
    }

    render() {
        return (
            <div id="stop-right" className="controls-right">
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        this.dontActivateStop()
                    }}

                    onMouseUp={() => {
                        this.stopMusic()
                    }}

                    alt="Stop button Right"
                />
            </div>
        );
    }
}

export default Stop;