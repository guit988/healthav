import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';

function Logo({classeDaLogo = "d-flex justify-content-center"}) {
	return (
		<Container>
        <Row>
          <Col>
            <Link to="/">
              <div className={classeDaLogo}>
                <Image src={require("../img/ave.png")}/>
              </div>
            </Link>
          </Col>
        </Row>
      	<br/>
      </Container>
	);
}

export default Logo;