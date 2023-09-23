import { useState } from 'react';

const Alert = ({ setInputValue, alertButtonPress }) => {
  const [input, setInput] = useState('default');

  const buttonClick = (e) => {
    console.log('Clicked');
    alert(input);
    alertButtonPress();
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <>
      <button onClick={(e) => buttonClick(e)}>Click me!</button>
      <input type="text" onChange={(e) => handleChange(e)} value={input} />
    </>
  );
};
export default Alert;
