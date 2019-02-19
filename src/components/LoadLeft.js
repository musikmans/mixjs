import React, { Component } from "react"
import { store } from "../store";
import WaveSurfer from 'wavesurfer.js/dist/wavesurfer.min';
import detect from 'bpm-detective';
import { store_music_data_left, change_vinyl_art_left, wave_music_left, set_bpm_left } from "../actions";
import { connect } from 'react-redux';

let file = 'http://localhost:5000/music/Venetica - Catalina\'s Riddle (Pierre Pienaar Remix).mp3'

const AudioContext = window.AudioContext || window.webkitAudioContext;
let context = new AudioContext();

// Fetch some audio file
fetch(file)
    // Get response as ArrayBuffer
    .then(response => response.arrayBuffer())
    .then(buffer => {
        // Decode audio into an AudioBuffer
        return new Promise((resolve, reject) => {
            context.decodeAudioData(buffer, resolve, reject);
        });
    })
    // Run detection
    .then(buffer => {
        try {
            const bpm = detect(buffer);
            store.dispatch(set_bpm_left({ bpmLeft: bpm }));
            console.log(store.getState().bpmLeft.bpmLeft)
        } catch (err) {
            console.error(err);
        }
    });

var jsmediatags = require("jsmediatags");

jsmediatags.read(file, {
    onSuccess: function (tag) {
        store.dispatch(store_music_data_left({ id3Left: tag }));
    }
});

const mapStateToProps = state => ({
    id3Left: state.id3Left.id3Left,
});

function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

class LoadLeft extends Component {
    componentDidMount() {
        let wavesurfer = WaveSurfer.create({
            container: '#leftwave',
            waveColor: 'red',
            progressColor: '#c7c704',
            barWidth: '5',
            barHeight: '2',
        });
        wavesurfer.load(file);
        wavesurfer.zoom(80);
        store.dispatch(wave_music_left({ musicOnTheLeft: wavesurfer }));
    }
    render() {
        return (
            <div id="loadleft" className="loadleft">LOAD MUSIC
        </div>
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id3Left !== this.props.id3Left) {
            if (this.props.id3Left.tags.picture === undefined) {
                store.dispatch(change_vinyl_art_left({ vinyl_art_left: "Assets/404.jpg" }));
            } else {
                const data = `data:image/jpeg;base64,${_arrayBufferToBase64(this.props.id3Left.tags.picture.data)}`
                store.dispatch(change_vinyl_art_left({ vinyl_art_left: data }));
            }
        }
    }
}

export default connect(mapStateToProps)(LoadLeft);