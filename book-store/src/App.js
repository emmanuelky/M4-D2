import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import BookNavbar from './components/BookNavbar.jsx';
import MyFooter from './components/MyFooter.jsx';

function App() {
  return (
    <div className="App">
      <BookNavbar />
      <MyFooter />
    </div>
  );
}

export default App;
