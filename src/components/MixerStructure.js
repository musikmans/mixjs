import React, {Component} from 'react';
import MixerComponent from './MixerComponent';
import ReactOrientation from 'react-orientation';
import PitchLeft from './PitchLeft';
import Eject from './Eject';
import Rewind from './Rewind';
import Stop from './Stop';
import Play from './Play';
import FastForward from './FastForward';
import OneBar from './OneBar';
import FourBars from './FourBars';
import EightBars from './EightBars';
import SixteenBars from './SixteenBars';
import PitchRight from './PitchRight';
import CrossFader from './CrossFader';
import KnobPanning from './KnobPanning';
import KnobVolume from './KnobVolume';
import TurnTables from './TurnTables';
import TimeTextLeft from './TimeTextLeft';
import BpmLeft from './BpmLeft';
import {store} from '../store';
import { store_music_data_left, change_vinyl_art_left, wave_music_left, set_bpm_left } from "../actions";
import {connect} from 'react-redux';
import WaveSurfer from 'wavesurfer.js';
import detect from 'bpm-detective';

let file = 'http://localhost:5000/music/1. Ciree - Imagination.mp3'
 
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
      store.dispatch(set_bpm_left({bpmLeft: bpm}));
      console.log(store.getState().bpmLeft.bpmLeft)
    } catch (err) {
      console.error(err);
    }
  });

var jsmediatags = require("jsmediatags");

jsmediatags.read(file, {
  onSuccess: function(tag) {
    store.dispatch(store_music_data_left({id3Left: tag}));
  }
});

const mapStateToProps = state => ({
  id3Left: state.id3Left.id3Left,
});

function _arrayBufferToBase64(buffer) {
  var binary = '';
  var bytes = new Uint8Array (buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode (bytes[i]);
  }
  return window.btoa (binary);
}

class MixerStructure extends Component {
  componentDidMount() {
    let wavesurfer = WaveSurfer.create({
      container: '#leftwave',
      waveColor: 'red',
      progressColor: '#c7c704',
      responsive: true,
      barWidth: '5',
      barHeight: '3'
    });
    wavesurfer.load(file);
    wavesurfer.zoom(80);
    store.dispatch(wave_music_left({musicOnTheLeft: wavesurfer}));
  }

  render () {
    return (
      <main>
        <div className="console-container">
          <ReactOrientation type="landscape" />
          <TimeTextLeft />
          <BpmLeft />
          <KnobVolume
            imageId="knob-volume-left"
            componentId="vol-1"
            componentClass="vol-1"
          />
          <PitchLeft />
          <KnobVolume
            imageId="knob-delay-left"
            componentId="fx-delay-1"
            componentClass="fx-left"
          />
          <KnobVolume
            imageId="knob-reverb-left"
            componentId="fx-reverb-1"
            componentClass="fx-left"
          />
          <KnobPanning
            imageId="knob-pan-left"
            componentId="fx-pan-1"
            componentClass="fx-left"
          />
          <KnobVolume
            imageId="knob-lpf-left"
            componentId="fx-lpf-1"
            componentClass="fx-left"
          />
          <KnobVolume
            imageId="knob-hpf-left"
            componentId="fx-hpf-1"
            componentClass="fx-left"
          />
          <TurnTables
            imageid="vinyl-disc-left"
            componentId="vinyl-left"
            componentClass="vinyl-left"
          />
          <Eject componentId="eject-left" componentClass="controls-left" />
          <Rewind componentId="rew-left" componentClass="controls-left" />
          <Stop componentId="stop-left" componentClass="controls-left" />
          <Play componentId="play-left" componentClass="controls-left" />
          <FastForward componentId="ff-left" componentClass="controls-left" />
          <OneBar
            componentId="loop-one-left"
            componentClass="controls-left"
          />
          <FourBars
            componentId="loop-four-left"
            componentClass="controls-left"
          />
          <EightBars
            componentId="loop-eight-left"
            componentClass="controls-left"
          />
          <SixteenBars
            componentId="loop-sixteen-left"
            componentClass="controls-left"
          />
          <KnobVolume
            imageId="knob-volume-right"
            componentId="vol-2"
            componentClass="vol-2"
          />
          <PitchRight />
          <KnobVolume
            imageId="knob-delay-right"
            componentId="fx-delay-2"
            componentClass="fx-right"
          />
          <KnobVolume
            imageId="knob-reverb-right"
            componentId="fx-reverb-2"
            componentClass="fx-right"
          />
          <KnobPanning
            imageId="knob-pan-right"
            componentId="fx-pan-2"
            componentClass="fx-right"
          />
          <KnobVolume
            imageId="knob-lpf-right"
            componentId="fx-lpf-2"
            componentClass="fx-right"
          />
          <KnobVolume
            imageId="knob-hpf-right"
            componentId="fx-hpf-2"
            componentClass="fx-right"
          />
          <TurnTables
            imageid="vinyl-disc-right"
            componentId="vinyl-right"
            componentClass="vinyl-right"
          />
          <Eject componentId="eject-right" componentClass="controls-right" />
          <Rewind componentId="rew-right" componentClass="controls-right" />
          <Stop componentId="stop-right" componentClass="controls-right" />
          <Play componentId="play-right" componentClass="controls-right" />
          <FastForward componentId="ff-right" componentClass="controls-right" />
          <OneBar
            componentId="loop-one-right"
            componentClass="controls-right"
          />
          <FourBars
            componentId="loop-four-right"
            componentClass="controls-right"
          />
          <EightBars
            componentId="loop-eight-right"
            componentClass="controls-right"
          />
          <SixteenBars
            componentId="loop-sixteen-right"
            componentClass="controls-right"
          />
          <CrossFader />
          <div id="leftwave"></div>
          <div className="mixer">
            <MixerComponent />
          </div>
        </div>
      </main>
    );
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.id3Left !== this.props.id3Left) {
      if (this.props.id3Left.tags.picture===undefined) {
        store.dispatch (change_vinyl_art_left({vinyl_art_left: "Assets/404.jpg"}));
      } else {
        const data=`data:image/jpeg;base64,${_arrayBufferToBase64(this.props.id3Left.tags.picture.data)}`
        store.dispatch (change_vinyl_art_left({vinyl_art_left: data}));
      }
      // data:image/jpeg;base64,_arrayBufferToBase64(this.props.id3Left.tags.picture.data)
      // console.log(this.props.id3Left.tags.picture.data)
      // store.dispatch (change_vinyl_art_left({vinyl_art_left: this.props.id3Left.tags.picture.data}));
    }
  }
}

export default connect (mapStateToProps) (MixerStructure);
