
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Item, Collapse } from '../styles/dashboard';
import { MdForum, MdLiveTv } from 'react-icons/md';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';

class SidebarS extends Component {

    state = {
        show: true
    }

  render() {
    const { show } = this.state;

    return (
      <Sidebar collapse={!show}>
        <Menu collapse={!show}>
          <Item active>
            <FaUserAstronaut size="32px" />
            <span>Cursos</span>
          </Item>
          <Link to="/forum">
            <Item>
              <MdForum size="32px" />
              <span>Forum</span>
            </Item>
          </Link>
          <Link to="/lives">
            <Item>
              <MdLiveTv size="32px" />
              <span>Lives</span>
            </Item>
          </Link>
        </Menu>
        <Collapse collapse={!show}>
          <div className="hide">
            <AiFillEyeInvisible size="32px" />
            <span> Esconder </span>
          </div>
        </Collapse>
      </Sidebar>
    );
  }
}

export default SidebarS