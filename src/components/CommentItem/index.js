import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleIsLiked} = props
  const {
    name,
    comment,
    id,
    isLiked,
    time,
    firstLater,
    latterColor,
  } = commentDetails

  const likeBtn =
    'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likedBtn =
    'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const imgUrl = isLiked ? likedBtn : likeBtn
  const likeColor = isLiked ? 'liked_color' : ''

  const onDelete = () => {
    deleteComment(id)
  }

  const onLike = () => {
    toggleIsLiked(id)
  }

  return (
    <li className="list">
      <div className="list_item">
        <div className="name_container">
          <div className={`name_latter ${latterColor}`}>{firstLater}</div>
          <p className="name">{name}</p>
          <p className="time">{time}</p>
        </div>
        <p className="comment">{comment}</p>
        <div className="btn_container">
          <button
            type="button"
            className={`like ${likeColor}`}
            onClick={onLike}
          >
            {' '}
            <img className="like_btn" src={imgUrl} alt="like" /> Like
          </button>

          <button
            type="button"
            data-testid="delete"
            onClick={onDelete}
            className="delete"
          >
            <img
              className="c"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="list_ruler" />
    </li>
  )
}

export default CommentItem
