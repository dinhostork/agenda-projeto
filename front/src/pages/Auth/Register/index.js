import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Containner, AuthBox, SubOption, LoadContaiiner } from '../authStyles';
import api from '../../../services/api';
import loading from '../../../assets/Ripple-1s-200px.svg';
import { login } from '../../../services/auth';

export default class Register extends Component {
  state = {
    loading: false,
    name: '',
    email: '',
    password: '',
    error: '',
  };

  handleSignUP = async (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    try {
      this.setState({ loading: true, error: '' });
      const response = await api.post('/users', {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        const session = await api.post('/session', {
          email,
          password,
        });
        login(session.data.token);
      }else{
        this.setState({ loading: false, error: 'Ocorreu um erro.' });  
      }

    } catch (err) {
      this.setState({ loading: false, error: err.response.data.error });
    }
  };

  render() {
    return(
      <Containner>
        <LoadContaiiner show={this.state.loading}>
          <img src={loading} alt="lançando o foguete" />
        </LoadContaiiner>

        <AuthBox onSubmit={this.handleSignUP} show={!this.state.loading}>
          <span className="error">{this.state.error}</span>
          <input
            name="name"
            type="name"
            placeholder="Seu nome completo"
            required
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            name="email"
            type="email"
            placeholder="Seu endereço de e-mail"
            required
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            name="password"
            type="password"
            placeholder="Sua senha secreta"
            required
            minLength={8}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button> CRIAR CONTA </button>

          <SubOption>
            <div className="line" />
            <Link to="/login"> FAZER LOGIN </Link>
            <div className="line" />
          </SubOption>
        </AuthBox>
        <div className="clouds" />
        <div className="ground" />
      </Containner>
    );
  }
}