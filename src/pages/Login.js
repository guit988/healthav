import React from 'react';
import '../css/login.css';
import Logo from '../component/logo';

import {Link, Redirect} from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import usuarioReducer from '../store/usuarioReducer';
import firebase from '../config/firebase';
import 'firebase/auth';

import { connect } from 'react-redux';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            carregando: false,
        }

        this.logar = this.logar.bind(this);

    }

    logar() {
        const {email, senha} = this.state;
        const {LogIn} = this.props;
        this.setState({carregando: true})

        if (email === "")
            return alert('Preencha o email');
        
        if (senha === "")
            return alert('Preencha a senha');

        firebase.auth().signInWithEmailAndPassword(email, senha).then( resultado => {
            LogIn(email);
            this.setState({carregando: false})

        }).catch( erro => {
            console.log(erro.message);
            this.setState({carregando: false})
            alert('Verifique seu email ou senha');
        })
    }

    render() {

        const {usuarioLogado} = this.props;
        return (
            <div>
                <Logo />
                    {
                        usuarioLogado > 0 ? <Redirect to="/home" /> : null
                    }
                <div className="my-2">
                    <div className="container">
                        <div className="row">
                            <aside className="col-sm-4 mx-auto">
                                <div className="card">
                                    <article className="card-body">
                                        <h4 className="card-title mb-4 mt-1 text-center">Login</h4>
                                             <form>
                                                <div className="form-group">
                                                   <label>Seu Email</label>
                                                    <input onChange={ (e) => this.setState({email: e.target.value})} className="form-control" placeholder="Email" type="email"/>
                                                </div> 
                                                <div className="form-group">
                                                    <label>Sua Senha</label>
                                                    <input onChange={ (e) => this.setState({senha: e.target.value})} 
                                                        className="form-control" placeholder="******" type="password" 
                                                        onKeyPress={event => {
                                                            if (event.key === 'Enter') {
                                                                this.logar();
                                                             }
                                                        }}
                                                    />
                                                    
                                                </div>   
                                                {this.state.carregando ? 
                                                    <center>
                                                        <ClipLoader
                                                          sizeUnit={"px"}
                                                          size={50}
                                                          color={'#123abc'}
                                                        />
                                                    </center>
                                                        :
                                                <div className="form-group">
                                                    <button type="button" onClick={this.logar} className="btn btn-primary btn-block"> Entrar  </button>
                                                </div>   
                                                }                                                         
                                            </form>
                                    </article>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

const mapStateToProps = state => {
    const {usuarioLogado} = state;

    return { usuarioLogado: usuarioLogado}
}

const mapDispatchToEvents = (dispatch) => {
  return {
    LogIn: (email) => {
      dispatch({type: 'LOG_IN', usuarioEmail: email});
    }
  };
};


export default connect( mapStateToProps,  mapDispatchToEvents)(Login);