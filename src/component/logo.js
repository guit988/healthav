import React from 'react';

import {Container, Row, Col, Image} from 'react-bootstrap';

function Logo() {
	return (
		<Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center">
              <Image src={require("../img/ave.png")}/>
            </div>
          </Col>
        </Row>
      	<br/>
      </Container>
	);
}

export default Logo;