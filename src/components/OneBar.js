import React, { Component } from "react"

class OneBarLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activated: false, 
          img: "Assets/one_bar_inactive.svg",
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
                    img: "Assets/one_bar_pressed.svg"
                    })
                }}

                onMouseUp={() => {
                    if (!this.state.activated) {
                        this.setState({
                        img: "Assets/one_bar_active.svg",
                        activated: true
                        })
                        console.log("One Bar Loop Activated")
                    } else {
                        this.setState({
                        img: "Assets/one_bar_inactive.svg",
                        activated: false
                        })
                        console.log("One Bar Loop Desctivated")
                    }
                }}

                alt="Loop one bar"
                />
                
            </div>
        );
    }
}

export default OneBarLeft;