import React from 'react';
import { Jumbotron} from 'reactstrap';

const Customers = () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Customer Stories</h1>
        <p className="lead">
          "Before we used the hFlow process, it might have taken our staff many hours, or even days, to respond to an incident. Now we’ve automated much of that process, so we can get it down to a very quick and efficient few minutes."
        </p>
        <p>
        - Wesley Miner, Head of Operations, The Palms Hotel
        </p>
        <p className="lead">
          <a href="/Customers" aria-hidden content="stuff">Customers</a>{/* // WATCH THE CUSTOMER VIDEO // */}
        </p>
      </Jumbotron>
    </div>
);

export default Customers;
