import './App.css';
import NavBar from './components/NavBar/NavBAr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"juegos para consolas y pc"}/>
    </div>
  );
}

export default App;
