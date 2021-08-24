import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookNavbar from './components/BookNavbar.jsx';
import MyFooter from './components/MyFooter.jsx';
import Welcome from './components/Welcome.jsx';
import Release from './components/Release.jsx';

function App() {
  return (
    <div className="App">
      <BookNavbar />
      <Welcome />
      <Release />
      <MyFooter />
    </div>
  );
}

export default App;
