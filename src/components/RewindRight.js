import React, { Component } from "react"
import { store } from "../store";
import { change_controls_right } from "../actions";

class RewindRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/rew_inactive.svg",
        };
        this.stopRewind = this.stopRewind.bind(this);
        this.rewindMusic = this.rewindMusic.bind(this);
    }

    rewindMusic() {
        if (store.getState().isLoadedRight.isLoadedRight === false) {
            return;
        }
        this.setState({
            img: "Assets/rew_pressed.svg",
        })
        store.dispatch(change_controls_right({ controls_right: "rewind" }))
        store.getState().musicOnTheRight.musicOnTheRight.skipBackward(2);

    }

    stopRewind() {
        if (store.getState().isLoadedRight.isLoadedRight === false) {
            return;
        }
        this.setState({
            img: "Assets/rew_inactive.svg",
        })
        store.dispatch(change_controls_right({ controls_right: "play" }))
    }

    render() {
        return (
            <div id="rew-right" className="controls-right">
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
                    alt="Rewind Right"
                />

            </div>
        );
    }
}

export default RewindRight;