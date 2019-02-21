import React, { Component } from "react"
import { store } from "../store";
import WaveSurfer from 'wavesurfer.js';
import detect from 'bpm-detective';
import { store_music_data_right, change_vinyl_art_right, wave_music_right, set_bpm_right, load_music_right, change_controls_right } from "../actions";
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'
import classNames from 'classnames'

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
    onDrop = (acceptedFiles, rejectedFiles) => {
        /// If there's a track, we destroy it
        if (store.getState().musicOnTheRight.musicOnTheRight) {
            const track = store.getState().musicOnTheRight.musicOnTheRight;
            track.destroy();
            store.dispatch(wave_music_right({ musicOnTheRight: '' }));
            store.dispatch(set_bpm_right({ bpmRight: '' }));
            store.dispatch(load_music_right({ isLoadedRight: false }))
            store.dispatch(change_controls_right({ controls_right: "ejected" }))
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
                        store.dispatch(set_bpm_right({ bpmRight: bpm }));
                        console.log(store.getState().bpmRight.bpmRight)
                    } catch (err) {
                        console.error(err);
                    }
                });
        }

        // Get Track ID3
        var jsmediatags = require("jsmediatags");

        jsmediatags.read(blob, {
            onSuccess: function (tag) {
                store.dispatch(store_music_data_right({ id3Right: tag }));
            }
        });

        // Initialize new track
        let wavesurfer2 = WaveSurfer.create({
            container: '#rightwave',
            waveColor: 'red',
            progressColor: '#c7c704',
            barWidth: '5',
            barHeight: '2',
        });
        wavesurfer2.loadBlob(blob);
        wavesurfer2.zoom(80);
        store.dispatch(wave_music_right({ musicOnTheRight: wavesurfer2 }));
        store.dispatch(load_music_right({ isLoadedRight: true }))
        store.dispatch(change_controls_right({ controls_right: "stop" }))
    }
    render() {
        return (
            <div id="loadright" className="loadright">
                <Dropzone onDrop={this.onDrop} accept="audio/mp3">
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div
                                {...getRootProps()}
                                className={classNames('dropzone', { 'dropzone--isActive': isDragActive })} style={{ padding: '-22px', margin: '-27px' }}
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
        if (prevProps.id3Right !== this.props.id3Right) {
            console.log(this.props.id3Right.tags)
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