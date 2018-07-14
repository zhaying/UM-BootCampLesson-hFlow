import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuAppBar from '../views/navbar/MenuAppBar';
import Home from '../views/pages/Home';
import LoginPage from '../views/pages/LoginPage';
import AuthenticatedComponent from '../auth/AuthenticatedComponent';
import Resume from '../views/pages/Resume';
import ResumeForm from '../views/pages/ResumeForm';
import DashboardPage from '../views/pages/DashboardPage';
import FadeInTestPage from '../views/pages/FadeInTestPage';
import NewResumePage from '../views/pages/NewResumePage';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:3000/api/graphql'
})

export default function LandingPage() {
  return (
    <Router>
      <ApolloProvider client={client}>
      <div>
        <MenuAppBar />
        <main>
          <Switch>
            <Route exact path="/" component={LoginPage}      />
            <Route path="/login"  component={LoginPage} />
            <AuthenticatedComponent>
              <Route path="/dashboard"  component={DashboardPage} />
              <Route path="/resume"     component={Resume} />
              <Route path="/resumeform"     component={ResumeForm} />
              <Route path="/fade"     component={FadeInTestPage} />
              <Route path="/newresume"     component={NewResumePage} />
            </AuthenticatedComponent>
          </Switch>
        </main>
      </div>
      </ApolloProvider>
    </Router>
  );
}
