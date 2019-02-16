import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left, change_controls_right, load_music_left, load_music_right, change_vinyl_art_left } from "../actions";

class Eject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/eject_inactive.svg",
            componentId: props.componentId,
            componentClass: props.componentClass
        };

        this.ejectTrack = this.ejectTrack.bind(this);
    }

    ejectTrack(side) {
        if (side === "eject-left") {
            if (store.getState().controls_left.controls_left !== "ejected") {
                this.setState({
                    img: "Assets/eject_inactive.svg",
                })
                store.dispatch(change_controls_left({ controls_left: "ejected" }))
                store.dispatch(load_music_left({ isLoadedLeft: false }))
                store.getState().musicOnTheLeft.musicOnTheLeft.destroy();
                document.getElementById('bpmleft').innerHTML = "";
                document.getElementById('timeleft').innerHTML = "";
                document.getElementById('textleft').innerText = "Song:\nArtist:"
                store.dispatch(change_vinyl_art_left({ vinyl_art_left: "./Assets/404.jpg" }))
                console.log(store.getState().controls_left)
            } else {
                this.setState({
                    img: "Assets/eject_inactive.svg",
                })
            }
        } else {
            if (store.getState().controls_right.controls_right !== "ejected") {
                this.setState({
                    img: "Assets/eject_inactive.svg",
                })
                store.dispatch(change_controls_right({ controls_right: "ejected" }))
                store.dispatch(load_music_right({ isLoadedRight: false }))
                console.log(store.getState().controls_right)
            } else {
                this.setState({
                    img: "Assets/eject_inactive.svg",
                })
            }
        }
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        this.setState({
                            img: "Assets/eject_pressed.svg"
                        })
                    }}

                    onMouseUp={() => {
                        this.ejectTrack(this.state.componentId)
                    }}

                    alt="Eject button "
                />

            </div>
        );
    }
}

export default Eject;