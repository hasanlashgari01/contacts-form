export const ACTIONS = {
  ADD: "add",
  EDIT: "edit",
  DELETE: "delete",
  SET_EDIT: "set_edit",
};

export const initialState = {
  contacts: [],
  editId: null,
};

export function contactReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        editId: null,
      };

    case ACTIONS.EDIT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        editId: null,
      };

    case ACTIONS.DELETE:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };

    case ACTIONS.SET_EDIT:
      return {
        ...state,
        editId: action.payload,
      };

    default:
      return state;
  }
}
