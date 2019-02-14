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

class MixerStructure extends Component {
  render () {
    return (
      <main>
        <div className="console-container">
          <ReactOrientation type="landscape" />
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
            imageId="vinyl-disc-left"
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
            side="left"
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
            imageId="vinyl-disc-right"
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
            side="right"
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
          <div className="mixer">
            <MixerComponent />
          </div>
        </div>
      </main>
    );
  }
}

export default MixerStructure;
