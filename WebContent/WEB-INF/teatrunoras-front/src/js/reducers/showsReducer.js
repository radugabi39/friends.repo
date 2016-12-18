export default function reducer(state={
    shows: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_SHOWS": {
        return {...state, fetching: true};
      }

      case "FETCH_SHOWS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "FETCH_SHOWS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          shows: action.payload,
        }
      }

      case "FETCH_SINGLE_SHOW": {
        return {...state, fetching: true};
      }

      case "FETCH_SINGLE_SHOW_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "FETCH_SINGLE_SHOW_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          shows: action.payload,
        }
      }
    }

    return state;
}
