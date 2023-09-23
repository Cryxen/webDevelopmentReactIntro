import Food from './components/Food';
import MyComponent from './components/Mycomponent';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Alert from './components/Alert';
import { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [showInputValue, setShowInputValue] = useState(false);
  const food = ['Pizza', 'Hamburger', 'Coke'];

  const alertButtonPress = () => {
    console.log(showInputValue);
    setShowInputValue(!showInputValue);
  };
  return (
    <Wrapper>
      <p>Read the README.md to see the tasks</p>
      <MyComponent title="It Works" />
      <Title title="Test" />
      <Food food={food} />
      <Alert
        setInputValue={setInputValue}
        alertButtonPress={alertButtonPress}
      />
      {showInputValue ? <p>{inputValue}</p> : ''}
    </Wrapper>
  );
};

export default App;
