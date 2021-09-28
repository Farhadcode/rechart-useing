import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/LineChart/MyLineChart';
import DalySalesChart from './components/DalySalesChart/DalySalesChart';


function App() {
  return (
    <div className="App">

      <DalySalesChart></DalySalesChart>
    </div>
  );
}

export default App;
