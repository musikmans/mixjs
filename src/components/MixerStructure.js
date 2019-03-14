import React, { Component } from 'react';
import MixerComponent from './MixerComponent';
import PitchLeft from './PitchLeft';
import Eject from './Eject';
import EjectTrack from './EjectTrack'
import Rewind from './Rewind';
import RewindRight from './RewindRight';
import Stop from './Stop';
import StopRight from './StopRight';
import Play from './Play';
import PlayRight from './PlayRight';
import FastForward from './FastForward';
import FastForwardRight from './FastForwardRight';
import OneBar from './OneBar';
import OneBarRight from './OneBarRight';
import TwoBars from './TwoBars';
import TwoBarsRight from './TwoBarsRight';
import FourBars from './FourBars';
import FourBarsRight from './FourBarsRight';
import EightBars from './EightBars';
import EightBarsRight from './EightBarsRight';
import PitchRight from './PitchRight';
import CrossFader from './CrossFader';
import KnobPanning from './KnobPanning';
import KnobPanningRight from './KnobPanningRight';
import LoadLeft from './LoadLeft';
import FxDelay from './FxDelay';
import FxDelayRight from './FxDelayRight';
import FxDistortion from './FxDistortion';
import FxDistortionRight from './FxDistortionRight';
import KnobLpf from './KnobLpf';
import KnobLpfRight from './KnobLpfRight';
import KnobHpf from './KnobHpf';
import KnobHpfRight from './KnobHpfRight';
import TurnTables from './TurnTables';
import TurnTablesRight from './TurnTablesRight';
import TimeTextLeft from './TimeTextLeft';
import TimeTextRight from './TimeTextRight';
import BpmLeft from './BpmLeft';
import BpmRight from './BpmRight';
import Landscape from './Landscape';
import ColorChooser from './ColorChooser';
import { store } from "../store";
import { load_music_left, load_music_right, change_vinyl_art_left, change_vinyl_art_right, change_volume_left, change_volume_right } from '../actions';
import LoadRight from './LoadRight';

class MixerStructure extends Component {
  componentDidMount() {
    const logos = document.querySelectorAll('.prefix__cls-8');
    [].forEach.call(logos, (element) => {
      element.style.fill = '#fff';
    });
    const logosin = document.querySelectorAll('.prefix__cls-10');
    [].forEach.call(logosin, (element) => {
      element.style.fill = '#fff';
    });
  }

  render() {
    store.dispatch(load_music_left({ isLoadedLeft: false }))
    store.dispatch(load_music_right({ isLoadedRight: false }))
    store.dispatch(change_vinyl_art_left({ vinyl_art_left: "Assets/drop.jpg" }));
    store.dispatch(change_vinyl_art_right({ vinyl_art_right: "Assets/drop.jpg" }));
    store.dispatch(change_volume_left({ volume_left: 1 }))
    store.dispatch(change_volume_right({ volume_right: 1 }))
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
          <FxDelay />
          <FxDistortion />
          <KnobPanning />
          <KnobLpf />
          <KnobHpf />
          <TurnTables/>
          <Eject />
          <Rewind />
          <Stop />
          <Play />
          <FastForward />
          <OneBar />
          <TwoBars />
          <FourBars />
          <EightBars />
          <PitchRight />
          <FxDelayRight />
          <FxDistortionRight />
          <KnobPanningRight/>
          <KnobLpfRight />
          <KnobHpfRight />
          <TurnTablesRight />
          <EjectTrack />
          <RewindRight />
          <StopRight />
          <PlayRight />
          <FastForwardRight />
          <OneBarRight />
          <TwoBarsRight />
          <FourBarsRight />
          <EightBarsRight />
          <CrossFader />
          <div id="leftwave"></div>
          <div id="rightwave"></div>
          <ColorChooser />
          <div className="mixer">
            <MixerComponent />
          </div>
        </div>
      </main>
    );
  }
}

export default MixerStructure;
