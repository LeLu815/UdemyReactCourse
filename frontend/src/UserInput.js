import React, { useEffect } from "react";

function UserInput({ input, onChange, onCreate }) {
  return (
    <>
      <input
        name="username"
        value={input.username}
        placeholder="계정명"
        onChange={onChange}
      />
      <input
        name="email"
        value={input.email}
        placeholder="이메일"
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default UserInput;
