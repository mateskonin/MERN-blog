import React, {Component} from "react"
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class ArticleTableRow extends Component{
    constructor(props) {
        super(props);


    }

    deleteArticle() {
        axios.delete('http://localhost:4000/articles/delete-article' + this.props.obj._id)
            .then((res) => {
                console.log("Deleted!")
            }).catch((error) => {
                console.log(error)
        })
    }

    render(){
        return(<tr>
               <td>{this.props.obj.title}</td>
               <td>{this.props.obj.author}</td>
               <td>{this.props.obj.content}</td>
               <td>
                   <Link className="edit-link" to={"/edit-article/"+ this.props.obj_id}>
                       Edit
                   </Link>
                   <Button onClick={this.deleteArticle} size="sm" variant="danger">
                       Delete
                   </Button>
               </td>
            </tr>

        )
    }
}