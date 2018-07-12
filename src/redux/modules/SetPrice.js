const SET_AUD_PRICE = "SET_AUD_PRICE";
const SET_BGN_PRICE = "SET_BGN_PRICE";
const SET_BRL_PRICE = "SET_BRL_PRICE";
const SET_CAD_PRICE = "SET_CAD_PRICE";
const SET_CHF_PRICE = "SET_CHF_PRICE";
const SET_CNY_PRICE = "SET_CNY_PRICE";
const SET_CZK_PRICE = "SET_CZK_PRICE";
const SET_DKK_PRICE = "SET_DKK_PRICE";
const SET_EUR_PRICE = "SET_EUR_PRICE";
const SET_GBP_PRICE = "SET_GBP_PRICE";
const SET_HKD_PRICE = "SET_HKD_PRICE";
const SET_HUF_PRICE = "SET_HUF_PRICE";
const SET_IDR_PRICE = "SET_IDR_PRICE";
const SET_ILS_PRICE = "SET_ILS_PRICE";
const SET_INR_PRICE = "SET_INR_PRICE";
const SET_ISK_PRICE = "SET_ISK_PRICE";
const SET_JPY_PRICE = "SET_JPY_PRICE";
const SET_KRW_PRICE = "SET_KRW_PRICE";
const SET_MXN_PRICE = "SET_MXN_PRICE";
const SET_MYR_PRICE = "SET_MYR_PRICE";
const SET_NOK_PRICE = "SET_NOK_PRICE";
const SET_NZD_PRICE = "SET_NZD_PRICE";
const SET_PHP_PRICE = "SET_PHP_PRICE";
const SET_PLN_PRICE = "SET_PLN_PRICE";
const SET_RON_PRICE = "SET_RON_PRICE";
const SET_RUB_PRICE = "SET_RUB_PRICE";
const SET_SEK_PRICE = "SET_SEK_PRICE";
const SET_SGD_PRICE = "SET_SGD_PRICE";
const SET_THB_PRICE = "SET_THB_PRICE";
const SET_TRY_PRICE = "SET_TRY_PRICE";
const SET_ZAR_PRICE = "SET_ZAR_PRICE";
const SET_ERROR = "SET_ERROR";

export const setAudPrice = price => ({
  type: SET_AUD_PRICE,
  payload: price
});

export const setBgnPrice = price => ({
  type: SET_BGN_PRICE,
  payload: price
});

export const setBrlPrice = price => ({
  type: SET_BRL_PRICE,
  payload: price
});

export const setCadPrice = price => ({
  type: SET_CAD_PRICE,
  payload: price
});

export const setChfPrice = price => ({
  type: SET_CHF_PRICE,
  payload: price
});

export const setCnyPrice = price => ({
  type: SET_CNY_PRICE,
  payload: price
});

export const setCzkPrice = price => ({
  type: SET_CZK_PRICE,
  payload: price
});

export const setDkkPrice = price => ({
  type: SET_DKK_PRICE,
  payload: price
});

export const setEurPrice = price => ({
  type: SET_EUR_PRICE,
  payload: price
});

export const setGbpPrice = price => ({
  type: SET_GBP_PRICE,
  payload: price
});

export const setHkdPrice = price => ({
  type: SET_HKD_PRICE,
  payload: price
});

export const setHufPrice = price => ({
  type: SET_HUF_PRICE,
  payload: price
});

export const setIdrPrice = price => ({
  type: SET_IDR_PRICE,
  payload: price
});

export const setIlsPrice = price => ({
  type: SET_ILS_PRICE,
  payload: price
});

export const setInrPrice = price => ({
  type: SET_INR_PRICE,
  payload: price
});

export const setIskPrice = price => ({
  type: SET_ISK_PRICE,
  payload: price
});

export const setJpyPrice = price => ({
  type: SET_JPY_PRICE,
  payload: price
});

export const setKrwPrice = price => ({
  type: SET_KRW_PRICE,
  payload: price
});

export const setMxnPrice = price => ({
  type: SET_MXN_PRICE,
  payload: price
});

export const setMyrPrice = price => ({
  type: SET_MYR_PRICE,
  payload: price
});

export const setNokPrice = price => ({
  type: SET_NOK_PRICE,
  payload: price
});

export const setNzdPrice = price => ({
  type: SET_NZD_PRICE,
  payload: price
});

export const setPhpPrice = price => ({
  type: SET_PHP_PRICE,
  payload: price
});

