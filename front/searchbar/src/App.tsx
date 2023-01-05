//components
import Logo from "./components/common/Logo";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

//css
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Logo />
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
