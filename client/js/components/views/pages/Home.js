import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Home = () => (
    <div>
      <Jumbotron>
        <h2>Orchestrate your team to move towards order and away from chaos...</h2>
        <br />
        <br />
        <p className="lead">
          See how hFlow stacks up.
        </p>
        <br />
        <p className="lead">
          <Button outline color="secondary">FIND OUT NOW</Button>
        </p>
      </Jumbotron>
    </div>
);

export default Home;
