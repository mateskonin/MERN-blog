import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CommentContainer from './commentContainer';

export default class ArticleReadPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',
    };
  }

  componentDidMount() {
    axios
      .get(
        'http://localhost:5000/articles/read-panel/' +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          title: res.data.title,
          author: res.data.author,
          content: res.data.content,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='opacity-block-comment'>
        <Card.Body className='articleText'>
          <Card.Title>
            <strong>"{this.state.title}"</strong>
          </Card.Title>
          <Card.Subtitle className='mb-3 text-muted'>
            Author: {this.state.author}
          </Card.Subtitle>
          <Card.Text>{this.state.content}</Card.Text>
        </Card.Body>
        <br />
        <br />
        <div>
          <CommentContainer />
        </div>
      </div>
    );
  }
}
