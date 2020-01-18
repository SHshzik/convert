const initState = {
  baseState: 'USD',
  currencies: {},
};


export default (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CURRENCY_LIST':
      return {
        ...state,
        currencies: {
          ...action.payload,
        },
      };
    default:
      return state
  }
}
