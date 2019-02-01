import React, { Component } from "react";
import MixerComponent from './MixerComponent'
import ReactOrientation from 'react-orientation';
import VolumeLeft from "./VolumeLeft";
import PitchLeft from "./PitchLeft";
import DelayLeft from "./DelayLeft";
import ReverbLeft from "./ReverbLeft";
import PanLeft from "./PanLeft";
import LowPassLeft from "./LowPassLeft";
import HighPassLeft from "./HighPassLeft";
import VinylLeft from "./VinylLeft";
import EjectLeft from "./EjectLeft";
import RewLeft from "./RewLeft";
import StopLeft from "./StopLeft";
import PlayLeft from "./PlayLeft";
import FfLeft from "./FfLeft";
import OneBarLeft from "./OneBarLeft";
import FourBarsLeft from "./FourBarsLeft";
import EightBarsLeft from "./EightBarsLeft";
import SixteenBarsLeft from "./SixteenBarsLeft";
import VolumeRight from "./VolumeRight";
import PitchRight from "./PitchRight";
import DelayRight from "./DelayRight";
import ReverbRight from "./ReverbRight";
import PanRight from "./PanRight";
import LowPassRight from "./LowPassRight";
import HighPassRight from "./HighPassRight";
import VinylRight from "./VinylRight";
import EjectRight from "./EjectRight";
import RewRight from "./RewRight";
import StopRight from "./StopRight";
import PlayRight from "./PlayRight";
import FfRight from "./FfRight";
import OneBarRight from "./OneBarRight";
import FourBarsRight from "./FourBarsRight";
import EightBarsRight from "./EightBarsRight";
import SixteenBarsRight from "./SixteenBarsRight";
import CrossFader from "./CrossFader";

class MixerStructure extends Component {
    render() {
        return (
            <main>
                <div className="console-container">
                    <ReactOrientation type="landscape" />
                    <VolumeLeft />
                    <PitchLeft />
                    <DelayLeft />
                    <ReverbLeft />
                    <PanLeft />
                    <LowPassLeft />
                    <HighPassLeft />
                    <VinylLeft />
                    <EjectLeft />
                    <RewLeft />
                    <StopLeft />
                    <PlayLeft />
                    <FfLeft />
                    <OneBarLeft />
                    <FourBarsLeft />
                    <EightBarsLeft />
                    <SixteenBarsLeft />
                    <VolumeRight />
                    <PitchRight />
                    <DelayRight />
                    <ReverbRight />
                    <PanRight />
                    <LowPassRight />
                    <HighPassRight />
                    <VinylRight />
                    <EjectRight />
                    <RewRight />
                    <StopRight />
                    <PlayRight />
                    <FfRight />
                    <OneBarRight />
                    <FourBarsRight />
                    <EightBarsRight />
                    <SixteenBarsRight />
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