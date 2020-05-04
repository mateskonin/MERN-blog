import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Iframe from 'react-iframe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    alert('You sent a message');

    this.setState({ name: '', email: '', message: '' });
  }

  render() {
    return (
      <div className='d-flex flex-wrap justify-content-around'>
        <div className='opacity-block'>
          <div className='form-wrapperContact'>
            <h4>Contact</h4>
            <br />
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId='Name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </Form.Group>

              <Form.Group controlId='Email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </Form.Group>

              <Form.Group controlId='Message'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as='textarea'
                  type='text'
                  value={this.state.message}
                  onChange={this.onChangeMessage}
                />
              </Form.Group>

              <Button variant='danger' size='sm' block='block' type='submit'>
                Submit message
              </Button>
            </Form>
          </div>
        </div>
        <div className='opacity-block'>
          <div className='d-flex flex-column justify-content-around'>
            <div>
              <FontAwesomeIcon icon='location-arrow' />
              <h4>Address:</h4>
              <p>Zakole 14/22, 62-510 Konin</p>
            </div>
            <div>
              <FontAwesomeIcon icon='envelope' />
              <h4>E-mail:</h4>
              <p>
                <a
                  href='mailto:mateskonin@interia.eu'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  mateskonin@interia.eu
                </a>
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon='phone-square' />
              <h4>Telefon:</h4>
              <p>737 173 553</p>
            </div>
          </div>
        </div>
        <div className='iFrame'>
          <Iframe
            url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4077492555543!2d18.274981815796874!3d52.23597707976144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471b36b9c14fbc5b%3A0xe2ec6b1f72ee6f7!2sOk%C3%B3lna%20%26%20Zakole%2C%2062-500%20Konin!5e0!3m2!1spl!2spl!4v1588522022145!5m2!1spl!2spl'
            width='100%'
            frameBorder='0'
            scrolling='yes'
          />
        </div>
      </div>
    );
  }
}
