import React, { Component } from "react"
import { store } from "../store";
import WaveSurfer from 'wavesurfer.js/dist/wavesurfer.min';
import detect from 'bpm-detective';
import { store_music_data_right, change_vinyl_art_right, wave_music_right, set_bpm_right, load_music_right } from "../actions";
import { connect } from 'react-redux';

let file = 'http://localhost:5000/music/1. Adam Schofield - Anxious (Original Mix).mp3'

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
            store.dispatch(set_bpm_right({ bpmRight: bpm }));
            console.log(store.getState().bpmRight.bpmRight)
        } catch (err) {
            console.error(err);
        }
    });

var jsmediatags = require("jsmediatags");

jsmediatags.read(file, {
    onSuccess: function (tag) {
        store.dispatch(store_music_data_right({ id3Right: tag }));
    }
});

const mapStateToProps = state => ({
    id3Right: state.id3Right.id3Right,
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

class LoadRight extends Component {
    componentDidMount() {
        let wavesurfer2 = WaveSurfer.create({
            container: '#rightwave',
            waveColor: 'red',
            progressColor: '#c7c704',
            barWidth: '5',
            barHeight: '2',
        });
        wavesurfer2.load(file);
        wavesurfer2.zoom(80);
        store.dispatch(wave_music_right({ musicOnTheRight: wavesurfer2 }));
        store.dispatch(load_music_right({ isLoadedRight: true }))
    }
    render() {
        return (
            <div id="loadright" className="loadright">LOAD MUSIC</div>
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id3Right !== this.props.id3Right) {
            if (this.props.id3Right.tags.picture === undefined) {
                store.dispatch(change_vinyl_art_right({ vinyl_art_right: "Assets/404.jpg" }));
            } else {
                const data = `data:image/jpeg;base64,${_arrayBufferToBase64(this.props.id3Right.tags.picture.data)}`
                store.dispatch(change_vinyl_art_right({ vinyl_art_right: data }));
            }
        }
    }
}

export default connect(mapStateToProps)(LoadRight);