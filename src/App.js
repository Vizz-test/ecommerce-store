import './App.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import RouteList from './component/Routes/RouteList';
function App() {
  return (
    <div className="app">
      <Header />
      <RouteList />
      <Footer />
    </div>
  );
}

export default App;
