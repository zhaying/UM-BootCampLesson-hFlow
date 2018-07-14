import React from 'react'
import FadeInTest from '../fadeInTest/FadeInTest';
import InViewMonitor from 'react-inview-monitor'

const FadeInItem = ({ idx, fadeInClass = 'fadeInUp' }) =>
  <InViewMonitor
    key={idx}
    classNameNotInView="col-3 vis-hidden"
    classNameInView={`col-3 fadeineffects__item animated ${fadeInClass}`}
  >
    
  </InViewMonitor>

const FadeInEffects = () =>
  <div>
    

    <div className="flex justify-between mb3">
      <FadeInItem idx={0}>
        <FadeInTest />
      </FadeInItem>
      <FadeInItem idx={1} />
      <FadeInItem idx={2} />
    </div>

  </div>

export default FadeInEffects