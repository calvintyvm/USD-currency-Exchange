import moment from "moment";

const GET_TODAY_PRICES = "GET_TODAY_PRICES";
const GET_YTD_PRICES = "GET_YTD_PRICES";
const GET_IS_TODAY_LOADING = "GET_IS_TODAY_LOADING";
const GET_IS_YESTERDAY_LOADING = "GET_IS_YESTERDAY_LOADING";
const SET_ERROR = "SET_ERROR";

export const getIsTodayLoading = () => ({
  type: GET_IS_TODAY_LOADING
});

export const getIsYesterdayLoading = () => ({
  type: GET_IS_YESTERDAY_LOADING
});

export const getTodayPrices = price => ({
  type: GET_TODAY_PRICES,
  payload: price
});

export const getYtdPrices = price => ({
  type: GET_YTD_PRICES,
  payload: price
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error
});

export const fetchTodayPrices = () => dispatch => {
  const url = "https://exchangeratesapi.io/api/latest?base=USD";
  dispatch(getIsTodayLoading());

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(getTodayPrices(data.rates)));
  // .catch()
};

export const fetchYesterdayPrices = () => dispatch => {
  let yesterdaysDate = moment()
    .subtract(1, "days")
    .format("YYYY-MM-DD")
    .split("/")
    .join("-");

  const url = `https://exchangeratesapi.io/api/${yesterdaysDate}?base=USD`;
  dispatch(getIsYesterdayLoading());

  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(getYtdPrices(data.rates)));
  // .catch()
};

const initialState = {
  todayData: [],
  yesterdayData: [],
  isTodayLoading: false,
  isYesterdayLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IS_TODAY_LOADING: {
      return { ...state, isTodayLoading: true };
    }
    case GET_IS_YESTERDAY_LOADING: {
      return { ...state, isYesterdayLoading: true };
    }
    case GET_TODAY_PRICES:
      return {
        ...state,
        isTodayLoading: false,
        todayData: action.payload
      };
    case GET_YTD_PRICES:
      return {
        ...state,
        isYesterdayLoading: false,
        yesterdayData: action.payload
      };
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
