
import './App.css';
import CardArea from './components/CardArea.jsx'
import { Grid, Row, Col } from './components/styledGrid.jsx';
import SideBar from './components/SideBar.jsx'


const App = () => {
  return (
    <div className="App">
      <SideBar/>
      <CardArea/>
    </div>
  );
}

export default App;
