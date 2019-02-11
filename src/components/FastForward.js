import React, { Component } from "react"

class FastForward extends Component {
    constructor(props) {
        super(props);
        this.state = {
          forwarding: false, 
          img: "Assets/forward_inactive.svg",
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
                    img: "Assets/forward_pressed.svg",
                    forwarding: true
                    })
                    console.log("Fast Forward")
                }}

                onMouseUp={() => {
                        this.setState({
                        img: "Assets/forward_inactive.svg",
                        forwarding: false
                        })
                }}

                alt="Fast Forward"
                />
                
            </div>
        );
    }
}

export default FastForward;