import React, { Component } from "react"

class Eject extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loaded: false, 
          img: "Assets/eject_inactive.svg",
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
                    img: "Assets/eject_pressed.svg"
                    })
                }}

                onMouseUp={() => {
                    if (this.state.loaded) {
                        this.setState({
                        img: "Assets/eject_inactive.svg",
                        loaded: false
                        })
                        console.log("Eject")
                    } else {
                        this.setState({
                            img: "Assets/eject_inactive.svg",
                        })
                    }
                }}

                alt="Eject button "
                />
                
            </div>
        );
    }
}

export default Eject;