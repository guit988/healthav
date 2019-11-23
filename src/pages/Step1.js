import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt-BR';

import MaskedInput from 'react-text-mask';

registerLocale('pt', pt);

class Step1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      listaEstados: require('../component/estadosCidades.json')
    }

  }

  decidirCidadesPorUf(uf){
    if (this.props.state.uf === '' || this.props.state.uf === 'EX')
      return [];
    var lista = this.state.listaEstados.estados;
    var i;

    for (i = 0; ;i++)
      if (lista[i].sigla === uf)
        break;

    return lista[i].cidades;
  }

  dataDeNascimento = date => {

    const evento = {
      target: {
        'name': 'dataDeNascimento',
        'value': date,
      }
    }

   // console.log(event)
    this.props.handleChange(evento);
   }

   dataDeChegada = date => {
     
     const evento = {
      target: {
        'name': 'dataDeChegada',
        'value': date,
      }
    }

   // console.log(event)
    this.props.handleChange(evento);
   }

   mudaSexo = event => {

    const evento = {
      target: {
        'name': 'sexo',
        'value': event.target.value
      }
    }

    this.props.handleChange(evento);

   }


  render(props) {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }

    let state = this.props.state;

    // The markup for the Step 1 UI
    return(
      <div className="form-group">
      <Container className="border p-3 rounded">
        <Row>
          <Col md="1">
            <label htmlFor="name">Nome:</label>
          </Col>
          <Col md="11">
            <input
              className="form-control"
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome Completo"
              value={state.nome} // Prop: The email input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </Col>
        </Row>
      <br/>
       <Row>
         <Col md="2">
            <label htmlFor="name"> Data de Nascimento: </label>
          </Col>
          <Col md="2">
            <DatePicker
              className="form-control"
              selected={state.dataDeNascimento}
              onChange={this.dataDeNascimento}
              locale="pt"
              dateFormat='dd/MM/yyyy'
            />
          </Col>

        <Col md="2">
          <label htmlFor="name"> Data de Chegada: </label>
        </Col>
        <Col md="2">
          <DatePicker
            className="form-control"
            selected={state.dataDeChegada}
            onChange={this.dataDeChegada}
            locale="pt"
            dateFormat='dd/MM/yyyy'
          />
        </Col>

        <Col md="2">
          <label htmlFor="name"> Horário de Chegada: </label>
        </Col>
        <Col md="2">
          <input
              className="form-control"
              id="horarioDeChegada"
              name="horarioDeChegada"
              type="time"
              placeholder=""
              value={state.horarioDeChegada} // Prop: The email input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
        </Col>
       </Row>
       
       <br/>

       <div>
         <Row className="show-grid">
           <Col md="1">
              <label htmlFor="name"> Sexo: </label>
           </Col>
            <Col md="1">
                <div className="form-check">
                  <label>
                    <input type="radio" value="M"  className="form-check-input"
                                  checked={state.sexo === 'M'} 
                                  onChange={this.mudaSexo} />
                    M
                  </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                  <label>
                    <input type="radio" value="F" className="form-check-input"
                                  checked={state.sexo === 'F'} 
                                  onChange={this.mudaSexo} />
                    F
                  </label>
                </div>
            </Col>
          <Col md="1">
            <label htmlFor="name"> Estado Civil: </label>
          </Col>
          <Col md="2">
            <select name="estadoCivil" value={state.estadoCivil} onChange={this.props.handleChange} className="browser-default custom-select">
                <option value="">Selecione</option>
                <option value="casado">Casado(a)</option>
                <option value="solteiro">Solteiro(a)</option>
                <option value="separado">Separado(a)</option>
                <option value="uniao estavel">Uniao Estável</option>
                <option value="viuvo">Viúvo(a)</option>
                <option value="indefinido">Indefinido</option>
            </select>
          </Col>
          <Col md="1">
            <label htmlFor="name"> UF: </label>
          </Col>
          <Col md="2">
            <select name="uf" value={state.uf} onChange={this.props.handleChange} className="browser-default custom-select">
              <option value="">Selecione</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
          </select>
          </Col>
          <Col md="1">
             <label htmlFor="name"> Cidade: </label>
          </Col>
          <Col md="2">
            <select name="cidade" value={state.cidade} onChange={this.props.handleChange} className="browser-default custom-select">
              <option value=""></option>
              {this.decidirCidadesPorUf(state.uf).map((item, index)=> {
                        return (<option value={item} label={item} key={item} /> );
                      })}
            </select>
          </Col>
        </Row>
        <Row>
            <Col md="1">
                <label htmlFor="name"> Cep: </label>
            </Col>

            <Col md="2">
                <MaskedInput
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                  className="form-control"
                  placeholder=""
                  guide={true}
                  name="cep"
                  id="cep"
                  value={state.cep}
                  onBlur={() => {}}
                  onChange={this.props.handleChange}
                />
            </Col>

            <Col md="1">
                <label htmlFor="name"> Endereço: </label>
            </Col>

            <Col md="2">
                <input
                  className="form-control"
                  id="endereco"
                  name="endereco"
                  type="text"
                  placeholder=""
                  value={state.endereco} // Prop: The email input data
                  onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </Col>

            <Col md="1">
                <label htmlFor="name"> Bairro: </label>
            </Col>

            <Col md="2">
                <input
                  className="form-control"
                  id="horarioDeChegada"
                  name="bairro"
                  type="text"
                  placeholder=""
                  value={state.bairro} // Prop: The email input data
                  onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </Col>

            <Col md="1">
                <label htmlFor="name"> Nº: </label>
            </Col>

            <Col md="2">
                <input
                  className="form-control"
                  id="horarioDeChegada"
                  name="numero"
                  type="number"
                  placeholder=""
                  value={state.numero} // Prop: The email input data
                  onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </Col>
        </Row>
        <br/>
        <Row>
            <Col md="2">
                <label htmlFor="name"> Complemento: </label>
            </Col>
            <Col md="2">
                <input
                  className="form-control"
                  id="complemento"
                  name="complemento"
                  type="text"
                  placeholder=""
                  value={state.complemento} // Prop: The email input data
                  onChange={this.props.handleChange} // Prop: Puts data into state
                />
            </Col>

            <Col md="2">
                <label htmlFor="name"> Nacionalidade: </label>
            </Col>
            <Col md="2">
                <input
                      className="form-control"
                      id="nacionalidade"
                      name="nacionalidade"
                      type="text"
                      placeholder=""
                      value={state.nacionalidade} // Prop: The email input data
                      onChange={this.props.handleChange} // Prop: Puts data into state
                    />
            </Col>


            <Col md="2">
                <label htmlFor="name"> Naturalidade: </label>
            </Col>
            <Col md="2">
                <input
                      className="form-control"
                      id="naturalidade"
                      name="naturalidade"
                      type="text"
                      placeholder=""
                      value={state.naturalidade} // Prop: The email input data
                      onChange={this.props.handleChange} // Prop: Puts data into state
                    />
            </Col>
          </Row>
          <br/>
          <Row>

            <Col md="1">
                <label htmlFor="name"> Profissão: </label>
            </Col>

             <Col md="2">
                <input
                      className="form-control"
                      id="profissao"
                      name="profissao"
                      type="text"
                      placeholder=""
                      value={state.profissao} // Prop: The email input data
                      onChange={this.props.handleChange} // Prop: Puts data into state
                    />
            </Col>

            <Col md="1">
                <label htmlFor="name"> Telefone: </label>
            </Col>
            <Col md="2">
              <MaskedInput
                    mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-control"
                    placeholder=""
                    guide={true}
                    name="telefone"
                    value={state.telefone}
                    id="telefone"
                    onBlur={() => {}}
                    onChange={this.props.handleChange}
                  />
            </Col>

            <Col md="1">
                <label htmlFor="name"> Nome do Pai: </label>
            </Col>

             <Col md="2">
                <input
                      className="form-control"
                      id="nomdeDoPai"
                      name="nomdeDoPai"
                      type="text"
                      placeholder=""
                      value={state.nomdeDoPai} // Prop: The email input data
                      onChange={this.props.handleChange} // Prop: Puts data into state
                    />
            </Col>


            <Col md="1">
                <label htmlFor="name"> Nome da Mãe: </label>
            </Col>

             <Col md="2">
                <input
                      className="form-control"
                      id="nomdeDoMae"
                      name="nomdeDaMae"
                      type="text"
                      placeholder=""
                      value={state.nomdeDaMae} // Prop: The email input data
                      onChange={this.props.handleChange} // Prop: Puts data into state
                    />
            </Col>

        </Row>
        </div>

      </Container>
      </div>
    )
  }
}


export default Step1;