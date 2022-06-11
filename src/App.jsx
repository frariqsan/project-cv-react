import './App.scss';
import {CV} from './CV/CV';
import CurricuInfo from './components/CurricuInfo';

const {infoProject} = CV;

function App() {
  return (
    <div className="App">
    <CurricuInfo infoProject={infoProject} />
    </div>
  );
}

export default App;
