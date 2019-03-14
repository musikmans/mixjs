import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left } from "../actions";

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
        if (store.getState().isLoadedLeft.isLoadedLeft === false) {
            return;
        }
        if (store.getState().controls_left.controls_left !== "stop") {
            this.setState({
                img: "Assets/stop_inactive.svg",
            })
            store.dispatch(change_controls_left({ controls_left: "stop" }))

        } else {
            this.setState({
                img: "Assets/stop_inactive.svg",
            })
        }
    }

    dontActivateStop() {
        if (store.getState().isLoadedLeft.isLoadedLeft === false) {
            return;
        }
        this.setState({
            img: "Assets/stop_pressed.svg"
        })
        store.getState().musicOnTheLeft.musicOnTheLeft.stop();
    }

    render() {
        return (
            <div id="stop-left" className="controls-left">
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        this.dontActivateStop()
                    }}

                    onMouseUp={() => {
                        this.stopMusic()
                    }}

                    alt="Stop button Left"
                />
            </div>
        );
    }
}

export default Stop;