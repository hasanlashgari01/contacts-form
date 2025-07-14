import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);

  return (
    <UserContext.Provider value={{ name, setName, phone, setPhone, image, setImage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
