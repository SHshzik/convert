import axios from 'axios';

export const getCurrencyList = () => dispatch => {
  axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((response) => {
      dispatch({
        type: 'ADD_CURRENCY_LIST',
        payload: response.data.Valute,
      });
    });
};
