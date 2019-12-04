import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import MaskedInput from 'react-text-mask';

class Step2 extends React.Component {

	classificaoDeRisco = event => {
   		const evento = {
	      target: {
	        'name': 'classificaoDeRisco',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   sintomas = event => {
   		const evento = {
	      target: {
	        'name': 'sintomas',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

	render() {

		if (!this.props.relatorio)
			 if (this.props.currentStep !== 2) { // Prop: The current step
			 	return null
			 }

		const state = this.props.state;

		return(
			<div className="form-group">
				<Container className="border p-3 rounded"> 
					<Row className="justify-content-md-center">
						<Col md = "auto">
							<div style={{fontWeight: 'bold'}}>
								<label htmlFor="name">DESCRIÇÃO DO ACOLHIMENTO</label>
							</div>
						</Col>
					</Row>
					
					<Row>
						<Col md="1">
				        	<label htmlFor="name">Descrição:</label>
				        </Col>
				        
				        <Col md="11">
				        	<input
				              className="form-control"
				              id="descricao"
				              name="descDoAcolhimento"
				              type="text"
				              placeholder="Descrição do Acolhimento"
				              value={state.descDoAcolhimento} // Prop: The email input data
				              onChange={this.props.handleChange} // Prop: Puts data into state
				            />
				        </Col>
					</Row>

					<Row className="justify-content-md-center my-3">
						<Col md="auto">
				        	<label htmlFor="name">PA:</label>
				        </Col>
						
						<Col md="1">
							<input
							    className="form-control"
							    id="descricao"
							    name="pa1"
							    type="number"
							    placeholder=""
							    value={state.pa1} // Prop: The email input data
							    onChange={this.props.handleChange} // Prop: Puts data into state
							/>
						</Col>
						x
						<Col md="1">
						     <input
						        className="form-control"
						        id="descricao"
						        name="pa2"
						        type="number"
						        placeholder=""
						        value={state.pa2} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />		
						</Col>
						
						<Col md = "auto">
							<label htmlFor="name">FC:</label>
						</Col>

						<Col md="1">
						     <input
						        className="form-control"
						        id="descricao"
						        name="fc"
						        type="number"
						        placeholder=""
						        value={state.fc} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />
						</Col>
						bpm

						<Col md = "auto">
							<label htmlFor="name">FR:</label>
						</Col>

						<Col md="1">
						     <input
						        className="form-control"
						        id="descricao"
						        name="fr"
						        type="number"
						        placeholder=""
						        value={state.fr} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />
						</Col>
						ipm
						
						<Col md = "1">
							<label htmlFor="name">Glicemia Capilar:</label>
						</Col>

						<Col md="1">
						     <input
						        className="form-control"
						        id="descricao"
						        name="glicemiaCapilar"
						        type="number"
						        placeholder=""
						        value={state.glicemiaCapilar} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />
						</Col>
						mg/Dl 

						<Col md = "auto">
							<label htmlFor="name">SPO2:</label>
						</Col>

						<Col md="1">
						     <input
						        className="form-control"
						        id="descricao"
						        name="spo2"
						        type="number"
						        placeholder=""
						        value={state.spo2} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />
						</Col>
						mg/Dl 
					</Row>

					<Row className="justify-content-md-center">
						<Col md = "auto">
							<div style={{fontWeight: 'bold'}}>
								<label htmlFor="name">ESCALA DE COMA DE GLASGOW</label>
							</div>
						</Col>
					</Row>
					<Row className="justify-content-md-center">
						<Col md = "auto">
							<label htmlFor="name">AO:</label>
						</Col>

						<Col md="1">
						     <input
						        className="form-control"
						        id="descricao"
						        name="ao"
						        type="number"
						        placeholder=""
						        value={state.ao} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />
						</Col>

						<Col md = "auto">
							<label htmlFor="name">RV:</label>
						</Col>

						<Col md="1">
						     <input
						        className="form-control"
						        id="rv"
						        name="rv"
						        type="number"
						        placeholder=""
						        value={state.rv} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />
						</Col>

						<Col md = "auto">
							<label htmlFor="name">RM:</label>
						</Col>

						<Col md="1">
						     <input
						        className="form-control"
						        id="rm"
						        name="rm"
						        type="number"
						        placeholder=""
						        value={state.rm} // Prop: The email input data
						        onChange={this.props.handleChange} // Prop: Puts data into state
						    />
						</Col>

						<Col md = "auto">
							<label htmlFor="name">Sintomas &lt; 4,5:</label>
						</Col>

						<Col md="auto">
							<label>
								SIM
							</label>
						</Col>

						<Col md="auto">
						    <label>
							    <input type="radio" value="SIM"  className="form-check-input"
						       		   checked={state.sintomas === 'SIM'} 
						               onChange={this.sintomas} />
							</label>
						</Col>

						<Col md="auto">
							<label>
								NÃO
							</label>
						</Col>

						<Col md="auto">
						    <label>
							    <input type="radio" value="NÃO"  className="form-check-input"
						       		   checked={state.sintomas === 'NÃO'} 
						               onChange={this.sintomas} />
							</label>
						</Col>
					</Row>

					<Row className="justify-content-md-center my-3">
						<Col md = "auto">
							<div style={{fontWeight: 'bold'}}>
								<label htmlFor="name">CLASSIFICAÇÃO DE RISCO</label>
							</div>
						</Col>
					</Row>
					
					<Row className="justify-content-md-center">
						<Col md = "auto">
						
							<label htmlFor="name">Nível:</label>

						</Col>
						<Col md="auto">
							<label>
								Vemelho
							</label>
						</Col>
						<Col md="auto">
						    <label>
							    <input type="radio" value="VERMELHO"  className="form-check-input"
						       		   checked={state.classificaoDeRisco === 'VERMELHO'} 
						               onChange={this.classificaoDeRisco} />
							</label>
						</Col>

						<Col md="auto">
							<label>
								Laranja
							</label>
						</Col>
						<Col md="auto">
						    <label>
							    <input type="radio" value="LARANJA"  className="form-check-input"
						       		   checked={state.classificaoDeRisco === 'LARANJA'} 
						               onChange={this.classificaoDeRisco} />
							     </label>
						</Col>

						<Col md="auto">
							<label>
								Amarelo
							</label>
						</Col>
						<Col md="auto">
						    <label>
							    <input type="radio" value="AMARELO"  className="form-check-input"
						       		   checked={state.classificaoDeRisco === 'AMARELO'} 
						               onChange={this.classificaoDeRisco} />
							     </label>
						</Col>

						<Col md="auto">
							<label>
								Verde
							</label>
						</Col>
						<Col md="auto">
						    <label>
							    <input type="radio" value="VERDE"  className="form-check-input"
						       		   checked={state.classificaoDeRisco === 'VERDE'} 
						               onChange={this.classificaoDeRisco} />
							     </label>
						</Col>

						<Col md="auto">
							<label>
								Azul
							</label>
						</Col>
						<Col md="auto">
						    <label>
							    <input type="radio" value="AZUL"  className="form-check-input"
						       		   checked={state.classificaoDeRisco === 'AZUL'} 
						               onChange={this.classificaoDeRisco} />
							     </label>
						</Col>
				</Row>
					

					<Row className="justify-content-md-center mt-3">
						<Col md="auto">
				          <label htmlFor="name"> Horário de Classificação: </label>
				        </Col>

				        <Col md="2">
				          <input
				              className="form-control"
				              id="horarioDaClassificacao"
				              name="horarioDaClassificacao"
				              type="time"
				              placeholder=""
				              value={state.horarioDaClassificacao} // Prop: The email input data
				              onChange={this.props.handleChange} // Prop: Puts data into state
				            />
				        </Col>
					</Row>
				</Container>
			</div>
		);
	}
}


export default Step2;