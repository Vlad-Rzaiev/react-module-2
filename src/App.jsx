import { useState } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import Button from './components/Button/Button';

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

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <Container>
        <Button onClick={hundleClick} variant="primary">
          Click me!
        </Button>

        <Button variant="secondary" />

        <Button onClick={handleToggle} variant="success">
          {isOpen ? 'Hide' : 'Show'}
        </Button>
        {isOpen && <p>Now you can see me!</p>}

        <Button variant="danger" />

        <Button variant="disabled" disabled>
          Disabled
        </Button>
      </Container>
    </Section>
  );
}

export default App;
