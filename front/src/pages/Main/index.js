import React, { Component } from "react";
import {
  PageContainner,
  MainContainer,
  ContactListContainer,
  ContactList,
  ContactListHeader,
  ContactListMainContent,
  SearchBoxContainer,
  Contact,
} from "../../styles/dashboard";
import HeaderGroup from "../../Components/TopBar";
import userpic from "../../assets/userpic.png";
import api from "../../services/api";
import PaginationList from "react-pagination-list";
import {
  FaEnvelope,
  FaPhone,
  FaTrash,
  FaPen,
  FaSave,
  FaPlus,
  FaCamera,
} from "react-icons/fa";
import { toast } from "react-toastify";

class Main extends Component {
  state = {
    contacts: [],
    create: false,
    edit: null,
    name: null,
    email: null,
    phone: null,
    avatar: null,
  };

  async fetchContacts() {
    const response = await api.get("/contacts");
    this.setState({
      contacts: response.data,
    });
  }

  handleUserUpload = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("file", file);
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      toast.error("Apenas arquivos formato jpg e png são permitidos. ");
    } else if (file.size > 666031) {
      toast.error("Apenas imagens com tamanho menor que 6 MB são permitidas. ");
    } else {
      this.setState({
        avatar: file,
      });
    }
  };

  async createContact() {
    const { name, email, phone, avatar } = this.state;

    if(!name || !phone) {
      return toast.error("Um ou mais campos estão inválidos, verifique as informações")
    }

    const formData = new FormData();
    if (avatar) {
      formData.append("avatar", avatar);
    }
    formData.append("name", name);
    formData.append("phone", phone);

    if (email) {
      formData.append("email", email);
    }

    try {
      const response = await api.post("/contacts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Contato " + name + " criado com sucesso!");
        this.fetchContacts();
        this.setState({
          create: false,
          edit: null,
          name: null,
          email: null,
          phone: null,
          avatar: null,
        });
      }
    } catch (err) {
      toast.error("Falha ao criar contato");
    }
  }
  async updateContact(id) {
   const { name, email, phone, avatar } = this.state;

    if(!name || !phone) {
      return toast.error("Um ou mais campos estão inválidos, verifique as informações")
    }
    
    const formData = new FormData();
    if (avatar) {
      formData.append("avatar", avatar);
    }
    formData.append("name", name);
    formData.append("phone", phone);

    if (email) {
      formData.append("email", email);
    }

    try {
      const response = await api.put("/contacts/"+id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Contato " + name + " atualizado com sucesso!");
        this.fetchContacts();
        this.setState({
          create: false,
          edit: null,
          name: null,
          email: null,
          phone: null,
          avatar: null,
        });
      }
    } catch (err) {
      toast.error("Falha ao atualizar contato");
    }


    
  }

  async deleteContact(id) {
    try {
      const response = await api.delete("/contacts/" + id);

      if (response.status === 204) {
        toast.success("Contato deletado com sucesso!");
      }

      this.fetchContacts();
    } catch (err) {
      toast.error("Falha ao deletar contato");
    }
  }

  componentDidMount() {
    this.fetchContacts();
  }

  render() {
    return (
      <PageContainner>
        <HeaderGroup />
        <MainContainer>
          <ContactListContainer>
            <ContactListHeader>
              <SearchBoxContainer>
                <input
                  id="search"
                  className="input"
                  type="text"
                  placeholder=" "
                />
                <div className="cut"></div>
                <label htmlFor="search" className="placeholder">
                  Buscar contato
                </label>
              </SearchBoxContainer>

              <button
                type="button"
                onClick={() =>
                  this.setState({
                    create: true,
                    edit: null,
                    name: null,
                    email: null,
                    phone: null,
                    avatar: null,
                  })
                }
              >
                <FaPlus />
              </button>
            </ContactListHeader>

            <ContactListMainContent>
              <ContactList>
                {this.state.create ? (
                  <Contact>
                    <div className="photoContainner">
                      <div className="picture">
                        <input
                          type="file"
                          name="photo"
                          id="photo"
                          accept="image/jpeg, .jpg, image/png, .png"
                          onChange={(e) => this.handleUserUpload(e)}
                        />
                        <label htmlFor="photo" id="circle">
                          <div id="photo">
                            <img
                              src={
                                this.state.avatar ? this.state.avatar : userpic
                              }
                              alt={`Foto selecionada`}
                            />
                          </div>
                          <div id="icon">
                            <FaCamera />
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="info">
                      <div className="name">
                        <input
                          name="name"
                          required
                          placeholder="Nome do Contato"
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </div>
                      <div className="phone">
                        <FaPhone />{" "}
                        <input
                          name="phone"
                          required
                          placeholder="Telefone"
                          onChange={(e) =>
                            this.setState({ phone: e.target.value })
                          }
                        />
                      </div>

                      <div className="email">
                        <FaEnvelope />{" "}
                        <input
                          name="phone"
                          required
                          placeholder="Email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="actions">
                      <div className="icons">
                        <FaSave onClick={() => this.createContact()} />
                      </div>
                    </div>
                  </Contact>
                ) : null}
                <PaginationList
                  data={this.state.contacts}
                  pageSize={10}
                  renderItem={(contact, key) => (
                    <Contact
                      key={contact.id}
                    >
                      {this.state.edit === contact ? (
                        <div className="photoContainner">
                          <div className="picture">
                            <input
                              type="file"
                              name="photo"
                              id="photo"
                              accept="image/jpeg, .jpg, image/png, .png"
                              onChange={(e) => this.handleUserUpload(e)}
                            />
                            <label htmlFor="photo" id="circle">
                              <div id="photo">
                                <img
                                  src={
                                    this.state.avatar
                                      ? this.state.avatar.url
                                      : userpic
                                  }
                                  alt={contact.name}
                                />
                              </div>
                              <div id="icon">
                                <FaCamera />
                              </div>
                            </label>
                          </div>
                        </div>
                      ) : (
                        <div className="picture">
                          <img
                            src={contact.avatar ? contact.avatar.url : userpic}
                            alt={contact.name}
                          />
                        </div>
                      )}
                      <div className="info">
                        <div className="name">
                          {this.state.edit === contact ? (
                            <input
                              name="name"
                              defaultValue={contact.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          ) : (
                            <h3>{contact.name}</h3>
                          )}
                        </div>
                        <div className="phone">
                          <FaPhone /> <span>{contact.phone}</span>
                        </div>
                        {contact.email ? (
                          <div className="email">
                            <FaEnvelope /> <span>{contact.email}</span>
                          </div>
                        ) : null}
                      </div>
                      <div className="actions">
                        <div className="icons">
                          {this.state.edit === contact ? (
                            <FaSave
                              onClick={() => this.updateContact(contact.id)}
                            />
                          ) : (
                            <>
                              {" "}
                              <FaTrash
                                size={"16px"}
                                onClick={() => this.deleteContact(contact.id)}
                              />
                              <FaPen
                                size={"16px"}
                                onClick={() =>
                                  this.setState({
                                    edit: contact,
                                    name: contact.name,
                                    email: contact.email,
                                    phone: contact.phone,
                                    avatar: contact.avatar,
                                  })
                                }
                              />
                            </>
                          )}{" "}
                        </div>
                      </div>
                    </Contact>
                  )}
                />
              </ContactList>
            </ContactListMainContent>
          </ContactListContainer>
        </MainContainer>
        <div className="ground" />
      </PageContainner>
    );
  }
}

export default Main;
