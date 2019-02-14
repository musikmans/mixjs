import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left, change_controls_right } from "../actions";

class Rewind extends Component {
    constructor(props) {
        super(props);
        this.state = {
          img: "Assets/rew_inactive.svg",
          componentId: props.componentId,
          componentClass: props.componentClass
        };

        this.stopRewind = this.stopRewind.bind(this);
        this.rewindMusic = this.rewindMusic.bind(this);
    }

    rewindMusic(side) {
            if (side === "rew-left") {
                if (store.getState().isLoadedLeft.isLoadedLeft === false) {
                    return;
                }
                this.setState({
                    img: "Assets/rew_pressed.svg",
                    })
                store.dispatch(change_controls_left({ controls_left: "rewind" }))
                console.log(store.getState().controls_left)

            } else {
                if (store.getState().isLoadedRight.isLoadedRight === false) {
                    return;
                }
                this.setState({
                    img: "Assets/rew_pressed.svg",
                    })
                store.dispatch(change_controls_right({ controls_right: "rewind" }))
                console.log(store.getState().controls_right)
            }
    }

    stopRewind(side) {
        if (side === "rew-left") {
            if (store.getState().isLoadedLeft.isLoadedLeft === false) {
                return;
            }
            this.setState({
                img: "Assets/rew_inactive.svg",
                })
                store.dispatch(change_controls_left({ controls_left: "pause" }))

        } else {
            if (store.getState().isLoadedRight.isLoadedRight === false) {
                return;
            }
            this.setState({
                img: "Assets/rew_inactive.svg",
                })
                store.dispatch(change_controls_right({ controls_right: "pause" }))
        }
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                src={this.state.img}
                    onMouseDown={() => {
                        this.rewindMusic(this.state.componentId)
                    }}

                    onMouseUp={() => {
                        this.stopRewind(this.state.componentId)
                    }}

                    onTouchStart={() => {
                        this.rewindMusic(this.state.componentId)
                    }}

                    onTouchEnd={() => {
                        this.stopRewind(this.state.componentId)
                    }}
                alt="Rewind"
                />
                
            </div>
        );
    }
}

export default Rewind;