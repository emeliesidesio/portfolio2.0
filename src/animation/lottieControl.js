import React from "react"
import Lottie from "react-lottie"
import * as animationData from "./icon-home.json"

export default class LottieControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={150}
          width={250}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused} />
      </div>
    )
  }
}
