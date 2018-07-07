import React from 'react';
import { Jumbotron, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const Support = () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">hFlow Support</h1>
        <p className="lead">
          How may we assist you?
        </p>
        <br />
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="danger">Search</Button>
        </InputGroupAddon>
      </InputGroup>
      </Jumbotron>
    </div>
);

export default Support;
