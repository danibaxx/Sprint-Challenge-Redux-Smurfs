import { 
  FETCHING_SMURFS, 
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_FAILURE,
  CREATE_SMURFS,
  CREATE_SMURFS_SUCCESS,
  CREATE_SMURFS_FAILURE
} from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs, ...action.payload
        ],
        fetchingSmurfs: false
      };

    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };

    case CREATE_SMURFS:
      return {
        ...state,
        addingSmurf: true
      };

    case CREATE_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [
          ...state.smurfs, ...action.payload
        ],
        addingSmurf: false
      }

    case CREATE_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }

    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
