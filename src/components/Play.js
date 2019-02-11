import React, { Component } from "react"

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: "inactive", 
          img: "Assets/play_inactive.svg",
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
                    img: "Assets/play_pressed.svg"
                    })
                }}

                onMouseUp={() => {
                    if (this.state.status==="inactive" || this.state.status==="pause") {
                        this.setState({
                        img: "Assets/play_active.svg",
                        status: "play"
                        })
                        console.log("Play Music")
                    }   else if (this.state.status==="play"){
                        this.setState({
                        img: "Assets/play_inactive.svg",
                        status: "pause"
                        })
                        console.log("Pause music")
                    }
                }}

                alt="Play button"
                />
                
            </div>
        );
    }
}

export default Play;