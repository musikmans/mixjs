import React from "react";
import MixerElements from "./MixerElements";
import SvgComponent from './SvgComponent'

const MixerStructure = (props) => {
    return (
        <main>
            <div class="console-container">
                {props.mixcontrols.map(mixcontrol => (
                <MixerElements {...mixcontrol} />
                )
                )}
                <div class="mixer">
                <SvgComponent />
                </div>
            </div>
        </main>
    );
}



export default MixerStructure;