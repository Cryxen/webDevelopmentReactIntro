import Title from './Title';

const MyComponent = ({ title }) => {
  return (
    <>
      <h1>My First Component</h1>
      <Title title={title} />
    </>
  );
};
export default MyComponent;
