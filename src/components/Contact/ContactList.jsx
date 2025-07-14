import { useContact } from "../../context/ContactContext";
import { useUser } from "../../context/UserContext";
import { ACTIONS } from "../../reducers/contact-reducer";
import { EditIcon, TelIcon, TrashIcon } from "../icon";
import ContactAvatar from "./ContactAvatar";
import { ContactEmpty } from "./ContactEmpty";
import ContactItem from "./ContactItem";

export const ContactList = () => {
  const { state, dispatch } = useContact();
  const { setName, setPhone, setImage } = useUser();

  const handleEdit = (contact) => {
    dispatch({ type: ACTIONS.SET_EDIT, payload: contact.id });
    setName(contact.name);
    setPhone(contact.phone);
    setImage(contact.image || null);
  };

  const handleDelete = async (id) => {
    const element = document.getElementById(`contact-${id}`);
    if (element) {
      element.classList.add("opacity-0", "scale-90");
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    dispatch({ type: ACTIONS.DELETE, payload: id });
  };

  return (
    <div className="space-y-4">
      {state.contacts.length == 0 ? (
        <ContactEmpty />
      ) : (
        state.contacts.map((contact, index) => (
          <ContactItem key={contact.id} index={index}>
            <div
              id={`contact-${contact.id}`}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center p-5 gap-4">
                <ContactAvatar name={contact.name} image={contact.image} />

                <div className="flex-1 min-w-0">
                  <p className="font-bold text-lg text-gray-800 truncate hover:translate-x-1 transition-transform duration-200">
                    {contact.name}
                  </p>
                  <p className="text-gray-600 flex items-center gap-1 hover:translate-x-1 transition-transform duration-200">
                    <TelIcon />
                    {contact.phone}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(contact)}
                    className="p-2 rounded-full text-yellow-600 bg-yellow-100 hover:text-yellow-800 hover:bg-yellow-200 transition-all duration-200 hover:scale-110"
                  >
                    <EditIcon />
                  </button>

                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="p-2 rounded-full text-red-600 bg-red-100 hover:text-red-800 hover:bg-red-200 transition-all duration-200 hover:scale-110"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            </div>
          </ContactItem>
        ))
      )}
    </div>
  );
};
