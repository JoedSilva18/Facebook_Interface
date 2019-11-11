import React from 'react';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <div className="content">
        <p>{content}</p>
      </div>
      <hr />
      <PostComments comments={comments} />
    </div>
  )
}

function PostHeader({ author, date }) {
  return (
    <div className="post-header">
      <img src={author.avatar} alt="Avatar" />
      <div className="details">
        <strong>{author.name}</strong>
        <span>{date}</span>
      </div>
    </div>
  )

}

function PostComments({ comments }) {

  return (
    <div className="comments">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <strong>{comment.author.name} </strong>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostItem;