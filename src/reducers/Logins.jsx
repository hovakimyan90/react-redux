import { Map, List }  from 'immutable';

const Logins = (state = Map({
    errors: List()

}), action) => {
    switch (action.type) {
        case 'TEST':
            return state.set('errors', List(action.data));
        default:
            return state
    }
};

export default Logins