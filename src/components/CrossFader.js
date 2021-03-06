import React, { Component } from "react"
import { Draggable } from "gsap/Draggable";
import { store } from "../store";
import { changeLevel, change_volume_left, change_volume_right } from "../actions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoadedLeft: state.isLoadedLeft.isLoadedLeft,
    isLoadedRight: state.isLoadedRight.isLoadedRight,
});

class CrossFader extends Component {
    render() {
        return (
            <div id="x-fader" className="x-fader">
                <img src="Assets/x_fader.svg" alt="Crossfader" />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isLoadedLeft && this.props.isLoadedRight) {
            const Drag = Draggable.create("#x-fader", {
                type: "x",
                bounds: '.mixer svg g g#prefix__Layer_1 g#prefix__CrossFader',
                onDrag: () => {
                    const leftTrack = store.getState().musicOnTheLeft.musicOnTheLeft;
                    const rightTrack = store.getState().musicOnTheRight.musicOnTheRight;
                    const size = Math.round(Math.abs(Drag[0].minX) + Drag[0].maxX);
                    let position = ((Drag[0].x) / size * 2).toFixed(2);
                    if (position <= -0.96) position = -1;
                    if (position >= 0.96) position = 1;
                    if (position >= -1 && position <= 1) store.dispatch(changeLevel({ xfaderlevel: position }))
                    let volOnTheLeft = 1;
                    let volOnTheRight = 1;
                    // Setting volume on left track
                    if (position <= 0) {
                        volOnTheLeft = 1
                    } else {
                        volOnTheLeft = (1 - position).toFixed(2);
                    }
                    // Setting volume on right track
                    if (position >= 0) {
                        volOnTheRight = 1
                    } else {
                        volOnTheRight = (1 - Math.abs(position)).toFixed(2);
                    }
                    leftTrack.setVolume(volOnTheLeft);
                    rightTrack.setVolume(volOnTheRight);
                    store.dispatch(change_volume_left({ volume_left: volOnTheLeft }))
                    store.dispatch(change_volume_right({ volume_right: volOnTheRight }))
                }
            })
        }
    }
}

export default connect(mapStateToProps)(CrossFader);