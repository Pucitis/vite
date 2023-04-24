
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SlideIn = ({children}) => {
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
          className={`transition-all duration-700 delay-${index * 1000} transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full blur-lg opacity-0'}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default SlideIn;
