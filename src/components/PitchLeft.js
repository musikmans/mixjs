import React, { Component } from "react"
import { Draggable } from "gsap/Draggable"
import { store } from "../store";
import { changeLeftPitchLevel } from "../actions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoadedLeft: state.isLoadedLeft.isLoadedLeft
});

class PitchLeft extends Component {
    render() {
        return (
            <div id="fader-pitch-left" className="fader-pitch-left">
                <img id="left-side-pitch" src="Assets/fader.svg" alt="Pitch fader on left side"

                />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isLoadedLeft !== this.props.isLoadedLeft && this.props.isLoadedLeft===true) {
            const Drag = Draggable.create("#left-side-pitch", {
                type: "y",
                bounds: '.mixer svg g g#prefix__Layer_1 g#prefix__Pitch-2 .prefix__cls-4',
                onDrag: () => {
                    const size = Math.round(Math.abs(Drag[0].minY) + Drag[0].maxY);
                    let position = (((Drag[0].y) / size * 1.5) + 1).toFixed(2);
                    if (position < 0.05) position = 0.05;
                    if (position > 1.95) position = 2;
                    const wavesurfer = store.getState().musicOnTheLeft.musicOnTheLeft;
                    wavesurfer.setPlaybackRate(position);
                    let newBpm = Math.round(store.getState().bpmLeft.bpmLeft * position)
                    document.getElementById('bpmleft').innerHTML = newBpm;
                    store.dispatch(changeLeftPitchLevel({ leftPitchLevel: position }))
                }
            })
        }
    }
}

export default connect (mapStateToProps)(PitchLeft);