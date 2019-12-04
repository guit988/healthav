import React from 'react';

import '../css/verRelatorio.css';

import MasterForm from '../pages/MasterForm';
import Logo from '../component/logo';
import {Container, Row, Col} from 'react-bootstrap';
import ReactToPrint from 'react-to-print';	

import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import firebase from '../config/firebase';

class VerRelatorioIndividual extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			atualiza: 0,
			search: '',
			carregando: '',
			snapshot: null,
			mostrar: true,
			state: null, 
		    idDoObjeto: null,
		    cont: 0,
		    selecionado: null,
		    relatorio: this.props.match.params.func === "relatorio",
		}

		//this.procuraDoBD = this.procuraDoBD.bind(this);

		this.selecionarAtendimento = this.selecionarAtendimento.bind(this);

		this.receberDoBD = this.receberDoBD.bind(this);

		//this.snapshotToObject = this.snapshotToObject.bind(this);

		this.receberDoBD();
	}

	verSeEnumero(a) {
		return !isNaN(a);
	}


	receberDoBD() {

		this.setState({state: null, selecionado: null, cont: 0});

		if (this.state.search == "")
			return;

		var copia = this.state.state;
		var cont = 0;
		var arrayPacientes = [];
		var arrayIdDoObjeto = [];

		var ref = firebase.database().ref("dados");

		if (this.verSeEnumero(this.state.search))
			ref.orderByChild('matricula').equalTo(`${this.state.search}`).once('value').then( function(snapshot) {

				if(snapshot.val() === null) {
					this.setState({state: null, selecionado: null, cont: 0});
					return alert('Não foi encontrado paciente com esta matricula')
				}

				snapshot.forEach(function(childSnapshot) {
					console.log(childSnapshot.key);
					arrayPacientes.push(childSnapshot.val());
					arrayIdDoObjeto.push(childSnapshot.key);
					cont++;	
				}.bind(this))

				this.setState({state: arrayPacientes, idDoObjeto: arrayIdDoObjeto, cont: cont})

			}.bind(this)).catch( erro => {
				console.log(erro)
				alert('Problema de conexão, verifique sua internet !');
			})
		else
			ref.orderByChild('nome').equalTo(`${this.state.search}`).once('value').then( function(snapshot) {

				if(snapshot.val() === null) {
					this.setState({state: null, selecionado: null});
					return alert('Não foi encontrado paciente com esta matricula')
				}

				snapshot.forEach(function(childSnapshot) {
					console.log(childSnapshot.key);
					arrayPacientes.push(childSnapshot.val());
					arrayIdDoObjeto.push(childSnapshot.key);
					cont++;	
				}.bind(this))

				this.setState({state: arrayPacientes, idDoObjeto: arrayIdDoObjeto, cont: cont})

			}.bind(this)).catch( erro => {
				console.log(erro)
				alert('Problema de conexão, verifique sua internet !');
			})
	}

	selecionarAtendimento(index) {
		console.log(index);
		this.setState({selecionado: index})
	}

	imprimirFormulario() {

		if (this.state.selecionado === null) {

			if (this.state.cont == 1)
				return <MasterForm relatorio={this.state.relatorio} editar={this.state.state[0]} idDoObjeto={this.state.idDoObjeto[0]} atualizaState={this.atualizaState}/>
			else {
				return (
				<div>
					<center>
						<div> Paciente encontrado com mais de um atendimento. </div>
						<br/>
						<div> Selecione o atendimento </div>
						{
							this.state.state.map((alignItems, index) => {
								console.log(index);
								return <button type="button" key={index} onClick={ (e) => this.selecionarAtendimento(index)} className="btn btn-primary mx-2"> {this.state.state[index].atendimento} </button>
							})
						}
					</center>
				</div>
				)
			}
		}
		else {
			return <MasterForm relatorio={this.state.relatorio} editar={this.state.state[0]} idDoObjeto={this.state.idDoObjeto[0]} atualizaState={this.atualizaState}/>
		}
	}

	render() {

    	const {usuarioLogado} = this.props;

		return (

			<div ref={el => (this.componentRef = el)}>
				<Logo classeDaLogo={this.mostrar ? "d-flex justify-content-center" : "d-flex justify-content-center my-4"}/>
      			{//usuarioLogado === 0 ? <Redirect to="/" /> : null}
				}
				{
					this.state.mostrar ?
						<Container>
							<Row className="my-5">
								<Col>
									<div className="input-group md-form form-sm form-2 pl-0">
									  <input className="form-control my-0 py-1 lime-border" 
									  onChange={(e) => this.setState({search: e.target.value})} 
									  type="text" onKeyPress={event => {
												                if (event.key === 'Enter') {
												                  this.receberDoBD();
												                }
												              }}
									  placeholder="Para editar um paciente pesquise pelo seu numero de matricula ou nome completo." aria-label="Search"/>
									  <div className="input-group-append">
									    <button type="button" onClick={this.receberDoBD} className="btn btn-primary input-group-text lime lighten-2" id="basic-text1"><i className="fas fa-search text-grey"
									        aria-hidden="true"></i></button>
									  </div>
									</div>
								</Col>
							</Row>
						</Container> : null
				}

				{this.state.state === null  ? 
					<div className="container">
						<div className="row  my-3">
							<div className="col" 
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
							> 
								Aqui você poderá buscar por um paciente especifíco digitando seu numero de matricula e clicando no botão de busca.
							</div> 
						</div>
						<div className="row">
							<div className="col"
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
							>
								{ this.state.relatorio 
								? <div>{`Faça uma busca por Nome Completo do Paciente ou pelo seu número de Matricula, e após isso imprima a ficha pessoal do paciente.`} </div>
								: <div>{`Caso queira, você poderá editar os dados chegando até o final do formulário e clicando no botão editar.`} </div>
								}
							</div>
						</div>
					</div>
				 :
					((this.state.selecionado === null) || (this.state.state[this.state.selecionado].matricula === this.state.search) || (this.state.state[this.state.selecionado].nome === this.state.search)) 
					? 
						this.imprimirFormulario() 
					:
					<div className="row  my-3">
							<div className="col" 
								style={{
								    display: "flex",
								    justifyContent: "center",
								    alignItems: "center",
									}}
							> 
								{ this.state.relatorio 
								? <div>{`Faça uma busca por Nome Completo do Paciente ou pelo seu número de Matricula, e após isso imprima a ficha pessoal do paciente.`} </div>
								: <div>{`Caso queira, você poderá editar os dados chegando até o final do formulário e clicando no botão editar.`} </div>
								}
							</div> 
						</div>
				}

				{
					(this.state.relatorio && this.state.mostrar && this.state.state !== null) ?
						<Container>
			                <ReactToPrint
			                    trigger={() =>{ 

			                    	return (
			                    			<button type="button" 
			                    			className="btn my-2 btn-primary float-right"> Imprimir Relatorio </button>
			                    		)}}
			                    content={async () =>{ 
			                    	await this.setState({mostrar: false})
			                    	const print = window.print();
			                    	this.setState({mostrar: true}); 
			                    	return print;
			                    }}
			                />
			            </Container>
					:
						null
				}
			</div>
		);
	}
}


const mapStateToProps = state => {
    const {usuarioLogado} = state;

    return { usuarioLogado: usuarioLogado}
}

export default connect( mapStateToProps,  null)(VerRelatorioIndividual); 