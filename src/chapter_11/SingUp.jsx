import React, { useState } from "react";

const SignUp = (props) => {
  const [name, setname] = useState("");
  const [gender, setGender] = useState("male");

  const handleChangeName = (ev) => {
    setname(ev.target.value);
  };
  const handleChangeGender = (ev) => {
    setGender(ev.target.value);
  };

  const handleSubmit = (ev) => {
    const user = {};
    user.name = name;
    user.gender = gender;
    alert(`이름 : ${name}, 성별 : ${gender}`);
    console.log(user);
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>이름</label>
      <input type="text" value={name} onChange={handleChangeName} />
      <br />
      <label>성별</label>
      <select value={gender} onChange={handleChangeGender}>
        <option value="male">남자</option>
        <option value="female">여자</option>
      </select>

      <button type="submit">제출</button>
    </form>
  );
};

export default SignUp;
