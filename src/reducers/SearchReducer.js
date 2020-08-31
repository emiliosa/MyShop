export const initialSearchState = {
  data: { search: '' }
};

export const searchReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case 'ADD_SEARCH':
      console.log("ADD_SEARCH", state, action);

      return {
        data: {
          search: state.data.search
        }
      }

    default:
      return [];
  }
};