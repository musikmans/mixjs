import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left, change_controls_right } from "../actions";

class FastForward extends Component {
    constructor(props) {
        super(props);
        this.state = {
          img: "Assets/forward_inactive.svg",
          componentId: props.componentId,
          componentClass: props.componentClass
        };

        this.fastForward = this.fastForward.bind(this);
        this.stopForwarding = this.stopForwarding.bind(this);
    }

    fastForward(side) {
            if (side === "ff-left") {
                if (store.getState().isLoadedLeft.isLoadedLeft === false) {
                    return;
                }
                this.setState({
                    img: "Assets/forward_pressed.svg",
                    })
                store.dispatch(change_controls_left({ controls_left: "forward" }))
                console.log(store.getState().controls_left)
                        store.getState().musicOnTheLeft.musicOnTheLeft.skipForward(2);
            } else {
                if (store.getState().isLoadedRight.isLoadedRight === false) {
                    return;
                }
                this.setState({
                    img: "Assets/forward_pressed.svg",
                    })
                store.dispatch(change_controls_right({ controls_right: "forward" }))
                console.log(store.getState().controls_right)
            }
    }
    stopForwarding(side) {
        if (side === "ff-left") {
            if (store.getState().isLoadedLeft.isLoadedLeft === false) {
                return;
            }
            this.setState({
            img: "Assets/forward_inactive.svg",
            })
            store.dispatch(change_controls_left({ controls_left: "play" }))
            store.getState().musicOnTheLeft.musicOnTheLeft.play();
            console.log(store.getState().controls_left)
        } else {
            if (store.getState().isLoadedRight.isLoadedRight === false) {
                return;
            }
            this.setState({
            img: "Assets/forward_inactive.svg",
            })
            store.dispatch(change_controls_right({ controls_right: "play" }))
            console.log(store.getState().controls_right)
        }
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                src={this.state.img}
                onMouseDown={() => {
                    this.fastForward(this.state.componentId)
                }}

                onMouseUp={() => {
                    this.stopForwarding(this.state.componentId);
                }}

                onTouchStart={() => {
                    this.fastForward(this.state.componentId)
                }}

                onTouchEnd={() => {
                    this.stopForwarding(this.state.componentId);
                }}

                alt="Fast Forward"
                />
                
            </div>
        );
    }
}

export default FastForward;