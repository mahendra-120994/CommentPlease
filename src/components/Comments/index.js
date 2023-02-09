import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem/index'

const imgUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  addName = event => {
    this.setState({name: event.target.value})
  }

  creatComment = event => {
    this.setState({comment: event.target.value})
  }

  toggelIsLiked = id => {
    this.setState(prev => ({
      commentList: prev.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prev => ({
      commentList: [...prev.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  deleteComment = id => {
    const {commentList} = this.state
    const updatedtList = commentList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentList: updatedtList})
  }

  render() {
    const {name, comment, commentList} = this.state
    return (
      <div className="bg_container">
        <div className="container">
          <div className="create_comment_container">
            <h1 className="heading">Comments</h1>
            <form className="input_container" onSubmit={this.addComment}>
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                onChange={this.addName}
                value={name}
              />
              <textarea
                className="textarea"
                placeholder="Your Comment"
                rows="5"
                cols="50"
                onChange={this.creatComment}
                value={comment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
              <p className="comment">
                <span className="count">0</span> comment
              </p>
            </form>
          </div>
          <div className="img_container">
            <img className="img" src={imgUrl} alt="comments" />
          </div>
        </div>
        <div className="comments_container">
          <ul className="comments_list">
            {commentList.map(commentDetails => (
              <CommentItem
                key={commentDetails.id}
                commentDetails={commentDetails}
                deleteComment={this.deleteComment}
                toggelIsLiked={this.toggelIsLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
