import React, { Component } from "react"
import { store } from "../store";
import WaveSurfer from 'wavesurfer.js';
import detect from 'bpm-detective';
import { store_music_data_left, change_vinyl_art_left, wave_music_left, set_bpm_left, load_music_left, change_controls_left } from "../actions";
import { connect } from 'react-redux';
import FileDrop from 'react-file-drop'

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
    handleDrop = (files) => {
        /// If there's a track, we destroy it
        if (store.getState().musicOnTheLeft.musicOnTheLeft) {
            const track = store.getState().musicOnTheLeft.musicOnTheLeft;
            track.destroy();
            store.dispatch(wave_music_left({ musicOnTheLeft: '' }));
            store.dispatch(set_bpm_left({ bpmLeft: '' }));
            store.dispatch(load_music_left({ isLoadedLeft: false }))
            store.dispatch(change_controls_left({ controls_left: "ejected" }))
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
                        store.dispatch(set_bpm_left({ bpmLeft: bpm }));
                    } catch (err) {
                        console.error(err);
                    }
                });
        
        // Here's we get the track ID3 Metadata
        var jsmediatags = require("jsmediatags");

        jsmediatags.read(blob, {
            onSuccess: function (tag) {
                store.dispatch(store_music_data_left({ id3Left: tag }));
            }
        });

        // Initialize new track
        const vol = Math.round(store.getState().volume_left.volume_left);
        let wavesurfer = WaveSurfer.create({
            container: '#leftwave',
            waveColor: 'red',
            progressColor: '#c7c704',
            barWidth: '5',
            barHeight: '2',
            setVolume: `${vol}`
        });
        wavesurfer.load(theURL);
        wavesurfer.setVolume(vol);
        wavesurfer.zoom(80);
        store.dispatch(wave_music_left({ musicOnTheLeft: wavesurfer }));
        store.dispatch(load_music_left({ isLoadedLeft: true }))
        store.dispatch(change_controls_left({ controls_left: "stop" }))
      }
      render() {
        return (
          <div id="react-file-drop-left" className="react-file-drop-left">
            <FileDrop onDrop={this.handleDrop}>
            </FileDrop>
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