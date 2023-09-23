const Food = ({ food }) => {
  return (
    <ul>
      {food.map((food) => (
        <li key={food}>{food}</li>
      ))}
    </ul>
  );
};
export default Food;
