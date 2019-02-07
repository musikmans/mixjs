import React, { Component } from "react"

class EightBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activated: false, 
          img: "Assets/eight_bars_inactive.svg",
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
                    img: "Assets/eight_bars_pressed.svg"
                    })
                }}

                onMouseUp={() => {
                    if (!this.state.activated) {
                        this.setState({
                        img: "Assets/eight_bars_active.svg",
                        activated: true
                        })
                        console.log("Eight Bars Loop Activated")
                    } else {
                        this.setState({
                        img: "Assets/eight_bars_inactive.svg",
                        activated: false
                        })
                        console.log("Eight Bars Loop Desctivated")
                    }
                }}

                alt="Loop eight bar"
                />
                
            </div>
        );
    }
}

export default EightBars;