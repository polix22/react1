import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBAr';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path = '/' element={<ItemListContainer/>} />
          <Route path = '/item/:categoryId' element={<ItemListContainer/>} />
          <Route path = '/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path = '*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
