import React, { Component } from "react"
import { store } from "../store";
import { change_controls_right } from "../actions";

class FastForwardRight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/forward_inactive.svg",
        };

        this.fastForward = this.fastForward.bind(this);
        this.stopForwarding = this.stopForwarding.bind(this);
    }

    fastForward() {
        if (store.getState().isLoadedRight.isLoadedRight === false) {
            return;
        }
        this.setState({
            img: "Assets/forward_pressed.svg",
        })
        store.dispatch(change_controls_right({ controls_right: "forward" }))
        store.getState().musicOnTheRight.musicOnTheRight.skipForward(2);
    }
    stopForwarding() {
        if (store.getState().isLoadedRight.isLoadedRight === false) {
            return;
        }
        this.setState({
            img: "Assets/forward_inactive.svg",
        })
        store.dispatch(change_controls_right({ controls_right: "play" }))
        store.getState().musicOnTheRight.musicOnTheRight.play();
    }

    render() {
        return (
            <div id="ff-right" className="controls-right">
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        this.fastForward()
                    }}

                    onMouseUp={() => {
                        this.stopForwarding();
                    }}

                    onTouchStart={() => {
                        this.fastForward()
                    }}

                    onTouchEnd={() => {
                        this.stopForwarding();
                    }}

                    alt="Fast Forward Right"
                />

            </div>
        );
    }
}

export default FastForwardRight;