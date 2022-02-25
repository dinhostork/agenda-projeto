import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Containner, AuthBox, SubOption, LoadContaiiner } from '../authStyles';
import api from '../../../services/api';
import loading from '../../../assets/Ripple-1s-200px.svg';
import { login } from '../../../services/auth';

export default class Login extends Component {
  state = {
    loading: false,
    email: '',
    password: '',
    error: '',
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      this.setState({ loading: true, error: '' });
      const response = await api.post('/session', {
        email,
        password,
      });
      login(response.data.token);
    } catch (err) {
      this.setState({ loading: false, error: err.response.data.error });
    }
  };

  render() {
    return (
      <Containner>
        <LoadContaiiner show={this.state.loading}>
          <img src={loading} alt="lançando o foguete" />
        </LoadContaiiner>

        <AuthBox onSubmit={this.handleSignIn} show={!this.state.loading}>
          <span className="error">{this.state.error}</span>
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
          <button> ENTRAR </button>

          <SubOption>
            <div className="line" />
            <Link to="/register"> CRIAR UMA NOVA CONTA </Link>
            <div className="line" />
          </SubOption>
        </AuthBox>
        <div className="clouds" />
        <div className="ground" />
      </Containner>
    );
  }
}