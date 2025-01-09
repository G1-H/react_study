import Comment from "./Comment";

const comments = [
  { name: "황지원", comment: "리액트 처음 배워봐요." },
  { name: "배우리", comment: "잘 배워보세요" },
  { name: "김모씨", comment: "회사 망했어요." },
  { name: "원모씨", comment: "요즘 연애해서 행복해요." },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
