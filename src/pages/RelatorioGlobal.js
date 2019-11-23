import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import {Table, Container, Row, Col} from 'react-bootstrap';
import firebase from '../config/firebase';
import Logo from '../component/logo';
import { ClipLoader } from 'react-spinners';

const options = {
    orientation: [210, 297],
};

const ref = React.createRef();

class RelatorioGlobal extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			dat1: new Date('1970-01-01') - 0,
			dat2: new Date() - 0,
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
		var arrayPacientes = [];
		var arrayIdDoObjeto = [];
		this.setState({carregando: true})

		ref.orderByChild('dataDeChegada').startAt(this.state.dat1).endAt(this.state.dat2+ 86400001).once('value').then( function(snapshot) {

			if(snapshot.val() === null) {
				this.setState({pacientes: arrayPacientes, cont: cont, carregando: false})
				return alert('Não foi encontrado')
			}

			snapshot.forEach(function(childSnapshot) {
				console.log(childSnapshot.key);
				arrayPacientes.push(childSnapshot.val());
				cont++;	
			}.bind(this))

			this.setState({pacientes: arrayPacientes, cont: cont, carregando: false})

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
	      <Container className="my-3 mx-3 float-left">
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

	    		<Row>
	    			<Col>

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
                :
		      <div ref={ref} style={{width: '1024px'}}>
		      	<Container>
		      			<Table striped bordered hover>
							<div className="m-2">
				      			{`Período: ${new Date(this.state.dat1 + 86400000).getDate()}/${new Date(this.state.dat1 + 86400001).getMonth() + 1}/${new Date(this.state.dat1 + 86400001).getFullYear()} 
				      			à ${new Date(this.state.dat2 + 86400000).getDate()}/${new Date(this.state.dat2 + 86400001).getMonth() + 1}/${new Date(this.state.dat2 + 86400001).getFullYear()}.`}
		      				</div>
		      			</Table>
				        <Table striped bordered hover>
						  <thead>
						    <tr>
						      <th>Matricula</th>
						      <th>Atendimento</th>
						      <th>Nome</th>
						      <th>Idade</th>
						      <th>Sexo</th>
						    </tr>
						  </thead>
						  <tbody>
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
						  <tbody>
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
		      	</Container>
			</div> }

		{this.state.cont > 0 ?
		<div style={{width: '1024px'}}>
			<Container>
				<Pdf targetRef={ref} filename="relatorio.pdf" options={options} x="0" y="0">
					{({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Gerar Relatorio em PDF</button>}
				</Pdf>
			</Container>
		</div>
		: null

	     }	      	
		  
	    </div>
	  );		
	}

}

export default RelatorioGlobal;