import React, { Component } from "react"
import { store } from "../store";
import { change_controls_right, load_music_right, change_vinyl_art_right } from "../actions";

class EjectTrack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "Assets/eject_inactive.svg",
        };

        this.ejectTrack = this.ejectTrack.bind(this);
    }

    ejectTrack() {
        if (store.getState().controls_right.controls_right !== "ejected" && store.getState().isLoadedRight.isLoadedRight) {
            this.setState({
                img: "Assets/eject_inactive.svg",
            })
            store.dispatch(change_controls_right({ controls_right: "ejected" }))
            store.dispatch(load_music_right({ isLoadedRight: false }))
            store.getState().musicOnTheRight.musicOnTheRight.destroy();
            document.getElementById('bpmright').innerHTML = "";
            document.getElementById('timeright').innerHTML = "";
            document.getElementById('textright').innerText = "Song:\nArtist:"
            store.dispatch(change_vinyl_art_right({ vinyl_art_right: "./Assets/404.jpg" }))
        } else {
            this.setState({
                img: "Assets/eject_inactive.svg",
            })
        }
    }

    render() {
        return (
            <div id="eject-right" className="controls-right">
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

                    alt="Eject button Right"
                />

            </div>
        );
    }
}

export default EjectTrack;