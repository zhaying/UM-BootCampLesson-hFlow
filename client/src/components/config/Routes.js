import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuAppBar from '../views/navbar/MenuAppBar';
import Home from '../views/pages/Home';
<<<<<<< HEAD
import Dashboard from '../views/pages/Dashboard';
import LoginPage from '../views/pages/LoginPage';
import AuthenticatedComponent from '../auth/AuthenticatedComponent';
=======
import Products from '../views/pages/Products';
import Customers from '../views/pages/Customers';
import UseCases from '../views/pages/UseCases';
import Support from '../views/pages/Support';
import ContactUs from '../views/pages/ContactUs';
import Login from '../views/pages/Login';
import Resume from '../views/pages/Resume';
import DashboardPage from '../views/pages/Dashboard';

>>>>>>> fe38b3acd31a130a07753798a8544effbe9ab29d


export default function LandingPage() {
  return (
    <Router>
      <div>
        <main>
<<<<<<< HEAD
          <Switch>
            <Route exact path="/" component={Home}      />
            <Route path="/login"  component={LoginPage} />
            <AuthenticatedComponent>
              <Route path="/dashboard"  component={Dashboard} />
            </AuthenticatedComponent>
          </Switch>
=======
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/customers" component={Customers} />
          <Route path="/use-cases" component={UseCases} />
          <Route path="/support" component={Support} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route path="/resume" component={Resume} />
          <Route path="/dash" component={DashboardPage} />
>>>>>>> fe38b3acd31a130a07753798a8544effbe9ab29d
        </main>
      </div>
    </Router>
  );
}
