import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UserLsit from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, userage) => {
    // 함수가 상태를 업데이트 할 때에는 자동으로 가장 최신의 값을 가져온다!
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: username,
          age: userage,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserLsit users={userList} />
    </Fragment>
  );
}

export default App;
