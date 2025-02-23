import { useState } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ variant, disabled, onClick, children }) {
  const [clicks, setClicks] = useState(0);

  const count = () => {
    setClicks(clicks + 1);
  };

  return (
    <button
      className={clsx(styles.button, styles[variant])}
      type="button"
      onClick={onClick ? onClick : count}
      disabled={disabled ? disabled : undefined}
    >
      {children ? children : `Clicks: ${clicks}`}
    </button>
  );
}

export default Button;
