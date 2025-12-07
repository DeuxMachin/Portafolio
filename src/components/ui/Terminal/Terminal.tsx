import { useState, useEffect } from 'react';

interface TerminalProps {
  lines: TerminalLine[];
  className?: string;
  title?: string;
  typingSpeed?: number;
}

interface TerminalLine {
  prompt?: string;
  command?: string;
  output?: string;
  color?: 'green' | 'yellow' | 'blue' | 'red' | 'cyan' | 'purple' | 'white';
  delay?: number;
}

const colorClasses = {
  green: 'text-[#7EE787]',
  yellow: 'text-[#F9E2AF]',
  blue: 'text-[#79C0FF]',
  red: 'text-[#FF7B72]',
  cyan: 'text-[#89DCEB]',
  purple: 'text-[#DCD6F7]',
  white: 'text-[#F8F9FA]',
};

export function Terminal({
  lines,
  className = '',
  title = 'terminal',
  typingSpeed = 50,
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (displayedLines >= lines.length) return;

    const currentLine = lines[displayedLines];
    const textToType = currentLine.command || currentLine.output || '';
    const delay = currentLine.delay || 0;

    const startTyping = () => {
      setIsTyping(true);
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= textToType.length) {
          setCurrentText(textToType.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          setTimeout(() => {
            setDisplayedLines((prev) => prev + 1);
            setCurrentText('');
          }, 200);
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    };

    const delayTimeout = setTimeout(startTyping, delay);
    return () => clearTimeout(delayTimeout);
  }, [displayedLines, lines, typingSpeed]);

  return (
    <div className={`terminal-window shadow-2xl ${className}`}>
      {/* Header */}
      <div className="terminal-header">
        <div className="flex gap-2">
          <div className="terminal-dot terminal-dot-red"></div>
          <div className="terminal-dot terminal-dot-yellow"></div>
          <div className="terminal-dot terminal-dot-green"></div>
        </div>
        <span className="ml-4 text-sm text-[#8B949E]">{title}</span>
      </div>

      {/* Body */}
      <div className="terminal-body text-sm leading-relaxed">
        {/* Already displayed lines */}
        {lines.slice(0, displayedLines).map((line, index) => (
          <div key={index} className="terminal-line">
            {line.prompt && (
              <span className="terminal-prompt">{line.prompt}</span>
            )}
            <span className={colorClasses[line.color || 'white']}>
              {line.command || line.output}
            </span>
          </div>
        ))}

        {/* Currently typing line */}
        {displayedLines < lines.length && (
          <div className="terminal-line">
            {lines[displayedLines].prompt && (
              <span className="terminal-prompt">
                {lines[displayedLines].prompt}
              </span>
            )}
            <span
              className={
                colorClasses[lines[displayedLines].color || 'white']
              }
            >
              {currentText}
            </span>
            {isTyping && <span className="terminal-cursor"></span>}
          </div>
        )}

        {/* Final cursor */}
        {displayedLines >= lines.length && (
          <div className="terminal-line">
            <span className="terminal-prompt">→</span>
            <span className="terminal-cursor"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
