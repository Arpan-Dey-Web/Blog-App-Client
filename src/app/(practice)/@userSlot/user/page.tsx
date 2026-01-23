import React from "react";

export default function UserDetails() {
  const userData = {
    name: "Arpan Dey",
    age: 22,
    phoneNumber: "+8801821524847",
  };
  return (
    <div className="border-2 border-blue-500  w-3/12 h-100 ">
      <p>
        Name
        <span className="font-extrabold text-yellow-300 text-2xl">
          {userData.name}
        </span>
      </p>
      <p>
        Age
        <span className="font-extrabold text-yellow-300 text-2xl">
          {userData.age}
        </span>
      </p>
      <p>
        PhoneNumber
        <span className="font-extrabold text-yellow-300 text-2xl">
     
          {userData.phoneNumber}
        </span>
      </p>
    </div>
  );
}
