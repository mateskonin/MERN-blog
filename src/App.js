import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CreateArticle from './components/create-article.component';
import EditArticle from './components/edit-article.component';
import ArticleList from './components/article-list.component';
import ArticleReadPanel from './components/articleReadPanel';
import AboutAuthor from './components/about-author.component';
import Contact from './components/contact.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-article'} className='nav-link'>
                  Freestyle Football Blog
                </Link>
              </Navbar.Brand>

              <Nav className='justify-content-end menu-item'>
                <Nav>
                  <Link to={'/create-article'} className='nav-link'>
                    Create Article
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/article-list'} className='nav-link'>
                    Article list
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/about-author'} className='nav-link'>
                    About Author
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/contact'} className='nav-link'>
                    Contact
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path='/' component={CreateArticle} />
                  <Route path='/create-article' component={CreateArticle} />
                  <Route path='/edit-article/:id' component={EditArticle} />
                  <Route path='/article-list' component={ArticleList} />
                  <Route
                    exact
                    path='/read-panel/:id'
                    component={ArticleReadPanel}
                  />
                  <Route path='/about-author' component={AboutAuthor} />
                  <Route path='/contact' component={Contact} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
