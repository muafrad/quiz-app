import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AuthProvider from '../contexts/AuthContext';
import Layout from './Layout';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import SignUp from './pages/SignUp';
import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>

  );
}

export default App;
