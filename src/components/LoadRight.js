import React, { Component } from "react"
import { store } from "../store";
import WaveSurfer from 'wavesurfer.js';
import detect from 'bpm-detective';
import { store_music_data_right, change_vinyl_art_right, wave_music_right, set_bpm_right, load_music_right, change_controls_right } from "../actions";
import { connect } from 'react-redux';
import FileDrop from 'react-file-drop'

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
    handleDrop = (files) => {
        /// If there's a track, we destroy it
        if (store.getState().musicOnTheRight.musicOnTheRight) {
            const track = store.getState().musicOnTheRight.musicOnTheRight;
            track.destroy();
            store.dispatch(wave_music_right({ musicOnTheRight: '' }));
            store.dispatch(set_bpm_right({ bpmRight: '' }));
            store.dispatch(load_music_right({ isLoadedRight: false }))
            store.dispatch(change_controls_right({ controls_right: "ejected" }))
        }
        // We make sure there's only one file...
        if (files.length>1) {
            window.alert("You can only add one file at the time");
            files=[];
            return;
        }
        // ...and this file is an MP3
        const extension = files[0].name.slice(-4).toLowerCase();
        if (extension!==".mp3") {
            window.alert("You can only add MP3 files");
            files=[];
            return;
        }

        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let context = new AudioContext();
        // Create a blob with the MP3
        const blob = new Blob(files, { type: "audio/mp3" });
        const theURL = URL.createObjectURL(blob);

        // Fetch the BPM
        fetch(theURL)
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
                    } catch (err) {
                        console.error(err);
                    }
                });
        
        // Here's we get the track ID3 Metadata
        var jsmediatags = require("jsmediatags");

        jsmediatags.read(blob, {
            onSuccess: function (tag) {
                store.dispatch(store_music_data_right({ id3Right: tag }));
            }
        });

        // Initialize new track
        const vol = Math.round(store.getState().volume_right.volume_right);
        let wavesurfer2 = WaveSurfer.create({
            container: '#rightwave',
            waveColor: 'red',
            progressColor: '#c7c704',
            barWidth: '5',
            barHeight: '2',
            setVolume: `${vol}`
        });
        wavesurfer2.load(theURL);
        wavesurfer2.setVolume(vol);
        wavesurfer2.zoom(80);
        store.dispatch(wave_music_right({ musicOnTheRight: wavesurfer2 }));
        store.dispatch(load_music_right({ isLoadedRight: true }))
        store.dispatch(change_controls_right({ controls_right: "stop" }))
      }
      render() {
        return (
          <div id="react-file-drop-right" className="react-file-drop-right">
            <FileDrop onDrop={this.handleDrop}>
            </FileDrop>
          </div>
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