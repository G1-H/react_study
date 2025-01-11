function Post(props) {
  return (
    <div className="post">
      <h4>{props.title}</h4>
      <p>{props.date} 발행</p>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
