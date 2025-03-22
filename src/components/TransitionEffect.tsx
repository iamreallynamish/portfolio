
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TransitionEffectProps {
  children: React.ReactNode;
}

const TransitionEffect = ({ children }: TransitionEffectProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('slideIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('slideOut');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'slideOut') {
      setTransitionStage('slideIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={cn(
        'transition-all duration-500 ease-in-out min-h-screen',
        transitionStage === 'slideIn' ? 'animate-slide-in-right' : 'animate-slide-out-right'
      )}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  );
};

export default TransitionEffect;
