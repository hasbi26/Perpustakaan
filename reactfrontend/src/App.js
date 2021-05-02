// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Pelanggan from './pages/pelanggan';
import buku from './pages/buku';
import Kategori from './pages/kategori';
import Peminjaman from './pages/peminjaman';
import User from './pages/user';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/pelanggan' component={Pelanggan} />
        <Route path='/buku' component={buku} />
        <Route path='/kategori' component={Kategori} />
        <Route path='/peminjaman' component={Peminjaman} />
        <Route path='/user' component={User} />
      </Switch>
    </Router>


  );
}

export default App;
