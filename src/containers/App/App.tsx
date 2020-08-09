import React from 'https://dev.jspm.io/react';
import Button from '../../components/Button/Button.tsx';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // @ts-ignore
      h1: any;
      // @ts-ignore
      p: any;
    }
  }
}

const App = () => {
  const [count, setCount] = (React as any).useState(0);

  return (
    <>
      <h1>Hello DenoLand!</h1>
      <Button onClick={() => setCount(count + 1)}>Click the 🦕</Button>
      <p>You clicked the 🦕 { count } times</p>
    </>
  );
};

export default App;