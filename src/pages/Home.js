import React from 'react';
import '../css/home.css';

import {Container, Row, Col} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';

import Logo from '../component/logo';

import {useSelector, useDispatch} from 'react-redux';


function Home() {
	const dispatch = useDispatch();
	return (
		<div>
			<Logo />

			{ useSelector(state => state.usuarioLogado) === 0 ? <Redirect to="/" /> : null }

			
			<Container>
				<Row className="">
					<Col md="3">
						<div 
					    	className="form-check center-vert"
						    style={{
							    display: "flex",
							    justifyContent: "center",
							    alignItems: "center",
							}}
					    >
							<Link className="myButton my-auto" to="cadastrarpaciente"
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
								>
								Cadastrar Paciente
							</Link>
						</div>
					</Col>

					<Col md="3">
						<div 
					    	className="form-check center-vert"
						    style={{
							    display: "flex",
							    justifyContent: "center",
							    alignItems: "center",
							}}
					    >
							<Link className="myButton text-center" to="verrelatorioindividual"
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
								>
								Editar Paciente
							</Link>
						</div>
					</Col>

					<Col md="3">
						<div 
					    	className="form-check center-vert"
						    style={{
							    display: "flex",
							    justifyContent: "center",
							    alignItems: "center",
							}}
					    >
							<Link className="myButton" //to="relatorioglobal"
								onClick={() => alert('Ainda não está pronto!')}
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
								>
								Gerar Relatórios
							</Link>
						</div>
					</Col>

					<Col md="3">
						<div 
					    	className="form-check center-vert"
						    style={{
							    display: "flex",
							    justifyContent: "center",
							    alignItems: "center",
							}}
					    >
							<Link className="myButton" onClick={() => dispatch({type: "LOG_OUT"})}
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
								>
								Sair
							</Link>
						</div>
					</Col>

				</Row>
			</Container>


		</div>
	);
}

export default Home;