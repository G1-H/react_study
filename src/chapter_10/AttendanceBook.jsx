import React from "react";

const students = [
  { id: 1, name: "재석" },
  { id: 2, name: "종국" },
  { id: 3, name: "동훈" },
  { id: 4, name: "예은" },
  { id: 5, name: "지효" },
  { id: 6, name: "세찬" },
];

const AttendanceBook = (props) => {
  return (
    <ul>
      {students.map((student) => {
        return <li key={`student-${student.id}`}>{student.name}</li>;
      })}
    </ul>
  );
};

export default AttendanceBook;
