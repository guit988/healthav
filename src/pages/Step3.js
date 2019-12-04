import React from 'react';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import MaskedInput from 'react-text-mask';

class Step3 extends React.Component {

	constructor(props) {
		super(props);
	}

	caretaSorriso = event => {

	    const evento = {
	      target: {
	        'name': 'caretaSorriso',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);

   }

   pressaoManual = event => {

   	 	const evento = {
	      target: {
	        'name': 'pressaoManual',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento); 	
   }

   forcaDoBraco = event => {
   		const evento = {
	      target: {
	        'name': 'forcaDoBraco',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   alteracaoNaFala = event => {
   		const evento = {
	      target: {
	        'name': 'alteracaoNaFala',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   alteracaoNaMarcha = event => {
   		const evento = {
	      target: {
	        'name': 'alteracaoNaMarcha',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   perdaDeForca = event => {
   		const evento = {
	      target: {
	        'name': 'perdaDeForca',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   dorDeCabeca = event => {
   		const evento = {
	      target: {
	        'name': 'dorDeCabeca',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   alteracaoNaVisao = event => {
   		const evento = {
	      target: {
	        'name': 'alteracaoNaVisao',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }

   vertigem = event => {
   		const evento = {
	      target: {
	        'name': 'vertigem',
	        'value': event.target.value
	      }
	    }

	    this.props.handleChange(evento);
   }



	render() {

		if (!this.props.relatorio)
			 if (this.props.currentStep !== 3) { // Prop: The current step
			 	return null
			 }

		const state = this.props.state;

		return(
			<div className="form-group">
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
								<label htmlFor="name">ASSIMETRIA OBVIA</label>
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
								<label htmlFor="name">TRIAGEM NEUROLÓGICA: Início súbito</label>
							</div>
						</Col>
					</Row>
					
					<Row>
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
						        		<label htmlFor="name">IGUAL</label>
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
						        		<label htmlFor="name">DIREITA FRACA</label>
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
						        		<label htmlFor="name">ESQUERDA FRACA</label>
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
						        		<label htmlFor="name">AMBOS FRACOS</label>
						        	</div>
						        </Col>
							</Row>

							<Row>
								<Col md="4">
						        	<label htmlFor="name">CARETA/SORRISO</label>
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
					                    <input type="radio" value="Igual"  className="form-check-input"
					                                  checked={state.caretaSorriso === 'Igual'} 
					                                  onChange={this.caretaSorriso} />
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
					                    <input type="radio" value="DireitaFraca"  className="form-check-input"
					                                  checked={state.caretaSorriso === 'DireitaFraca'} 
					                                  onChange={this.caretaSorriso} />
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
					                    <input type="radio" value="EsquerdaFraca"  className="form-check-input"
					                                  checked={state.caretaSorriso === 'EsquerdaFraca'} 
					                                  onChange={this.caretaSorriso} />
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
					                    <input type="radio" value="AmbosFracos"  className="form-check-input"
					                                  checked={state.caretaSorriso === 'AmbosFracos'} 
					                                  onChange={this.caretaSorriso} />
					                  </label>
					                </div>
						        </Col>

							</Row>

						<Row>
							<Col md="4">
					        	<label htmlFor="name">PRESSÃO MANUAL</label>
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
				                    <input type="radio" value="Igual"  className="form-check-input"
				                                  checked={state.pressaoManual === 'Igual'} 
				                                  onChange={this.pressaoManual} />
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
				                    <input type="radio" value="DireitaFraca"  className="form-check-input"
				                                  checked={state.pressaoManual === 'DireitaFraca'} 
				                                  onChange={this.pressaoManual} />
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
				                    <input type="radio" value="EsquerdaFraca"  className="form-check-input"
				                                  checked={state.pressaoManual === 'EsquerdaFraca'} 
				                                  onChange={this.pressaoManual} />
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
				                    <input type="radio" value="AmbosFracos"  className="form-check-input"
				                                  checked={state.pressaoManual === 'AmbosFracos'} 
				                                  onChange={this.pressaoManual} />
				                  </label>
				                </div>
					        </Col>
						</Row>

						<Row>
							<Col md="4">
					        	<label htmlFor="name">FORÇA DO BRAÇO</label>
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
				                    <input type="radio" value="Igual"  className="form-check-input"
				                                  checked={state.forcaDoBraco === 'Igual'} 
				                                  onChange={this.forcaDoBraco} />
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
				                    <input type="radio" value="DireitaFraca"  className="form-check-input"
				                                  checked={state.forcaDoBraco === 'DireitaFraca'} 
				                                  onChange={this.forcaDoBraco} />
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
				                    <input type="radio" value="EsquerdaFraca"  className="form-check-input"
				                                  checked={state.forcaDoBraco === 'EsquerdaFraca'} 
				                                  onChange={this.forcaDoBraco} />
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
				                    <input type="radio" value="AmbosFracos"  className="form-check-input"
				                                  checked={state.forcaDoBraco === 'AmbosFracos'} 
				                                  onChange={this.forcaDoBraco} />
				                  </label>
				                </div>
					        </Col>
						</Row>
					</Col>

					<Col md="6">
						<Row>
							<Col md="4">
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
									<label htmlFor="name"> SIM </label>
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
									<label htmlFor="name"> NÃO </label>
								</div>
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> ALTERAÇÃO NA FALA: </label>
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
						                <input type="radio" value="Sim"  className="form-check-input"
						                    checked={state.alteracaoNaFala === 'Sim'} 
						                    onChange={this.alteracaoNaFala} />
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
						                <input type="radio" value="Nao"  className="form-check-input"
						                    checked={state.alteracaoNaFala === 'Nao'} 
						                    onChange={this.alteracaoNaFala} />
						            </label>
					            </div>
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> ALTERAÇÃO NA MARCHA: </label>
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
						                <input type="radio" value="Sim"  className="form-check-input"
						                    checked={state.alteracaoNaMarcha === 'Sim'} 
						                    onChange={this.alteracaoNaMarcha} />
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
						                <input type="radio" value="Nao"  className="form-check-input"
						                    checked={state.alteracaoNaMarcha === 'Nao'} 
						                    onChange={this.alteracaoNaMarcha} />
						            </label>
					            </div>
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> PERDA DE FORÇA MOTORA DE UM LADO/FORMIGAMENTO: </label>
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
						                <input type="radio" value="Sim"  className="form-check-input"
						                    checked={state.perdaDeForca === 'Sim'} 
						                    onChange={this.perdaDeForca} />
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
						                <input type="radio" value="Nao"  className="form-check-input"
						                    checked={state.perdaDeForca === 'Nao'} 
						                    onChange={this.perdaDeForca} />
						            </label>
					            </div>
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> DOR DE CABEÇA: </label>
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
						                <input type="radio" value="Sim"  className="form-check-input"
						                    checked={state.dorDeCabeca === 'Sim'} 
						                    onChange={this.dorDeCabeca} />
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
						                <input type="radio" value="Nao"  className="form-check-input"
						                    checked={state.dorDeCabeca === 'Nao'} 
						                    onChange={this.dorDeCabeca} />
						            </label>
					            </div>
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> ALTERAÇÃO NA VISÃO: </label>
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
						                <input type="radio" value="Sim"  className="form-check-input"
						                    checked={state.alteracaoNaVisao === 'Sim'} 
						                    onChange={this.alteracaoNaVisao} />
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
						                <input type="radio" value="Nao"  className="form-check-input"
						                    checked={state.alteracaoNaVisao === 'Nao'} 
						                    onChange={this.alteracaoNaVisao} />
						            </label>
					            </div>
							</Col>
						</Row>

						<Row>
							<Col md="4">
								<label htmlFor="name"> VERTIGEM: </label>
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
						                <input type="radio" value="Sim"  className="form-check-input"
						                    checked={state.vertigem === 'Sim'} 
						                    onChange={this.vertigem} />
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
						                <input type="radio" value="Nao"  className="form-check-input"
						                    checked={state.vertigem === 'Nao'} 
						                    onChange={this.vertigem} />
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


export default Step3;