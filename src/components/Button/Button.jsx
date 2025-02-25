import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ variant, disabled, onClick, children }) {
  return (
    <button
      className={clsx(styles.button, styles[variant])}
      type="button"
      onClick={onClick ? onClick : undefined}
      disabled={disabled ? disabled : undefined}
    >
      {children ? children : undefined}
    </button>
  );
}

export default Button;
