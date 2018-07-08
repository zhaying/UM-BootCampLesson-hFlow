import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuAppBar from '../views/navbar/MenuAppBar';
import Home from '../views/pages/Home';
import Dashboard from '../views/pages/Dashboard';
import Customers from '../views/pages/Customers';
import UseCases from '../views/pages/UseCases';
import Support from '../views/pages/Support';
import ContactUs from '../views/pages/ContactUs';
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
              <Route path="/customers"  component={Customers} />
              <Route path="/use-cases"  component={UseCases}  />
              <Route path="/support"    component={Support}   />
              <Route path="/contact-us" component={ContactUs} />
            </AuthenticatedComponent>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
