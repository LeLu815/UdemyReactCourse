import React from "react";

// 대문자로 작명한 이유는 context 자체로 컴포넌트는 아니지만 컴포넌트를 포함하기 때문이다
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
