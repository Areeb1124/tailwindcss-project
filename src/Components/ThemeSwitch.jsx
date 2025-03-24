import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useSpring, animated } from 'react-spring';
import { SunIcon, MoonIcon} from '@heroicons/react/24/outline';

const ThemeSwitch = ({ handleClick }) => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const springProps = useSpring({
    transform: isDarkMode ? 'rotate(0deg)' : 'rotate(180deg)', // Adjusted rotation values
    config: { tension: 500, friction: 30 }
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="inline-flex items-center">
      <animated.div style={springProps} className="cursor-pointer" onClick={toggleTheme}>
        {isDarkMode ? (
          <MoonIcon className="ml-3 mr-4 h-6 w-6 text-slate-gray dark:text-coral-red" />
        ) : (
          <SunIcon className="ml-3 mr-4 h-6 w-6 text-slate-gray dark:text-coral-red" />
        )}
      </animated.div>
    </div>
  );
};

export default ThemeSwitch;