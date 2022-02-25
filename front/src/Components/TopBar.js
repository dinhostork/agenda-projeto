import React, { Component } from "react";
import { Containner, Header, UserInfo, UserMenu, UserMenuItems } from "../styles/dashboard";
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from "react-router-dom";
import userpic from '../assets/userpic.png';
import {logout} from '../services/auth'

class HeaderGroup extends Component {
    state = {
        userMenu: true,
        user: null,
    }

    renderUserImage = (user) => (user.avatar ? user.avatar.url : userpic);
    
    renderUserName(username) {
        if (username) {
          if (username.length > 11) {
            return username.split(' ')[0];
          }
          return username;
        }
        return '';
      }

  render() {
    return(
    <Header>
        <h1>Contatos</h1>   
        <Containner>
        <div
            className="back"
            onClick={() => this.setState({ sidebar: !this.state.sidebar })}
          >
            {' '}
            <Link to="/"> Agenda </Link>
          </div>

        <UserInfo
            collapsed={this.state.userMenu}
            onClick={() =>
              this.setState({
                userMenu: !this.state.userMenu,
              })
            }
          >
            <img src={this.renderUserImage({name: "a"})} alt="Sua Foto" />
            <span> {this.renderUserName("Teste")} </span>
            <AiOutlineDown size="20px" />
            <UserMenu collapsed={this.state.userMenu}>
              <UserMenuItems collapsed={this.state.userMenu}>
                <li>
                  <Link to="/settings">Configurações</Link>
                </li>
                <li>
                  <Link to="/history">Histórico</Link>
                </li>
                <li>
                  <button onClick={() => logout()}>Sair</button>
                </li>
              </UserMenuItems>
            </UserMenu>
          </UserInfo>
        </Containner>
    </Header>
     ) }
}

export default HeaderGroup