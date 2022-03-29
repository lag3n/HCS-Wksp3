import { Dish } from './Dish'

function App() {
  return (
    <div> 
      <h1>Welcome to HCS Third Workshop!</h1>
      <Dish name="Pizza" price={10}></Dish>
      <Dish name="Ice Cream" price={50}></Dish>
      <Dish name="Chicken" price={1}></Dish>
    </div>
  );
}

export default App;
