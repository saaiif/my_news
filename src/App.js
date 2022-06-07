import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

function App() {
  console.log(new Date().toLocaleDateString());
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
}

export default App;
