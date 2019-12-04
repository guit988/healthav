import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import {Table, Container, Row, Col} from 'react-bootstrap';
import firebase from '../config/firebase';
import Logo from '../component/logo';
import { ClipLoader } from 'react-spinners';
import ReactToPrint from 'react-to-print';	

const options = {
    orientation: [210, 297],
};

const ref = React.createRef();

class DiagnosticoPorPeriodo extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			dat1: new Date('1970-01-01') - 0,
			dat2: new Date() - 0,
			contM: 0,
			contF: 0,
			avcHemorragicoM: 0,
			avcIsquemicoM: 0,
			acidenteIsquemicoTransitorioM: 0,
			avcHemorragicoF: 0,
			avcIsquemicoF: 0,
			acidenteIsquemicoTransitorioF: 0,
			contTotal: 0,
			pacientes: [],
			cont: 0,
			carregando: false,
		}

		this.handleChange = this.handleChange.bind(this);
		this.receberDoBD = this.receberDoBD.bind(this);

	}

	async receberDoBD() {
		var ref = firebase.database().ref("dados/");
		var cont = 0;
		var AvcIsquemicoContM = 0;
		var AvcHemorragicoContM = 0;
		var AcidenteIsquemicoTransitorioContM = 0;
		var AvcIsquemicoContF = 0;
		var AvcHemorragicoContF = 0;
		var AcidenteIsquemicoTransitorioContF = 0;
		var contF = 0;
		var arrayPacientesM = [];
		var arrayPacientesF = [];
		var arrayIdDoObjeto = [];
		this.setState({carregando: true})

		ref.orderByChild('dataDeChegada').startAt(this.state.dat1).endAt(this.state.dat2+ 86400001).once('value').then( function(snapshot) {

			if(snapshot.val() === null) {
				this.setState({cont: cont, carregando: false})
				return alert('Não foi encontrado')
			}

			snapshot.forEach(function(childSnapshot) {
				console.log(childSnapshot.key);
				if (childSnapshot.val().sexo === "M") {
					if (childSnapshot.val().avcHemorragico)
						AvcHemorragicoContM++;
					if (childSnapshot.val().avcIsquemico)
						AvcIsquemicoContM++;
					if(childSnapshot.val().acidenteIsquemicoTransitorio)
						AcidenteIsquemicoTransitorioContM++;
				} else {
					if (childSnapshot.val().sexo === "F") {
						if (childSnapshot.val().avcHemorragico)
							AvcHemorragicoContF++;
						if (childSnapshot.val().avcIsquemico)
							AvcIsquemicoContF++;
						if(childSnapshot.val().acidenteIsquemicoTransitorio)
							AcidenteIsquemicoTransitorioContF++;
					}
				}
				cont++;	
			}.bind(this))

			this.setState({cont: cont, carregando: false, 
				avcHemorragicoM: AvcHemorragicoContM, avcIsquemicoM: AvcIsquemicoContM, acidenteIsquemicoTransitorioM: AcidenteIsquemicoTransitorioContM,
				avcHemorragicoF: AvcHemorragicoContF, avcIsquemicoF: AvcIsquemicoContF, acidenteIsquemicoTransitorioF: AcidenteIsquemicoTransitorioContF,
			})

		}.bind(this)).catch( erro => {
			console.log(erro)
			alert('Problema de conexão, verifique sua internet !');
		})
	}

	handleChange(event) {
    	var {name, value} = event.target;

    	value = new Date(value) - 0;
    	this.setState({
      		[name]: value
    	})    
  	}

	render() {
	  return (
	    <div>
	      <Logo />
	      <Container className="my-3 mx-3 float-left">
	    		<Row className="my-2">
	    			Defina o período da sua busca.
	    		</Row>

	    		<Row>
	    			<div className="my-auto">
	    				Periodo: 
	    			</div>
	    			<Col>
	    				<input name="dat1" type="date" className="form-control" onChange={this.handleChange} />
	    			</Col>
	    			<div className="my-auto">
	    			à
	    			</div>
	    			<Col>
	    				<input name="dat2" type="date" className="form-control" onChange={this.handleChange} />
	    			</Col>
	    			<Col>
	    				<button type="button" onClick={this.receberDoBD} className="btn btn-primary"> Buscar </button>
	    			</Col>
	    		</Row>

	    	</Container>

	    	{this.state.carregando ?
	    		<div style={{width: '1024px'}}>
	    			<center>
	                    <ClipLoader
	                        sizeUnit={"px"}
	                        size={50}
	                        color={'#123abc'}
	                    />
	                </center>
                </div>
                : null }

		{this.state.cont > 0 ?
		<div style={{width: '1024px'}}>
			<Container>
				<div ref={el => (this.componentRef = el)} style={{width: '1024px'}}>
		      			<Table striped bordered hover>
							<div className="m-2">
				      			{`Período: ${new Date(this.state.dat1 + 86400000).getDate()}/${new Date(this.state.dat1 + 86400001).getMonth() + 1}/${new Date(this.state.dat1 + 86400001).getFullYear()} 
				      			à ${new Date(this.state.dat2 + 86400000).getDate()}/${new Date(this.state.dat2 + 86400001).getMonth() + 1}/${new Date(this.state.dat2 + 86400001).getFullYear()}.`}
		      				</div>
		      			</Table>
				        <Table striped bordered hover className="text-center">
						  <thead>
						    <tr>
						      <th></th>
						      <th>AVC ISQUEMICO</th>
						      <th>AVC HEMORRAGICO</th>
						      <th>ACIDENTE ISQUEMICO TRANSITÓRIO</th>
						      
						    </tr>
						  </thead>
						  <tbody>
						  	<tr>
						  		<td>Sexo M</td>
						  		<td>{this.state.avcIsquemicoM}</td>
						  		<td>{this.state.avcHemorragicoM}</td>
						  		<td>{this.state.acidenteIsquemicoTransitorioM}</td>
						  	</tr>
						  	<tr>
						  		<td>Sexo F</td>
						  		<td>{this.state.avcIsquemicoF}</td>
						  		<td>{this.state.avcHemorragicoF}</td>
						  		<td>{this.state.acidenteIsquemicoTransitorioF}</td>
						  	</tr>
						  	<tr>
						  		<td>Total</td>
						  		<td>{this.state.avcIsquemicoM + this.state.avcIsquemicoF}</td>
						  		<td>{this.state.avcHemorragicoM + this.state.avcHemorragicoF}</td>
						  		<td>{this.state.acidenteIsquemicoTransitorioM + this.state.acidenteIsquemicoTransitorioF}</td>
						  	</tr>
						  	{this.state.pacientes.map((item, index) => {
						  		return (<tr key={index}>
						  			<td> {item.matricula} </td>
						  			<td> {item.atendimento} </td>
						  			<td> {item.nome} </td>
						  			<td> {item.idade} </td>
						  			<td> {item.sexo} </td>
						  		</tr> );
						  	})}
						  </tbody>
						</Table>
						<Table striped bordered hover>
							<div className="m-2">
				      			{`Busca realizada em ${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()} às ${new Date().getHours()}:${new Date().getMinutes()} hrs.`}
				      			<br />
				      			{`Total: ${this.state.cont} pacientes.`}
				      		
				      		</div>
		      			</Table>
			  </div>
				 <ReactToPrint
				 trigger={() =>{ 
				 	return (
			        	<a>
			            	<button type="button" className="btn my-2 btn-primary float-right"> Imprimir Relatório </button>
			            </a>)}}
		          content={() => this.componentRef}
		        />
			</Container>
		</div>
		: null

	     }	      	
		  
	    </div>
	  );		
	}

}

export default DiagnosticoPorPeriodo;