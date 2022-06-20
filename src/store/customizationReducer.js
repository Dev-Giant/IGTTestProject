// project imports
import config from 'config';

// action - state management
import * as actionTypes from './actions';

export const initialState = {
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    mode: config.mode
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        case actionTypes.SET_MODE:
            return {
                ...state,
                mode: action.mode
            };
        default:
            return state;
    }
};

export default customizationReducer;
