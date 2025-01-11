import React from "react";

const User = ({ user }) => {
  return (
    <tr>
      <td>{user.email}</td>
      <td>{user.name}</td>
    </tr>
  );
};

const UserList = () => {
  const users = [
    { email: "ryu@gmail.com", name: "유재석" },
    { email: "kim@gmail.com", name: "김종국" },
    { email: "ha@gmail.com", name: "하동훈" },
    { email: "song@gmail.com", name: "송지효" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <td>이메일</td>
          <td>이름</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return <User user={user} />;
        })}
      </tbody>
    </table>
  );
};

export default UserList;
