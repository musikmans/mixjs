import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left, change_controls_right } from "../actions";

class Stop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/stop_inactive.svg",
            componentId: props.componentId,
            componentClass: props.componentClass
        };
 
        this.stopMusic = this.stopMusic.bind(this);
        this.dontActivateStop = this.dontActivateStop.bind(this);
    }

    stopMusic(side) {
        if (side === "stop-left") {
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
        } else {
            if (store.getState().isLoadedRight.isLoadedRight === false) {
                return;
            }
            if (store.getState().controls_right.controls_right !== "stop") {
                this.setState({
                    img: "Assets/stop_inactive.svg",
                })
                store.dispatch(change_controls_right({ controls_right: "stop" }))
                console.log(store.getState().controls_right)
            } else {
                this.setState({
                    img: "Assets/stop_inactive.svg",
                })
            }
        }
    }

    dontActivateStop(side) {
        if (side === "stop-left") {
            if (store.getState().isLoadedLeft.isLoadedLeft === false) {
                return;
            }
            this.setState({
                img: "Assets/stop_pressed.svg"
            })
            store.getState().musicOnTheLeft.musicOnTheLeft.stop();
        } else {
            if (store.getState().isLoadedRight.isLoadedRight === false) {
                return;
            }
            this.setState({
                img: "Assets/stop_pressed.svg"
            })
        }

    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        this.dontActivateStop(this.state.componentId)
                    }}

                    onMouseUp={() => {
                        this.stopMusic(this.state.componentId)
                    }}

                    alt="Stop button "
                />

            </div>
        );
    }
}

export default Stop;