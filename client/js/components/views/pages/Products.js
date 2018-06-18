import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Products = () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Products</h1>
        <p className="lead">
          hFlow is a hotel workflow platform that provides the first line of defense at organizing events.
        </p>
        <p className="lead">
          <Button color="danger">REQUEST A QUOTE</Button>
        </p>
      </Jumbotron>
    </div>
);

export default Products;
