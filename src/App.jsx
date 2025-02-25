import { useState, useEffect } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Button from './components/Button/Button';
import CustomButton from './components/CustomButton/CustomButton';

function App() {
  const hundleClick = () => {
    iziToast.info({
      title: 'Hello',
      message: 'I am a button',
      position: 'topCenter',
      timeout: 15000,
      progressBarColor: 'yellow',
    });
  };

  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('saved-clicks');

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }

    return 0;
  });

  useEffect(() => {
    console.log('Clicks updated: ', clicks);
    localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

  const count = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${clicks} times.`;
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = evt => {
    console.log(evt);
  };

  useEffect(() => {
    console.log('You can see me only once!');
  }, []);

  const Modal = () => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log(`Interval - ${Date.now()}`);
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }, []);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log('First updated: ', first);
  }, [first]);

  useEffect(() => {
    console.log('Second updated: ', second);
  }, [second]);

  useEffect(() => {
    console.log('First or second updated: ', first + second);
  }, [first, second]);

  return (
    <Section>
      <Container>
        <Button onClick={hundleClick} variant="primary">
          Click me!
        </Button>

        <Button onClick={count} variant="secondary">
          Count: {clicks}
        </Button>

        <Button onClick={handleToggle} variant="success">
          {isOpen ? 'Hide' : 'Show'}
        </Button>
        {isOpen && <p>Now you can see me!</p>}

        <Button onClick={count} variant="danger">
          Count: {clicks}
        </Button>

        <Button variant="disabled" disabled>
          Disabled
        </Button>

        <button onClick={handleClick}>First button</button>
        <hr />
        <button onClick={evt => console.log(evt)}>Second button</button>
        <hr />

        <CustomButton message="Playing music!">Play some music</CustomButton>
        <hr />
        <CustomButton message="Uploading your data!">Upload data</CustomButton>
        <hr />

        <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
        </button>
        <hr />

        <div>
          <button onClick={() => setIsOpenModal(!isOpenModal)}>
            {isOpenModal ? 'Close' : 'Open'}
          </button>
          {isOpenModal && <Modal />}
        </div>
        <hr />

        <button onClick={() => setFirst(first + 1)}>First: {first}</button>
        <hr />
        <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
        <hr />

        <Button onClick={() => setClicks(0)} variant="danger">
          Reset
        </Button>
      </Container>
    </Section>
  );
}

export default App;
