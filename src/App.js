// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ItemList from './components/itemList';

function App() {
  return (
    <div className="App">
        <Header />
        <main>
          <div className=" container mx-auto">
            <div className="">
              <h2 class="text-3xl font-bold">Ceci est une liste</h2>
              <ItemList />
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;
