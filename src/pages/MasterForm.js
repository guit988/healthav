import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image';

import Logo from '../component/logo';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

import {Link, Redirect} from 'react-router-dom';

import firebase from '../config/firebase';
import 'firebase/auth';

import { connect } from 'react-redux';


class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values

    if (props.editar == undefined)
      this.state = {
        currentStep: 1, // Default is Step 1
        ultimapagina: 5,
        nome: '',
        idade: '',
        dataDeChegada:  new Date(),
        horarioDeChegada: '',
        dataDeNascimento:  new Date(),
        sexo: '',
        profissao: '',
        escolaridade: '',
        nacionalidade: '',
        naturalidade: '',
        uf: 'CE',
        estadoCivil: '',
        nomdeDoPai: '',
        nomdeDaMae: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        //ufDosPais: '',
        cep: '',
        telefone: '',
        descDoAcolhimento: '',
        pa1: '',
        pa2: '',
        fc: '',
        fr: '',
        glicemiaCapilar: '',
        spo2: '',
        ao: '',
        rv: '',
        rm: '',
        sintomas: '',
        classificaoDeRisco: '',
        horarioDaClassificacao: '',
        caretaSorriso: '',
        pressaoManual: '',
        forcaDoBraco: '',
        alteracaoNaFala: '',
        alteracaoNaMarcha: '',
        perdaDeForca: '',
        dorDeCabeca: '',
        alteracaoNaVisao: '',
        vertigem: '',
        cardiopata: false,
        diabetes: false,
        has: false,
        icc: false,
        sequelaDeAvc: false,
        desSequelaDeAvc: '',
        tabagismo: false,
        etilismo: false,
        cirurgiaAnterior: false,
        desCirurgiaAnterior: '',
        drogas: false,
        ist: '',
        desIst: '',
        alergia: false,
        desAlergia: '',
        historiaDeConvOuEpile: '',
        duracaoDosSintomas: '',
        cadeiraDeRodas: '',
        glicemiaCapilar60e400: '',
        farmaco: [""],
        posologia: [""],
        matricula: '',
        atendimento: '',
        tomografia: false,
        laboratorio: false,
        gasometria: false,
        ph: '',
        pco2: '',
        po2: '',
        be: '',
        hco3: '',
        ecg: false,
        avcIsquemico: false,
        avcHemorragico: false,
        acidenteIsquemicoTransitorio: false,
      }
    else
      this.state = {...props.editar, currentStep: 1, ultimapagina: 5, dataDeChegada: new Date(props.editar.dataDeChegada), dataDeNascimento: new Date(props.editar.dataDeNascimento)}



    this.initialState = this.state;

    // Bind the submission to handleChange() 
    this.handleChange = this.handleChange.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
    this.enviar = this.enviar.bind(this);
    this.editar = this.editar.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })    
  }
  
  // Trigger an alert on form submission
  handleSubmit(event) {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
  }

  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep > (this.state.ultimapagina - 1)? this.state.ultimapagina : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  get previousButton() {
  let currentStep = this.state.currentStep;
  // If the current step is not 1, then render the "previous" button
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Voltar
      </button>
    )
  }
  // ...else return nothing
  return null;
}

enviar() {

  if((this.state.matricula === "") || (this.state.atendimento === ""))
    return alert("Campo de matricula e atendimento são obrigatórios");

  var copia = this.state;


  delete copia.currentStep;
  delete copia.ultimapagina;

  var ageDifMs = this.state.dataDeChegada - this.state.dataDeNascimento;
  var ageDate = new Date(ageDifMs);
  copia.idade = Math.abs(ageDate.getUTCFullYear() - 1970);
  copia.dataDeChegada = this.state.dataDeChegada - 0;
  copia.dataDeNascimento = this.state.dataDeNascimento - 0;


  firebase
    .database()
    .ref(`dados`)
    .push(copia)
    .then(() => { 

      this.setState(this.initialState)
      alert('deu certo o envio')}
      )
    .catch(erro => { console.log(erro.message)})
}

editar() {

  var copia = this.state;

  delete copia.currentStep;
  delete copia.ultimapagina;

  var ageDifMs = this.state.dataDeChegada - this.state.dataDeNascimento;
  var ageDate = new Date(ageDifMs);
  copia.idade = Math.abs(ageDate.getUTCFullYear() - 1970);
  copia.dataDeChegada = this.state.dataDeChegada - 0;
  copia.dataDeNascimento = this.state.dataDeNascimento - 0;


  firebase
    .database()
    .ref(`dados/${this.props.idDoObjeto}`)
    .set(copia)
    .then(() => { 
      alert('Editado com Sucesso');
    }
    )
    .catch(erro => { console.log(erro.message)})
}

get nextButton() {
  let currentStep = this.state.currentStep;
  // If the current step is not 3, then render the "next" button
  if(currentStep < this.state.ultimapagina) {
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Próximo
      </button>        
    )
  } else {

    if (this.props.editar == undefined)
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this.enviar}>
        Enviar
        </button>  
      );
    else
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this.editar}>
        Editar
        </button>  
      );

  }
  // ...else render nothing
  return null;
 }

 verState = evento => {
    console.log(this.state);
 }

  render() {    

    const {usuarioLogado} = this.props;
    return (
      <React.Fragment>

      {//usuarioLogado === 0 ? <Redirect to="/" /> : null
      }

      {this.props.editar == undefined ? <Logo /> : null }

      <form>
      
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          state={this.state}
        />

        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          state={this.state}
        />

        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          state={this.state}
        />

        <Step4 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          state={this.state}
        />

        <Step5
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          state={this.state}
        />

        <Container className="my-1">
          {this.previousButton}
          {this.nextButton}
        </Container>
      </form>


      {/*<button type="button" onClick={this.verState}> ver state </button> */}
      </React.Fragment>
    )
  }
  
  // Render UI will go here...
}

const mapStateToProps = state => {
    const {usuarioLogado} = state;

    return { usuarioLogado: usuarioLogado}
}

export default connect( mapStateToProps,  null)(MasterForm);

/*
      <p>Step {this.state.currentStep} </p> 

*/
