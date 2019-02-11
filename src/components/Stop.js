import React, { Component } from "react"

class Stop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          musicStop: true, 
          img: "Assets/stop_inactive.svg",
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
                    img: "Assets/stop_pressed.svg"
                    })
                }}

                onMouseUp={() => {
                    if (!this.state.musicStop) {
                        this.setState({
                        img: "Assets/stop_inactive.svg",
                        musicStop: true
                        })
                        console.log("Stop")
                    } else {
                        this.setState({
                            img: "Assets/stop_inactive.svg",
                        })
                    }
                }}

                alt="Stop button "
                />
                
            </div>
        );
    }
}

export default Stop;