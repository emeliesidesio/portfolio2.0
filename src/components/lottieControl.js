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
        <h1>Lottie</h1>
        <p>Base animation free from external manipulation</p>
        <Lottie options={defaultOptions}
              height={150}
              width={250}
        />
      </div>
    )
  }
}
