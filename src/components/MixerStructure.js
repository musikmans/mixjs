import React, { Component } from "react";
import MixerComponent from './MixerComponent'
import ReactOrientation from 'react-orientation';
import PitchLeft from "./PitchLeft";
import EjectLeft from "./EjectLeft";
import RewLeft from "./RewLeft";
import StopLeft from "./StopLeft";
import PlayLeft from "./PlayLeft";
import FfLeft from "./FfLeft";
import OneBar from "./OneBar";
import FourBars from "./FourBars";
import EightBars from "./EightBars";
import SixteenBars from "./SixteenBars";
import PitchRight from "./PitchRight";
import EjectRight from "./EjectRight";
import RewRight from "./RewRight";
import StopRight from "./StopRight";
import PlayRight from "./PlayRight";
import FfRight from "./FfRight";
import CrossFader from "./CrossFader";
import KnobPanning from "./KnobPanning";
import KnobVolume from "./KnobVolume";
import TurnTables from "./TurnTables";

class MixerStructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        };
    }

    componentDidMount() {
          this.setState({
            loading: false
          });
    }

    render() {
        if (this.state.loading) {
            return (
              <main>
                <h2>Loading...</h2>
              </main>
            );
        }

        const vinyl1="https://www.hrrshop.de/bilder/produkte/normal/IRON-MAIDEN-The-Book-of-Souls-Live-Chapter-3LP.jpg";
        const anotherVinyl="https://i.ebayimg.com/images/g/0NUAAOSwVZ5bzGp6/s-l640.png";
        return (
            <main>
                <div className="console-container">
                    <ReactOrientation type="landscape" />
                    <KnobVolume imageId="knob-volume-left" componentId="vol-1" componentClass="vol-1" />
                    <PitchLeft />
                    <KnobVolume imageId="knob-delay-left" componentId="fx-delay-1" componentClass="fx-left" />
                    <KnobVolume imageId="knob-reverb-left" componentId="fx-reverb-1" componentClass="fx-left" />
                    <KnobPanning imageId="knob-pan-left" componentId="fx-pan-1" componentClass="fx-left" />
                    <KnobVolume imageId="knob-lpf-left" componentId="fx-lpf-1" componentClass="fx-left" />
                    <KnobVolume imageId="knob-hpf-left" componentId="fx-hpf-1" componentClass="fx-left" />
                    <TurnTables imageId="vinyl-disc-left" componentId="vinyl-left" componentClass="vinyl-left" artwork={vinyl1} artworkid="img1" />
                    <EjectLeft />
                    <RewLeft />
                    <StopLeft />
                    <PlayLeft />
                    <FfLeft />
                    <OneBar componentId="loop-one-left" componentClass="controls-left" />
                    <FourBars componentId="loop-four-left" componentClass="controls-left" />
                    <EightBars componentId="loop-eight-left" componentClass="controls-left" />
                    <SixteenBars componentId="loop-sixteen-left" componentClass="controls-left" />
                    <KnobVolume imageId="knob-volume-right" componentId="vol-2" componentClass="vol-2" />
                    <PitchRight />
                    <KnobVolume imageId="knob-delay-right" componentId="fx-delay-2" componentClass="fx-right" />
                    <KnobVolume imageId="knob-reverb-right" componentId="fx-reverb-2" componentClass="fx-right" />
                    <KnobPanning imageId="knob-pan-right" componentId="fx-pan-2" componentClass="fx-right" />
                    <KnobVolume imageId="knob-lpf-right" componentId="fx-lpf-2" componentClass="fx-right" />
                    <KnobVolume imageId="knob-hpf-right" componentId="fx-hpf-2" componentClass="fx-right" />
                    <TurnTables imageId="vinyl-disc-right" componentId="vinyl-right" componentClass="vinyl-right" artwork={anotherVinyl} artworkid="img2" />
                    <EjectRight />
                    <RewRight />
                    <StopRight />
                    <PlayRight />
                    <FfRight />
                    <OneBar componentId="loop-one-right" componentClass="controls-right" />
                    <FourBars componentId="loop-four-right" componentClass="controls-right" />
                    <EightBars componentId="loop-eight-right" componentClass="controls-right" />
                    <SixteenBars componentId="loop-sixteen-right" componentClass="controls-right" />
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