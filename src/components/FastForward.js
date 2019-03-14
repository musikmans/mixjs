import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left } from "../actions";

class FastForward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/forward_inactive.svg",
        };

        this.fastForward = this.fastForward.bind(this);
        this.stopForwarding = this.stopForwarding.bind(this);
    }

    fastForward() {
        if (store.getState().isLoadedLeft.isLoadedLeft === false) {
            return;
        }
        this.setState({
            img: "Assets/forward_pressed.svg",
        })
        store.dispatch(change_controls_left({ controls_left: "forward" }))
        store.getState().musicOnTheLeft.musicOnTheLeft.skipForward(2);
    }
    stopForwarding() {
        if (store.getState().isLoadedLeft.isLoadedLeft === false) {
            return;
        }
        this.setState({
            img: "Assets/forward_inactive.svg",
        })
        store.dispatch(change_controls_left({ controls_left: "play" }))
        store.getState().musicOnTheLeft.musicOnTheLeft.play();
    }

    render() {
        return (
            <div id="ff-left" className="controls-left">
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

                    alt="Fast Forward Left"
                />

            </div>
        );
    }
}

export default FastForward;