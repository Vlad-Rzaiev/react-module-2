import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const CustomButton = ({ message, children }) => {
  return (
    <button
      onClick={() =>
        iziToast.success({
          title: 'Success',
          message: message,
          position: 'topCenter',
          timeout: 15000,
          progressBarColor: 'blue',
        })
      }
    >
      {children}
    </button>
  );
};

export default CustomButton;
