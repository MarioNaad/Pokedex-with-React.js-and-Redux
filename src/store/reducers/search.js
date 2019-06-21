const initialState = {
  searchDisabled: true,
  searchValue: ""
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case "DISABLE_SEARCH_BOX": {
      return { ...state, searchDisabled: false };
    }
    case "CLEAR_DOM": {
      return { ...state, searchDisabled: true };
    }
    case "POKEMON_SEARCH": {
      return { ...state, searchValue: action.payload };
    }
    default:
      return state;
  }
};
