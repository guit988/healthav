import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import MaskedInput from 'react-text-mask';

class Step4 extends React.Component {

	constructor(props) {
		super(props);
	}

	cardiopata = event => {

	    const evento = {
	      target: {
	        'name': 'cardiopata',
	        'value': !this.props.state.cardiopata,
	      }
	    }

	    this.props.handleChange(evento);

   }

   diabetes = event => {

   	 	const evento = {
	      target: {
	        'name': 'diabetes',
	        'value': !this.props.state.diabetes
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   has = event => {
   		const evento = {
	      target: {
	        'name': 'has',
	        'value': !this.props.state.has
	      }
	    }

	    this.props.handleChange(evento);
   }

   icc = event => {
   		const evento = {
	      target: {
	        'name': 'icc',
	        'value': !this.props.state.icc
	      }
	    }

	    this.props.handleChange(evento);
   }

   tabagismo = event => {
   		const evento = {
	      target: {
	        'name': 'tabagismo',
	        'value': !this.props.state.tabagismo
	      }
	    }

	    this.props.handleChange(evento);
   }

   etilismo = event => {
   		const evento = {
	      target: {
	        'name': 'etilismo',
	        'value': !this.props.state.etilismo
	      }
	    }

	    this.props.handleChange(evento);
   }

   drogas = event => {
   		const evento = {
	      target: {
	        'name': 'drogas',
	        'value': !this.props.state.drogas
	      }
	    }

	    this.props.handleChange(evento);
   }

   historiaDeConvOuEpile = event => {
   		const evento = {
	      target: {
	        'name': 'historiaDeConvOuEpile',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   duracaoDosSintomas = event => {
   		const evento = {
	      target: {
	        'name': 'duracaoDosSintomas',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   cadeiraDeRodas = event => {
   		const evento = {
	      target: {
	        'name': 'cadeiraDeRodas',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   glicemiaCapilar60e400 = event => {
   		const evento = {
	      target: {
	        'name': 'glicemiaCapilar60e400',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   sequelaDeAvc = event => {
   		const evento = {
	      target: {
	        'name': 'sequelaDeAvc',
	        'value': !this.props.state.sequelaDeAvc
	      }
	    }

	    this.props.handleChange(evento);
   }

   cirurgiaAnterior = event => {
   		const evento = {
	      target: {
	        'name': 'cirurgiaAnterior',
	        'value': !this.props.state.cirurgiaAnterior
	      }
	    }

	    this.props.handleChange(evento);
   }

   ist = event => {
   		const evento = {
	      target: {
	        'name': 'ist',
	        'value': !this.props.state.ist
	      }
	    }

	    this.props.handleChange(evento);
   }

   alergia = event => {
   		const evento = {
	      target: {
	        'name': 'alergia',
	        'value': !this.props.state.alergia
	      }
	    }

	    this.props.handleChange(evento);
   }

   

	render() {

		 if (this.props.currentStep !== 4) { // Prop: The current step
		 	return null
		 }

		const state = this.props.state;

		return(
			<div>
				<Container className="border p-3 rounded"> 
					<Row className="d-flex justify-content-between">
						<Col md = "6">
							<div
								style={{
								  fontWeight: 'bold',
						          display: "flex",
						          justifyContent: "center",
						          alignItems: "center",
						          textAlign: "center"
						        }}
							>
								<label htmlFor="name">ANTECEDENTES PESSOAIS</label>
							</div>
						</Col>
						<Col md = "6">
							<div 
								style={{
								  fontWeight: 'bold',
						          display: "flex",
						          justifyContent: "center",
						          alignItems: "center",
						          textAlign: "center"
						        }}
						    >
								<label htmlFor="name">ESCALA DE LAPSS</label>
							</div>
						</Col>
					</Row>
					
					<Row>
					<Col md="6">
						<Row>
							<Col md="4">
								<label htmlFor="name"> CADIORPATA: </label>
							</Col>

							<Col md="2">
								<input
						            name="cardiopata"
						            type="checkbox"
						            checked={state.cardiopata}
						            onChange={this.cardiopata} 
						         />
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> DIABETES: </label>
							</Col>

							<Col md="2">
								<input
						            name="diabetes"
						            type="checkbox"
						            checked={state.diabetes}
						            onChange={this.diabetes} 
						         />
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> HAS: </label>
							</Col>

							<Col md="2">
								<input
						            name="has"
						            type="checkbox"
						            checked={state.has}
						            onChange={this.has} 
						         />
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> ICC: </label>
							</Col>

							<Col md="2">
								<input
						            name="icc"
						            type="checkbox"
						            checked={state.icc}
						            onChange={this.icc} 
						         />
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> SEQUELA DE AVC: </label>
							</Col>

							<Col>
								<Row>
									<Col md="1">
										<input
								            name="icc"
								            type="checkbox"
								            checked={state.sequelaDeAvc}
								            onChange={this.sequelaDeAvc} 
								         />
							         </Col>
							         <Col md="11">
										<input
							              className="form-control"
							              id="desSequelaDeAvc"
							              name="desSequelaDeAvc"
							              type="text"
							              placeholder="Qual ?"
							              value={state.desSequelaDeAvc} // Prop: The email input data
							              onChange={this.props.handleChange} // Prop: Puts data into state
							            />
							        </Col>
						       </Row>
							</Col>
							
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> TABAGISMO: </label>
							</Col>

							<Col md="2">
								<input
						            name="has"
						            type="checkbox"
						            checked={state.tabagismo}
						            onChange={this.tabagismo} 
						         />
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> ETILISMO: </label>
							</Col>

							<Col md="2">
								<input
						            name="has"
						            type="checkbox"
						            checked={state.etilismo}
						            onChange={this.etilismo} 
						         />
							</Col>
							
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> CIRURGIA ANTERIOR: </label>
							</Col>

							<Col>
								<Row>
									<Col md="1">
										<input
								            name="cirurgiaAnterior"
								            type="checkbox"
								            checked={state.cirurgiaAnterior}
								            onChange={this.cirurgiaAnterior} 
								         />
							         </Col>
							         <Col md="11">
										<input
							              className="form-control"
							              id="desCirurgiaAnterior"
							              name="desCirurgiaAnterior"
							              type="text"
							              placeholder="Qual ?"
							              value={state.desCirurgiaAnterior} // Prop: The email input data
							              onChange={this.props.handleChange} // Prop: Puts data into state
							            />
							        </Col>
						       </Row>
							</Col>							
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> DROGAS: </label>
							</Col>

							<Col md="2">
								<input
						            name="drogas"
						            type="checkbox"
						            checked={state.drogas}
						            onChange={this.drogas} 
						         />
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> IST: </label>
							</Col>

							<Col>
								<Row>
									<Col md="1">
										<input
								            name="ist"
								            type="checkbox"
								            checked={state.ist}
								            onChange={this.ist} 
								         />
							         </Col>
							         <Col md="11">
										<input
							              className="form-control"
							              id="desIst"
							              name="desIst"
							              type="text"
							              placeholder="Qual ?"
							              value={state.desIst} // Prop: The email input data
							              onChange={this.props.handleChange} // Prop: Puts data into state
							            />
							        </Col>
						       </Row>								
							</Col>
						</Row>
						<Row className="my-2">
							<Col md="4">
								<label htmlFor="name"> ALERGIA: </label>
							</Col>

							<Col>
								<Row>
									<Col md="1">
										<input
								            name="alergia"
								            type="checkbox"
								            checked={state.alergia}
								            onChange={this.alergia} 
								         />
							         </Col>
							         <Col md="11">
										<input
							              className="form-control"
							              id="desAlergia"
							              name="desAlergia"
							              type="text"
							              placeholder="Qual ?"
							              value={state.desAlergia} // Prop: The email input data
							              onChange={this.props.handleChange} // Prop: Puts data into state
							            />
							        </Col>
						       </Row>
							</Col>
						</Row>
					</Col>

					<Col md="6">
							<Row>
								<Col md="4">
						        	<label htmlFor="name"></label>
						        </Col>
						        <Col md="2">
						        	<div 
					                	className="form-check"
						                style={{
								          display: "flex",
								          justifyContent: "center",
								          alignItems: "center",
								          textAlign: "center"
								        }}
					                >
						        		<label htmlFor="name">SIM</label>
						        	</div>
						        </Col>
						        <Col md="2">
						        	<div 
					                	className="form-check"

						                style={{
								          display: "flex",
								          justifyContent: "center",
								          alignItems: "center",
								          textAlign: "center"
								        }}
					                >
						        		<label htmlFor="name">NÃO</label>
						        	</div>
						        </Col>
						        <Col md="2">
						        	<div 
					                	className="form-check"
						                style={{
								          display: "flex",
								          justifyContent: "center",
								          alignItems: "center",
								          textAlign: "center"
								        }}
					                >
						        		<label htmlFor="name">DESCONHECE</label>
						        	</div>
						        </Col>
							</Row>

							<Row>
								<Col md="4">
						        	<label htmlFor="name">TEM HISTÓRIA DE CONVULSÃO OU EPILEPSIA:</label>
						        </Col>
						        <Col md="2">
					                <div 
					                	className="form-check"
						                style={{
								          display: "flex",
								          justifyContent: "center",
								          alignItems: "center"
								        }}
					                >
					                  <label>
					                    <input type="radio" value="SIM"  className="form-check-input"
					                                  checked={state.historiaDeConvOuEpile === 'SIM'} 
					                                  onChange={this.historiaDeConvOuEpile} />
					                  </label>
					                </div>
					            </Col>
						        <Col md="2">
						        	<div 
					                	className="form-check"
						                style={{
								          display: "flex",
								          justifyContent: "center",
								          alignItems: "center"
								        }}
					                >
					                  <label>
					                    <input type="radio" value="NÃO"  className="form-check-input"
					                                  checked={state.historiaDeConvOuEpile === 'NÃO'} 
					                                  onChange={this.historiaDeConvOuEpile} />
					                  </label>
					                </div>
						        </Col>
						        <Col md="2">
						        	<div 
					                	className="form-check"
						                style={{
								          display: "flex",
								          justifyContent: "center",
								          alignItems: "center"
								        }}
					                >
					                  <label>
					                    <input type="radio" value="DESCONHECE"  className="form-check-input"
					                                  checked={state.historiaDeConvOuEpile === 'DESCONHECE'} 
					                                  onChange={this.historiaDeConvOuEpile} />
					                  </label>
					                </div>
						        </Col>
							</Row>

						<Row>
							<Col md="4">
					        	<label htmlFor="name">DURAÇÃO DOS SINTOMAS  &lt; 24 HRS:</label>
					        </Col>
					        <Col md="2">
				                <div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="SIM"  className="form-check-input"
				                                  checked={state.duracaoDosSintomas === 'SIM'} 
				                                  onChange={this.duracaoDosSintomas} />
				                  </label>
				                </div>
				            </Col>
					        <Col md="2">
					        	<div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="NÃO"  className="form-check-input"
				                                  checked={state.duracaoDosSintomas === 'NÃO'} 
				                                  onChange={this.duracaoDosSintomas} />
				                  </label>
				                </div>
					        </Col>
					        <Col md="2">
					        	<div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="DESCONHECE"  className="form-check-input"
				                                  checked={state.duracaoDosSintomas === 'DESCONHECE'} 
				                                  onChange={this.duracaoDosSintomas} />
				                  </label>
				                </div>
					        </Col>
						</Row>

						<Row>
							<Col md="4">
					        	<label htmlFor="name">DE BASE, O PACIENTE NÃO É ACAMADO NEM UTILIZA CADEIRA DE RODAS:</label>
					        </Col>
					        <Col md="2">
				                <div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="SIM"  className="form-check-input"
				                                  checked={state.cadeiraDeRodas === 'SIM'} 
				                                  onChange={this.cadeiraDeRodas} />
				                  </label>
				                </div>
				            </Col>
					        <Col md="2">
					        	<div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="NÃO"  className="form-check-input"
				                                  checked={state.cadeiraDeRodas === 'NÃO'} 
				                                  onChange={this.cadeiraDeRodas} />
				                  </label>
				                </div>
					        </Col>
					        <Col md="2">
					        	<div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="DESCONHECE"  className="form-check-input"
				                                  checked={state.cadeiraDeRodas === 'DESCONHECE'} 
				                                  onChange={this.cadeiraDeRodas} />
				                  </label>
				                </div>
					        </Col>
						</Row>

						<Row>
							<Col md="4">
					        	<label htmlFor="name">GLICEMIA CAPILAR  60 e 400:</label>
					        </Col>
					        <Col md="2">
				                <div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="SIM"  className="form-check-input"
				                                  checked={state.glicemiaCapilar60e400 === 'SIM'} 
				                                  onChange={this.glicemiaCapilar60e400} />
				                  </label>
				                </div>
				            </Col>
					        <Col md="2">
					        	<div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="NÃO"  className="form-check-input"
				                                  checked={state.glicemiaCapilar60e400 === 'NÃO'} 
				                                  onChange={this.glicemiaCapilar60e400} />
				                  </label>
				                </div>
					        </Col>
					        <Col md="2">
					        	<div 
				                	className="form-check"
					                style={{
							          display: "flex",
							          justifyContent: "center",
							          alignItems: "center"
							        }}
				                >
				                  <label>
				                    <input type="radio" value="DESCONHECE"  className="form-check-input"
				                                  checked={state.glicemiaCapilar60e400 === 'DESCONHECE'} 
				                                  onChange={this.glicemiaCapilar60e400} />
				                  </label>
				                </div>
					        </Col>
						</Row>
					</Col>
				</Row>
				</Container>
			</div>
		);
	}
}


export default Step4;