export const setPlnPrice = price => ({
  type: SET_PLN_PRICE,
  payload: price
});

export const setRonPrice = price => ({
  type: SET_RON_PRICE,
  payload: price
});

export const setRubPrice = price => ({
  type: SET_RUB_PRICE,
  payload: price
});

export const setSekPrice = price => ({
  type: SET_SEK_PRICE,
  payload: price
});

export const setSgdPrice = price => ({
  type: SET_SGD_PRICE,
  payload: price
});

export const setThbPrice = price => ({
  type: SET_THB_PRICE,
  payload: price
});

export const setTryPrice = price => ({
  type: SET_TRY_PRICE,
  payload: price
});

export const setZarPrice = price => ({
  type: SET_ZAR_PRICE,
  payload: price
});

export const setError = error => ({
  type: SET_ERROR,
  payload: error
});

const initialState = {
  aud: 1,
  bgn: 1,
  brl: 1,
  cad: 1,
  chf: 1,
  cny: 1,
  czk: 1,
  dkk: 1,
  eur: 1,
  gbp: 1,
  hkd: 1,
  huf: 1,
  idr: 1,
  ils: 1,
  inr: 1,
  isk: 1,
  jpy: 1,
  krw: 1,
  mxn: 1,
  myr: 1,
  nok: 1,
  nzd: 1,
  php: 1,
  pln: 1,
  ron: 1,
  rub: 1,
  sek: 1,
  sgd: 1,
  thb: 1,
  try: 1,
  zar: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUD_PRICE:
      return {
        ...state,
        aud: action.payload
      };
    case SET_BGN_PRICE:
      return {
        ...state,
        bgn: action.payload
      };
    case SET_BRL_PRICE:
      return {
        ...state,
        brl: action.payload
      };
    case SET_CAD_PRICE:
      return {
        ...state,
        cad: action.payload
      };
    case SET_CHF_PRICE:
      return {
        ...state,
        chf: action.payload
      };
    case SET_CNY_PRICE:
      return {
        ...state,
        cny: action.payload
      };
    case SET_CZK_PRICE:
      return {
        ...state,
        czk: action.payload
      };
    case SET_DKK_PRICE:
      return {
        ...state,
        dkk: action.payload
      };
    case SET_EUR_PRICE:
      return {
        ...state,
        eur: action.payload
      };
    case SET_GBP_PRICE:
      return {
        ...state,
        gbp: action.payload
      };
    case SET_HKD_PRICE:
      return {
        ...state,
        hkd: action.payload
      };
    case SET_HUF_PRICE:
      return {
        ...state,
        huf: action.payload
      };
    case SET_IDR_PRICE:
      return {
        ...state,
        idr: action.payload
      };
    case SET_ILS_PRICE:
      return {
        ...state,
        ils: action.payload
      };
    case SET_INR_PRICE:
      return {
        ...state,
        inr: action.payload
      };
    case SET_ISK_PRICE:
      return {
        ...state,
        isk: action.payload
      };
    case SET_JPY_PRICE:
      return {
        ...state,
        jpy: action.payload
      };
    case SET_KRW_PRICE:
      return {
        ...state,
        krw: action.payload
      };
    case SET_MXN_PRICE:
      return {
        ...state,
        mxn: action.payload
      };
    case SET_MYR_PRICE:
      return {
        ...state,
        myr: action.payload
      };
    case SET_NOK_PRICE:
      return {
        ...state,
        nok: action.payload
      };
    case SET_NZD_PRICE:
      return {
        ...state,
        nzd: action.payload
      };
    case SET_PHP_PRICE:
      return {
        ...state,
        php: action.payload
      };
    case SET_PLN_PRICE:
      return {
        ...state,
        pln: action.payload
      };
    case SET_RON_PRICE:
      return {
        ...state,
        ron: action.payload
      };
    case SET_RUB_PRICE:
      return {
        ...state,
        rub: action.payload
      };
    case SET_SEK_PRICE:
      return {
        ...state,
        sek: action.payload
      };
    case SET_SGD_PRICE:
      return {
        ...state,
        sgd: action.payload
      };
    case SET_THB_PRICE:
      return {
        ...state,
        thb: action.payload
      };
    case SET_TRY_PRICE:
      return {
        ...state,
        try: action.payload
      };
    case SET_ZAR_PRICE:
      return {
        ...state,
        zar: action.payload
      };
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
