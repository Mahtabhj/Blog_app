import Topbar from "./topbar/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header/Header";
function App() {
  return (
    <div >
    <Topbar/>
    <Header/>
    </div>
  );
}

export default App;
