import logo from './logo.svg';
import './App.css';
import Header from './componente/Header';
import Cards from './componente/Cards';
import Footer from './componente/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
