import React, { Component } from "react"
import { Draggable } from "gsap/Draggable"
import { store } from "../store";
import { changeRightPitchLevel } from "../actions";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isLoadedRight: state.isLoadedRight.isLoadedRight,
});

class PitchRight extends Component {

    render() {
        return (
            <div id="fader-pitch-right" className="fader-pitch-right">
                <img id="right-side-pitch" src="Assets/fader_right.svg" alt="Pitch fader on right side" />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isLoadedRight !== this.props.isLoadedRight && this.props.isLoadedRight===true) {
            const Drag = Draggable.create("#right-side-pitch", {
                type: "y",
                bounds: '.mixer svg g g#prefix__Layer_1 g#prefix__Pitch-2 .prefix__cls-4',
                onDrag: () => {
                    const size = Math.round(Math.abs(Drag[0].minY) + Drag[0].maxY);
                    let position = (((Drag[0].y) / size * 1.5) + 1).toFixed(2);
                    if (position < 0.05) position = 0.05;
                    if (position > 1.95) position = 2;
                    const wavesurfer = store.getState().musicOnTheRight.musicOnTheRight;
                    wavesurfer.setPlaybackRate(position);
                    let newBpm = Math.round(store.getState().bpmRight.bpmRight * position)
                    document.getElementById('bpmright').innerHTML = newBpm;
                    store.dispatch(changeRightPitchLevel({ rightPitchLevel: position }))
                    console.log(store.getState().rightPitchLevel)
                }
            })
        }
    }
}

export default connect(mapStateToProps)(PitchRight);