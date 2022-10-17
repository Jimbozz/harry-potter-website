import useLocalStorage from "../hooks/useLocalStorage";
import React from "react";

const AuthContext = React.createContext([null, () => {}]);

/**
 * Provides context to see if the user is logged in or not
 */

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
