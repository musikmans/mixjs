import React, { Component } from "react"
import { SwatchesPicker } from 'react-color';

class ColorChooser extends Component {

  handleChange(color, event) {
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  }

  render() {
    return <div className="color-selector">
    <SwatchesPicker onChange={ this.handleChange } />
    </div>;
  }
}