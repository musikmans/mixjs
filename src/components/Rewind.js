import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left } from "../actions";

class Rewind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/rew_inactive.svg",
        };
        this.stopRewind = this.stopRewind.bind(this);
        this.rewindMusic = this.rewindMusic.bind(this);
    }

    rewindMusic() {
        if (store.getState().isLoadedLeft.isLoadedLeft === false) {
            return;
        }
        this.setState({
            img: "Assets/rew_pressed.svg",
        })
        store.dispatch(change_controls_left({ controls_left: "rewind" }))
        store.getState().musicOnTheLeft.musicOnTheLeft.skipBackward(2);

    }

    stopRewind() {
        if (store.getState().isLoadedLeft.isLoadedLeft === false) {
            return;
        }
        this.setState({
            img: "Assets/rew_inactive.svg",
        })
        store.dispatch(change_controls_left({ controls_left: "play" }))
    }

    render() {
        return (
            <div id="rew-left" className="controls-left">
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        this.rewindMusic()
                    }}

                    onMouseUp={() => {
                        this.stopRewind()
                    }}

                    onTouchStart={() => {
                        this.rewindMusic()
                    }}

                    onTouchEnd={() => {
                        this.stopRewind()
                    }}
                    alt="Rewind"
                />

            </div>
        );
    }
}

export default Rewind;