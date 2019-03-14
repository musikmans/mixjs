import React, { Component } from "react"
import { store } from "../store";
import { change_controls_left, load_music_left, change_vinyl_art_left } from "../actions";

class Eject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/eject_inactive.svg",
        };

        this.ejectTrack = this.ejectTrack.bind(this);
    }

    ejectTrack() {
        if (store.getState().controls_left.controls_left !== "ejected" && store.getState().isLoadedLeft.isLoadedLeft) {
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
        } else {
            this.setState({
                img: "Assets/eject_inactive.svg",
            })
        }
    }

    render() {
        return (
            <div id="eject-left" className="controls-left">
                <img
                    src={this.state.img}
                    onMouseDown={() => {
                        this.setState({
                            img: "Assets/eject_pressed.svg"
                        })
                    }}

                    onMouseUp={() => {
                        this.ejectTrack()
                    }}

                    alt="Eject button Left"
                />

            </div>
        );
    }
}

export default Eject;