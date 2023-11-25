// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { useState, useRef } from "react";

import UserInput from "./UserInput";
import UserList from "./UserList";

function App() {
  const nextId = useRef(6);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const [users, setUsers] = useState([
    {
      username: "이인천재",
      id: "1",
      email: "leeein9404@naver.com",
      active: true,
    },
    { username: "똥섹혐", id: "2", email: "ddongSex@naver.com", active: true },
    {
      username: "샤지냐기",
      id: "3",
      email: "syaginagi@naver.com",
      active: true,
    },
    { username: "채라믹", id: "4", email: "cheramic@naver.com", active: true },
    {
      username: "팬티도둑",
      id: "5",
      email: "underwareThief@naver.com",
      active: false,
    },
  ]);

  const onChnageFunc = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInputs((input) => {
      return { ...input, [name]: value };
    });
  };
  const onCreateFunc = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };
    setUsers((users) => users.concat(user));
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };
  const onRemoveFunc = (id) => {
    setUsers((users) => {
      return users.filter((user) => user.id !== id);
    });
  };
  const onToggleFunc = (id) => {
    setUsers((users) => {
      return users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            active: !user.active,
          };
        } else {
          return user;
        }
      });
    });
  };

  return (
    <div>
      <UserInput
        input={inputs}
        onChange={onChnageFunc}
        onCreate={onCreateFunc}
      />
      <UserList users={users} onRemove={onRemoveFunc} onToggle={onToggleFunc} />
    </div>
  );
}

export default App;
