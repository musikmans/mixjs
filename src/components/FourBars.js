import React, { Component } from "react"

class FourBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activated: false, 
          img: "Assets/four_bars_inactive.svg",
          componentId: props.componentId,
          componentClass: props.componentClass
        };
    }

    render() {
        return (
            <div id={`${this.state.componentId}`} className={`${this.state.componentClass}`}>
                <img
                src={this.state.img}
                onMouseDown={() => {
                    this.setState({
                    img: "Assets/four_bars_pressed.svg"
                    })
                }}

                onMouseUp={() => {
                    if (!this.state.activated) {
                        this.setState({
                        img: "Assets/four_bars_active.svg",
                        activated: true
                        })
                        console.log("Four Bars Loop Activated")
                    } else {
                        this.setState({
                        img: "Assets/four_bars_inactive.svg",
                        activated: false
                        })
                        console.log("Four Bars Loop Desctivated")
                    }
                }}

                alt="Loop four bar"
                />
                
            </div>
        );
    }
}

export default FourBars;