import { CHANGE_TRACK, REMOVE_TRACK } from '../actions/footer_player_actions';

export default (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_TRACK:
            return action.trackId;
        case REMOVE_TRACK:
            return null;
        default:
            return state;
    }
};