import React from "react";

export default function User() {
  const userData = {
    name: "X",
    age: 0,
    phoneNumber: "Nothing To Display",
  };
  return (
    <div>
      <p>{userData.name}</p>
      <p>{userData.age}</p>
      <p>{userData.phoneNumber}</p>
    </div>
  );
}
