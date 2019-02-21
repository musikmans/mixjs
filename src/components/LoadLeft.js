import React, { Component } from "react"
import { store } from "../store";
import WaveSurfer from 'wavesurfer.js';
import detect from 'bpm-detective';
import { store_music_data_left, change_vinyl_art_left, wave_music_left, set_bpm_left, load_music_left, change_controls_left } from "../actions";
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'
import classNames from 'classnames'

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
    onDrop = (acceptedFiles, rejectedFiles) => {
        /// If there's a track, we destroy it
        if (store.getState().musicOnTheLeft.musicOnTheLeft) {
            const track = store.getState().musicOnTheLeft.musicOnTheLeft;
            track.destroy();
            store.dispatch(wave_music_left({ musicOnTheLeft: '' }));
            store.dispatch(set_bpm_left({ bpmLeft: '' }));
            store.dispatch(load_music_left({ isLoadedLeft: false }))
            store.dispatch(change_controls_left({ controls_left: "ejected" }))
        }
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let context = new AudioContext();
        // We make sure there's only one MP3 (other file won't pass the filtering)
        const numOfFiles = acceptedFiles.length;
        if (numOfFiles > 1) {
            window.alert("You can only add one file at the time");
        }
        // Create a blob with the MP#
        const blob = new Blob(acceptedFiles, { type: "audio/mp3" })

        // Convert the file to base 64 in order to detech BPM
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
            const base64data = reader.result;
            // Fetch some audio file
            fetch(base64data)
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
        }

        // Get Track ID3
        var jsmediatags = require("jsmediatags");

        jsmediatags.read(blob, {
            onSuccess: function (tag) {
                store.dispatch(store_music_data_left({ id3Left: tag }));
            }
        });

        // Initialize new track
        let wavesurfer = WaveSurfer.create({
            container: '#leftwave',
            waveColor: 'red',
            progressColor: '#c7c704',
            barWidth: '5',
            barHeight: '2',
        });
        wavesurfer.loadBlob(blob);
        wavesurfer.zoom(80);
        store.dispatch(wave_music_left({ musicOnTheLeft: wavesurfer }));
        store.dispatch(load_music_left({ isLoadedLeft: true }))
        store.dispatch(change_controls_left({ controls_left: "stop" }))
    }
    render() {
        return (
            <div id="loadleft" className="loadleft">
                <Dropzone onDrop={this.onDrop} accept="audio/mp3">
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div
                                {...getRootProps()}
                                className={classNames('dropzone', { 'dropzone--isActive': isDragActive })}
                            >
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p></p> :
                                        <p></p>
                                }
                            </div>
                        )
                    }}
                </Dropzone>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id3Left !== this.props.id3Left) {
            console.log(this.props.id3Left.tags)
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