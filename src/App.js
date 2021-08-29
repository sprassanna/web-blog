import HomePage  from './pages/HomePage';
import About  from './pages/About';
import Article  from './pages/Article';
import NavBar  from './pages/NavBar';
import ArticleListPage from './pages/ArticleListPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import NotFoundError from './pages/NotFoundError';

function App() {
  return (

      <Router>
        <div className="App">
          <NavBar />
          <div id='page-body'>
            <Switch>
              <Route path='/' component={HomePage} exact/>
              <Route path='/about' component={About} ></Route>
              <Route path="/articles-list" component={ArticleListPage} />
              <Route path='/article/:name' component={Article} ></Route>
              <Route component={NotFoundError}></Route>

            </Switch>
           
  
          </div>        
       </div>
      </Router>
        
       
   
  );
}

export default App;
