import axios from 'axios';

export const getCurrencyList = () => dispatch => {
  axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(({ data: Valute }) => {
      dispatch({
        type: 'ADD_CURRENCY_LIST',
        payload: Valute,
      });
    });
};
