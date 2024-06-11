import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div className="App">
      <AddEmployee/>
      <ViewAll/>
    </div>
  );
}

export default App;
