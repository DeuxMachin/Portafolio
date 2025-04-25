import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number;
}

export default function TypewriterEffect({ text, speed = 100 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isComplete) {
      if (!isDeleting && currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex));
          setCurrentIndex(currentIndex + 1);
          
          if (currentIndex === text.length) {
            // Text is complete, wait longer
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500);
          }
        }, speed);
      } else if (isDeleting && currentIndex >= 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex));
          setCurrentIndex(currentIndex - 1);
          
          if (currentIndex === 0) {
            setIsDeleting(false);
            setIsComplete(true);
            
            // Restart after pause
            setTimeout(() => {
              setIsComplete(false);
            }, 500);
          }
        }, speed / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isComplete, text, speed]);

  return (
    <div className="h-full flex items-center">
      <span className="text-xl md:text-2xl text-teal-400">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
}