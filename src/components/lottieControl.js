import React from 'react'
import Lottie from 'react-lottie'
import animationData from 'animations/icon-home.json'

export default class LottieControl extends React.Component {

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={150}
              width={250}
        />
      </div>
    )
  }
}
