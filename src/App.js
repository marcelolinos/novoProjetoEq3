//import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import  "bootstrap/dist/css/bootstrap.min.css";
import TutorialList from './components/TutorialList';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';

function App() {
  return (
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="navbar-brand">
                  Exemplo Bootstrap
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/tutorials"} className="nav-link">
                    Tutorials
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add
                  </Link>
                </li>
             </div>  
        </nav>
        <div className="container mt-3">
            <Switch>
                  <Route exact path={["/", "/tutorials"]} component={TutorialList} />
                  <Route exact path="/add" component={AddTutorial}/>
                  <Route path="/tutorials/:id" component={Tutorial}/>
            </Switch>
        </div>
    </div>
  );
}

export default App;
