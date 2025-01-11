function NavBtn(props) {
  return (
    <div className="titleChangeBtn" onClick={props.onClick}>
      <span>{props.btnName}</span>
    </div>
  );
}

export default NavBtn;
