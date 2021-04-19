
import './App.css';
import CardArea from './components/CardArea.jsx'
import { Grid, Row, Col } from './components/styledGrid.jsx';
import SideBar from './components/SideBar.jsx'
import StartingForm from './forms/StartingForm';


const App = () => {
  return (
    <div className="App">
      <StartingForm/>
      <SideBar/>
      <CardArea/>
    </div>
  );
}

export default App;
