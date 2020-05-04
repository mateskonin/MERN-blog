import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import ArticleTableRow from './articleTableRow';
import VisitCount from './visitCount';

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/articles/')
      .then((res) => {
        this.setState({
          articles: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  dataTable() {
    return this.state.articles.map((res, i) => {
      return <ArticleTableRow obj={res} key={i} />;
    });
  }

  visitCount() {
    return <VisitCount />;
  }

  render() {
    return (
      <div className='table-wrapper'>
        <Table striped bordered>
          <thead className='color'>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody className='color'>{this.dataTable()}</tbody>
        </Table>
        <div>
          <Alert variant='info'>
            <p className='mb-0'>
              You are {''}
              <Badge variant='success'>{this.visitCount()}</Badge> {''}
              visitor on this site.
            </p>
          </Alert>
        </div>
      </div>
    );
  }
}
