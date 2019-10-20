import React from "react";
import Lottie from "react-lottie";
import thunderBolt from "animations/thunder-bolt.json";

export default class LottieControl extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: thunderBolt,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie options={defaultOptions}
              height={180}
              width={280}
        />
      </div>
    )
  }
}
