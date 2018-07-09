import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuAppBar from '../views/navbar/MenuAppBar';
import Home from '../views/pages/Home';
import Dashboard from '../views/pages/Dashboard';
import LoginPage from '../views/pages/LoginPage';
import AuthenticatedComponent from '../auth/AuthenticatedComponent';


export default function LandingPage() {
  return (
    <Router>
      <div>
        <MenuAppBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home}      />
            <Route path="/login"  component={LoginPage} />
            <AuthenticatedComponent>
              <Route path="/dashboard"  component={Dashboard} />
            </AuthenticatedComponent>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
