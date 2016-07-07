import * as types from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_GAME:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case types.RECEIVE_GAME:
      return Object.assign({}, action.payload.game, {
        isFetching: false,
      });
    case types.RESET_GAME:
      return {};
    default:
      return state;
  }
};
