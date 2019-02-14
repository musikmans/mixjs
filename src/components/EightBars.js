import React, { Component } from "react"
import { store } from "../store";
import { connect } from 'react-redux';
import { change_loop_left, change_loop_right } from "../actions";

const mapStateToProps = (state) => ({
    loop_left: state.loop_left.loop_left,
    loop_right: state.loop_right.loop_right
});

class EightBars extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    if (this.state.componentId==="loop-eight-left") {
                        if (store.getState().loop_left.loop_left!=="eightbars" && store.getState().controls_left.controls_left === "play") {
                            this.setState({
                            img: "Assets/eight_bars_active.svg",
                            })
                            store.dispatch(change_loop_left({ loop_left: "eightbars" }))
                            console.log(store.getState().loop_left)
                        } else {
                            this.setState({
                            img: "Assets/eight_bars_inactive.svg",
                            })
                            store.dispatch(change_loop_left({ loop_left: "inactive" }))
                            console.log(store.getState().loop_left)
                        }
                    } else {
                        if (store.getState().loop_right.loop_right!=="eightbars" && store.getState().controls_right.controls_right === "play") {
                            this.setState({
                            img: "Assets/eight_bars_active.svg",
                            })
                            store.dispatch(change_loop_right({ loop_right: "eightbars" }))
                            console.log(store.getState().loop_right)
                        } else {
                            this.setState({
                            img: "Assets/eight_bars_inactive.svg",
                            })
                            store.dispatch(change_loop_right({ loop_right: "inactive" }))
                            console.log(store.getState().loop_right)
                        }
                    }
                }}

                alt="Loop eight bar"
                />
                
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.componentId === "loop-eight-left") {
            if (prevProps.loop_left !== this.props.loop_left && (this.props.loop_left !== "eightbars")) {
                this.setState({
                    img: "Assets/eight_bars_inactive.svg",
                })
            }
        } else {
            if (prevProps.loop_right !== this.props.loop_right && (this.props.loop_right !== "eightbars")) {
                this.setState({
                    img: "Assets/eight_bars_inactive.svg",
                })
            }
        }
    }

}

export default connect(mapStateToProps)(EightBars);