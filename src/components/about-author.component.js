import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Freestyle2 from '../img/freestyle2.jpg';
import Freestyle3 from '../img/freestyle3.jpg';
import Freestyle4 from '../img/freestyle4.jpg';

export default class AboutAuthor extends Component {
  render() {
    return (
      <div className='author-div'>
        <div className=''>
          <h1 className='opacity'>O AUTORZE</h1>
          <p className='opacity'>
            Cześć! Mam na imię Dawid i zajmuję się piękną dyscypliną sportu jaką
            jest freestyle football. Trenuję hobbystycznie od ponad 10 lat. Na
            swoim koncie mam pokazy, wywiady w radiu i prasie, wymyślone własne
            triki. Stworzyłem ten blog dla ludzi takich jak ja, którzy kochają
            tą zajawkę, chcą rozwijać swoje pasje, nauczyć się nowych rzeczy lub
            zwyczajnie zobaczyć efektowne umiejętności. Zapraszam!
          </p>
        </div>
        <Container className='opacity image-container'>
          <Row>
            <Col>
              <Image src={Freestyle3} className='image-author1' fluid rounded />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={Freestyle4} className='image-author2' fluid rounded />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={Freestyle2} className='image-author3' fluid rounded />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
