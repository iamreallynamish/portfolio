
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  colorChange?: boolean;
}

const TypingAnimation = ({ text, className, colorChange = false }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentColor, setCurrentColor] = useState('#FFFFFF');
  
  // Array of colors to cycle through
  const colors = [
    '#FFFFFF', // White
    '#9b87f5', // Purple
    '#33C3F0', // Sky Blue
    '#F97316', // Bright Orange
    '#D946EF', // Magenta Pink
    '#0EA5E9', // Ocean Blue
    '#FEC6A1', // Soft Orange
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Pause at full text
          setTimeout(() => {
            setIsDeleting(true);
            
            // Change color when starting to delete if colorChange is enabled
            if (colorChange) {
              const randomIndex = Math.floor(Math.random() * colors.length);
              setCurrentColor(colors[randomIndex]);
            }
          }, 1000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearInterval(interval);
  }, [currentIndex, isDeleting, displayText, text, colorChange, colors]);

  return (
    <span 
      className={className} 
      style={{ color: colorChange ? currentColor : undefined }}
    >
      {displayText}
    </span>
  );
};

export default TypingAnimation;
