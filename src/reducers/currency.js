const initState = {
  currentCurrency: 'RUB',
  currencies: {},
};


export default (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CURRENCY_LIST':
      return {
        ...state,
        currencies: {
          'RUB': {
            "ID": "RUB",
            "CharCode": "RUB",
            "Nominal": 1,
            "Name": "Русский рубль",
            "Value": 1,
          },
          ...action.payload,
        },
      };
    case 'CHANGE_CURRENT_CURRENCY':
      return {
        ...state,
        currentCurrency: action.payload,
      };
    default:
      return state
  }
}
