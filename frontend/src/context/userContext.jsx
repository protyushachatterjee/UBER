import React, { createContext } from "react";

export const userDataContext = createContext();

const userContext = ({ children }) => {

    const [user, setUser] = useState({
        email: "",
        fullName: {
            firstName: '',
            lastName: ''
        },
    })


  return (
    <div>
      <userDataContext.Provider value={[user, setUser]}>{children}</userDataContext.Provider>
    </div>
  );
};

export default userContext;
