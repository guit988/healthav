import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import MaskedInput from 'react-text-mask';

class Step5 extends React.Component {

	constructor(props) {
		super(props);
	}


   farmacoIndex(e, index) {
   		this.props.state.farmaco[index] = e.target.value;

   		const evento = {
	      target: {
	        'name': 'farmaco',
	        'value': this.props.state.farmaco,
	      }
	    }

	    this.props.handleChange(evento);

   }

   posologiaIndex(e, index) {
   		this.props.state.posologia[index] = e.target.value;

   		const evento = {
	      target: {
	        'name': 'posologia',
	        'value': this.props.state.posologia,
	      }
	    }

	    this.props.handleChange(evento);

   }

   adicionarInput = event => {
   		const eventoFarmaco = {
	      target: {
	        'name': 'farmaco',
	        'value': [...this.props.state.farmaco, ""],
	      }
	    }

	    const eventoPosologia = {
	      target: {
	        'name': 'posologia',
	        'value': [...this.props.state.posologia, ""],
	      }
	    }

	    this.props.handleChange(eventoFarmaco);
	    this.props.handleChange(eventoPosologia);
   }

   avcIsquemico = event => {

   	 	const evento = {
	      target: {
	        'name': 'avcIsquemico',
	        'value': !this.props.state.avcIsquemico
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   avcHemorragico = event => {

   	 	const evento = {
	      target: {
	        'name': 'avcHemorragico',
	        'value': !this.props.state.avcHemorragico
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   acidenteIsquemicoTransitorio = event => {

   	 	const evento = {
	      target: {
	        'name': 'acidenteIsquemicoTransitorio',
	        'value': !this.props.state.acidenteIsquemicoTransitorio
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   tomografia = event => {

   	 	const evento = {
	      target: {
	        'name': 'tomografia',
	        'value': !this.props.state.tomografia
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   laboratorio = event => {

   	 	const evento = {
	      target: {
	        'name': 'laboratorio',
	        'value': !this.props.state.laboratorio
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   gasometria = event => {

   	 	const evento = {
	      target: {
	        'name': 'gasometria',
	        'value': !this.props.state.gasometria
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   ecg = event => {

   	 	const evento = {
	      target: {
	        'name': 'ecg',
	        'value': !this.props.state.ecg
	      }
	    }

	    this.props.handleChange(evento); 	
   }

	render() {

		 if (this.props.currentStep !== 5) { // Prop: The current step
		 	return null
		 }

		const state = this.props.state;

		return(
			<div>
				<Container className="border p-3 rounded"> 

					<Row>
						<Col md="4" style={{textAlign: "center", fontWeight: 'bold'}}>
							MEDICAMENTO EM USO
						</Col>

						<Col md="5" style={{textAlign: "center", fontWeight: 'bold'}}>
							SOLICITAÇÃO DE EXAMES
						</Col>

						<Col md="3" style={{textAlign: "center", fontWeight: 'bold'}}>
							DIAGNÓSTICO
						</Col>
					</Row>

					<Row className="justify-content-md-center">
						<Col md="4">
							<Row>
								<Col md="6" style={{textAlign: "center"}}>
									FARMACO
								</Col>

								<Col md="6" style={{textAlign: "center"}}>
									POSOLOGIA em mg
								</Col>
							</Row>

							<Row>
								<Col md="6">
									{
										state.farmaco.map((item, index) => {
											return (
												<Row key={index}>
													<Col style={{padding: "2px"}}>
														<div key={index}>
															<input
												              className="form-control"
												              id={`farmaco` + index}
												              type="text"
												              placeholder=""
												              value={item} // Prop: The email input data
												              onChange={(e) => this.farmacoIndex(e, index)} // Prop: Puts data into state
												            />
														</div>
													</Col>

												</Row>
											);
										})
									}
								</Col>

								<Col md="6">
									{
										state.posologia.map((item, index) => {
											return (
												<Row key={index}>
													<Col style={{padding: "2px"}}>
														<div key={index}>
															<input
												              className="form-control"
												              id={`posologia` + index}
												              type="number"
												              placeholder=""
												              value={item} // Prop: The email input data
												              onChange={(e) => this.posologiaIndex(e, index)} // Prop: Puts data into state
												            />
														</div>
													</Col>

												</Row>
											);
										})
									}
								</Col>
							</Row>

							<Row>
								<button className="btn btn-primary my-3"  style={{width: "100%"}} type="button" onClick={this.adicionarInput} > Adicionar Outro Medicamento </button>
							</Row>
						</Col>
						

						<Col md="5">
							<Row className="my-3" style={{marginLeft: "auto", marginRight: "auto"}}>
								<Col md="4">
									<label> Matrícula </label>
								</Col>

								<Col md="8">
									<div>
										<input
										    className="form-control"
										    id="matricula"
										    name="matricula"
										    type="number"
										    placeholder=""
										    value={state.matricula} // Prop: The email input data
										    onChange={this.props.handleChange} // Prop: Puts data into state
										/>
									</div>								
								</Col>
							</Row>

							<Row className="my-3" style={{marginLeft: "auto", marginRight: "auto"}}>
								<Col md="4">
									<label> Atendimento </label>
								</Col>

								<Col md="8">
									<div>
										<input
										    className="form-control"
										    id="atendimento"
										    name="atendimento"
										    type="text"
										    placeholder=""
										    value={state.atendimento} // Prop: The email input data
										    onChange={this.props.handleChange} // Prop: Puts data into state
										/>
									</div>								
								</Col>
							</Row>

							<Row style={{marginLeft: "auto", marginRight: "auto"}}>
								<Col md="4">
									TOMOGRAFIA
								</Col>
								<Col md="2">
									<input
						            name="tomografia"
						            type="checkbox"
						            checked={state.tomografia}
						            onChange={this.tomografia} 
						         />
								</Col>

								<Col md="4">
									LABORÁTORIO
								</Col>
								<Col md="2">
									<input
						            name="laboratorio"
						            type="checkbox"
						            checked={state.laboratorio}
						            onChange={this.laboratorio} 
						         />
								</Col>
							</Row>

							<Row style={{marginLeft: "auto", marginRight: "auto"}}>
								<Col md="4">
									ECG
								</Col>
								<Col md="2">
									<input
						            name="ecg"
						            type="checkbox"
						            checked={state.ecg}
						            onChange={this.ecg} 
						         />
								</Col>

								<Col md="4">
									GASOMETRIA
								</Col>
								<Col md="2">
									<input
								        name="gasometria"
								        type="checkbox"
								        checked={state.gasometria}
								        onChange={this.gasometria} 
								    />
								</Col>
							</Row>

							{ state.gasometria 
								?
								<div>
									<Row className="my-3" style={{marginLeft: "auto", marginRight: "auto"}}>
										<Col md="2">
										   	PH
										</Col>

										<Col md="4">
										   	<input
										    	className="form-control"
										    	id="ph"
										    	name="ph"
										    	type="number"
										    	placeholder=""
										    	value={state.ph} // Prop: The email input data
										    	onChange={this.props.handleChange} // Prop: Puts data into state
										    />
										</Col>

										<Col md="2">
											PCO2
										</Col>

										<Col md="4">
										    <input
											    className="form-control"
											    id="pco2"
											    name="pco2"
											    type="number"
											    placeholder=""
											    value={state.pco2} // Prop: The email input data
											    onChange={this.props.handleChange} // Prop: Puts data into state
											/>
										</Col>
									</Row>

									<Row className="my-3" style={{marginLeft: "auto", marginRight: "auto"}}>
										<Col md="2">
											PO2
										</Col>

										<Col md="4">
										   	<input
											    className="form-control"
											    id="po2"
											    name="po2"
											    type="number"
											    placeholder=""
											    value={state.po2} // Prop: The email input data
											    onChange={this.props.handleChange} // Prop: Puts data into state
											/>
										</Col>

										<Col md="2">
											BE
										</Col>

										<Col md="4">
										   	<input
											    className="form-control"
											    id="be"
											    name="be"
											    type="number"
											    placeholder=""
											    value={state.be} // Prop: The email input data
											    onChange={this.props.handleChange} // Prop: Puts data into state
										    />
										</Col>
									</Row>

									<Row className="my-3" style={{marginLeft: "auto", marginRight: "auto"}}>
										<Col md="2">
											HCO3
										</Col>

										<Col md="4">
										   	<input
										        className="form-control"
										        id="hco3"
										        name="hco3"
										        type="number"
										        placeholder=""
										        value={state.hco3} // Prop: The email input data
										        onChange={this.props.handleChange} // Prop: Puts data into state
										    />
										</Col>
									</Row>
								</div>
							: null
						}

							
						</Col>

						<Col md="3">

							<Row className="my-3">
								<Col md="8">
									<Row>
										<label htmlFor="name"> AVC ISQUEMICO: </label>
									</Row>
								</Col>
								<Col md="auto">
										<input
									        name="avcIsquemico"
									        type="checkbox"
									        checked={state.avcIsquemico}
									        onChange={this.avcIsquemico} 
									    />
								</Col>
							</Row>

							<Row className="my-3">
								<Col md="8">
									<Row>
										<label htmlFor="name"> AVC HEMORRAGICO: </label>
									</Row>
								</Col>
								<Col md="auto">
									<input
									    name="avcHemorragico"
									    type="checkbox"
									    checked={state.avcHemorragico}
									    onChange={this.avcHemorragico} 
									/>
								</Col>
							</Row>

							<Row>
								<Col md="8">
									<Row>
										<label htmlFor="name"> ACIDENTE ISQUEMICO TRANSITÓRIO: </label>
									</Row>
								</Col>
									<Col md="auto">
										<input
								            name="acidenteIsquemicoTransitorio"
								            type="checkbox"
								            checked={state.acidenteIsquemicoTransitorio}
								            onChange={this.acidenteIsquemicoTransitorio} 
								         />
							        </Col>
							</Row>
									
						</Col>
					</Row>
				</Container>

			</div>
		);
	}
}


export default Step5;