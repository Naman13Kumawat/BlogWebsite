import { Sidebar, Discover, Searchbar, Profilebar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="flex_container">
      <Sidebar />
      <div className="main">
        <Searchbar />
        <Discover />
      </div>
      <Profilebar />
    </div>
  );
}

export default App;
