import React, { Component } from "react"

class Rewind extends Component {
    constructor(props) {
        super(props);
        this.state = {
          backward: false, 
          img: "Assets/rew_inactive.svg",
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
                    img: "Assets/rew_pressed.svg",
                    backward: true
                    })
                    console.log("Backward")
                }}

                onMouseUp={() => {
                        this.setState({
                        img: "Assets/rew_inactive.svg",
                        backward: false
                        })
                }}

                alt="Rewind"
                />
                
            </div>
        );
    }
}

export default Rewind;