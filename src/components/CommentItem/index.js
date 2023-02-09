import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggelIsLiked} = props
  const {name, comment, id, isLiked} = commentDetails

  const likeBtn =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedBtn =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const imgUrl = isLiked ? likedBtn : likeBtn

  const onDelete = () => {
    deleteComment(id)
  }

  const onLike = () => {
    toggelIsLiked(id)
  }
  return (
    <li className="list">
      <div className="list_item">
        <div className="name_container">
          <div className="name_latter">A</div>
          <p className="name">{name}</p>
          <p className="time">time</p>
        </div>
        <p className="comment">{comment}</p>
        <div className="btn_container">
          <img className="like" src={imgUrl} alt="like" onClick={onLike} />
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            onClick={onDelete}
          />
        </div>
      </div>
    </li>
  )
}

export default CommentItem
