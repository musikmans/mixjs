import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { PhotoshopPicker } from 'react-color'

function shadeHexColor(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {

        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'light';
    }
    else {

        return 'dark';
    }
}

class ColorChooser extends Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '186',
            g: '13',
            b: '13',
            a: '1',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
        document.querySelector('#prefix__theConsole path').style.fill = color.hex;
        const spinners = document.querySelectorAll('.spinner');
        [].forEach.call(spinners, (element) => {
            element.style.fill = color.hex;
        });
        let shadow = shadeHexColor(color.hex, -0.3);
        document.querySelector('#prefix__Console path').style.fill = shadow;
        let tint = lightOrDark(color.hex);
        console.log(tint)
        if (tint === 'dark') {
            const logos = document.querySelectorAll('.prefix__cls-8');
            [].forEach.call(logos, (element) => {
                element.style.fill = '#fff';
            });
            const logosin = document.querySelectorAll('.prefix__cls-10');
            [].forEach.call(logosin, (element) => {
                element.style.fill = '#fff';
            });
            const text = document.querySelectorAll('.prefix__cls-5');
            [].forEach.call(text, (element) => {
                element.style.fill = '#fff';
            }); 
            const text2 = document.querySelectorAll('.prefix__cls-4');
            [].forEach.call(text2, (element) => {
                element.style.stroke = '#fff';
            }); 
            const text3 = document.querySelectorAll('.prefix__cls-7');
            [].forEach.call(text3, (element) => {
                element.style.stroke = '#fff';
            });    
            document.querySelector('.color-selector').style.color = '#fff';

        } else {
            const logos = document.querySelectorAll('.prefix__cls-8');
            [].forEach.call(logos, (element) => {
                element.style.fill = '#000';
            });
            const logosin = document.querySelectorAll('.prefix__cls-10');
            [].forEach.call(logosin, (element) => {
                element.style.fill = '#000';
            });
            const text = document.querySelectorAll('.prefix__cls-5');
            [].forEach.call(text, (element) => {
                element.style.fill = '#000';
            }); 
            const text2 = document.querySelectorAll('.prefix__cls-4');
            [].forEach.call(text2, (element) => {
                element.style.stroke = '#000';
            }); 
            const text3 = document.querySelectorAll('.prefix__cls-7');
            [].forEach.call(text3, (element) => {
                element.style.stroke = '#000';
            }); 
            document.querySelector('.color-selector').style.color = '#000';
        }
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '3vh',
                    height: '1.4vh',
                    borderRadius: '0.1vh',
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
                },
                swatch: {
                    padding: '2px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div className="color-selector">Choose The mixer color:&nbsp;
        <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                </div>
                {this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <PhotoshopPicker color={this.state.color} onChange={this.handleChange} />
                </div> : null}

            </div>
        )
    }
}

export default ColorChooser;