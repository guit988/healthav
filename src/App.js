import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {store, persistor} from './store';
import { Provider } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react';

/* PAGINAS */

import MasterForm from './pages/MasterForm';
import Home from './pages/Home';
import Login from './pages/Login';
import VerRelatorioIndividual from './pages/VerRelatorioIndividual';
import VerRelatorioGlobal from './pages/VerRelatorioGlobal';
import RelatorioGlobal from './pages/RelatorioGlobal';
import DiagnosticoPorPeriodo from './pages/DiagnosticoPorPeriodo';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/cadastrarpaciente" component={MasterForm} />
          <Route exact path="/verrelatorioindividual/:func" component={VerRelatorioIndividual} />
          <Route exact path="/verrelatorioglobal" component={VerRelatorioGlobal} />
          <Route exact path="/relatorioglobal" component={RelatorioGlobal} />
          <Route exact path="/diagnosticoporperiodo" component={DiagnosticoPorPeriodo} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;

