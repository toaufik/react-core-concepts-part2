import Users from "../Users";
import "./App.css";
import Friends from "./Friends";
import Team from "./Team";
import Counter from "./counter";

function App() {
  function handleClick() {
    alert("Button clicked");
  }

  const handleClick2 = () => {
    alert("Button clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me</button>
      <button
        onClick={() => {
          alert("Third Clicked");
        }}
      >
        Click me
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
