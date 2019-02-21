import React, {Component} from 'react';
import MixerComponent from './MixerComponent';
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
import LoadLeft from './LoadLeft';
import FxButton from './FxButton';
import KnobVolume from './KnobVolume';
import TurnTables from './TurnTables';
import TimeTextLeft from './TimeTextLeft';
import TimeTextRight from './TimeTextRight';
import BpmLeft from './BpmLeft';
import BpmRight from './BpmRight';
import LoadRight from './LoadRight';
import Landscape from './Landscape';
import { store } from "../store";
import { load_music_left, load_music_right, change_vinyl_art_left, change_vinyl_art_right } from '../actions';

class MixerStructure extends Component {
  render () {
    store.dispatch(load_music_left({ isLoadedLeft: false }))
    store.dispatch(load_music_right({ isLoadedRight: false }))
    store.dispatch(change_vinyl_art_left({ vinyl_art_left: "Assets/drop.jpg" }));
    store.dispatch(change_vinyl_art_right({ vinyl_art_right: "Assets/drop.jpg" }));
    return (
      <main>
        <div className="console-container">
          <Landscape />
          <LoadLeft />
          <LoadRight />
          <TimeTextLeft />
          <TimeTextRight />
          <BpmLeft />
          <BpmRight />
          <PitchLeft />
          <FxButton
            imageId="knob-delay-left"
            componentId="fx-delay-1"
            componentClass="fx-left"
          />
          <FxButton
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
          <PitchRight />
          <FxButton
            imageId="knob-delay-right"
            componentId="fx-delay-2"
            componentClass="fx-right"
          />
          <FxButton
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
          <div id="rightwave"></div>
          <div className="mixer">
            <MixerComponent />
          </div>
        </div>
      </main>
    );
  }
}

export default MixerStructure;
