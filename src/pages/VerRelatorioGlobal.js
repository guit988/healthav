import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Logo from '../component/logo';
import firebase from '../config/firebase';


import { connect } from 'react-redux';

import {Link, Redirect} from 'react-router-dom';

class VerRelatoorioGlobal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			
		}

		
		this.receberDoBD();
	}

	
	async receberDoBD() {
		var ref = firebase.database().ref("dados/");
	
	}

	render() {

	return (
		<div>
			<Logo />

			{// useSelector(state => state.usuarioLogado) === 0 ? <Redirect to="/" /> : null }
			}
			
			<Container>
				<Row className="">
					<Col md="4">
						<div 
					    	className="form-check center-vert"
						    style={{
							    display: "flex",
							    justifyContent: "center",
							    alignItems: "center",
							}}
					    >
							<Link className="myButton my-auto" to="/verrelatorioindividual/relatorio"
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
								>
								Atendimento Individual
							</Link>
						</div>
					</Col>

					<Col md="4">
						<div 
					    	className="form-check center-vert"
						    style={{
							    display: "flex",
							    justifyContent: "center",
							    alignItems: "center",
							}}
					    >
							<Link className="myButton text-center" to="/relatorioglobal"
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
								>
								Atendimento por Período
							</Link>
						</div>
					</Col>

					<Col md="4">
						<div 
					    	className="form-check center-vert"
						    style={{
							    display: "flex",
							    justifyContent: "center",
							    alignItems: "center",
							}}
					    >
							<Link className="myButton" to="/diagnosticoporperiodo"
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
								>
								Diagnóstico por Período
							</Link>
						</div>
					</Col>

				</Row>
			</Container>


		</div>
	);
	
	}
}



const mapStateToProps = state => {
    const {usuarioLogado} = state;

    return { usuarioLogado: usuarioLogado}
}

export default connect( mapStateToProps,  null)(VerRelatoorioGlobal); 

/*
Idade, sexo, naturalidade, uf, classificacao de risco, pa, glicemia, fc, fr,  assimetria obvia, triagem neurologica

Antecedentes, diagnostico e sintomas 4,5
*/
