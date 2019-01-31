import React, { Component } from 'react';
import MixerStructure from "./MixerStructure";
import buttonsList from "../buttonsList";
import "../Styles/Mixer.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MixerStructure mixcontrols={buttonsList} />
      </div>
    );
  }
}

export default App;
