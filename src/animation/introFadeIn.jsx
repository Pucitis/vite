
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const IntroFadeIn = ({children}) => {
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

      if (inView) {
      setIsVisible(true);
    } else {
        setIsVisible(false)
    }
  }, [inView]);
     
  
  

   

  return (
    <div
     ref={ref} 
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={`inline-block transition-all duration-1000 delay-${index * 1000} transform ${isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? '-translate-x-full blur-lg scale-1 opacity-0' : 'translate-x-full blur-lg scale-1 opacity-0' }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default IntroFadeIn;