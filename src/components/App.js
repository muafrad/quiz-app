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
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
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
            <PublicRoute path="/signup">
              <SignUp />
            </PublicRoute>
            <PublicRoute path="/login">
              <LogIn />
            </PublicRoute>
            <PrivateRoute path="/quiz">
              <Quiz />
            </PrivateRoute>
            <PrivateRoute path="/result">
              <Result />
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </AuthProvider>

  );
}

export default App;
