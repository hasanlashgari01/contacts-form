import { createContext, useContext, useReducer } from "react";
import { contactReducer, initialState } from "../reducers/contact-reducer";

const ContactContext = createContext(null);

const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return <ContactContext.Provider value={{ state, dispatch }}> {children}</ContactContext.Provider>;
};

export const useContact = () => {
  const { state, dispatch } = useContext(ContactContext);

  return { state, dispatch };
};
export default ContactProvider;
