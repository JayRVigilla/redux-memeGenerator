

const INITIAL_STATE ={
  memes: [] //array of objects of topText, bottomText, image, id
};

/**
 * Complete reducer function for use with Redux.
 *  State held:
 *    memes: an array of meme objects.  Meme objects require keys of:
  *    topText: Text to go on the top of the meme
 *    bottomText: Text to go on the bottom of the meme
 *    imgURL: URL to pull the meme image from
 *    id: A unique ID to identify individual meme by.      
 *  ADD_MEME: adds a meme to state, requires 
 *    payload: meme object
 *  DELETE_MEME: removes a meme, requires a payload of: 
 *    payload: The unique id of the meme to be deleted
 */
function memeReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case 'ADD_MEME':
      return {...state, 
              memes: [...state.memes, action.payload]} // spread old, action.payload

    case 'DELETE_MEME':
      return {...state, 
              memes: state.memes.filter( meme => meme.id !== action.payload)} // filtering out by id

    default:
      return state;
  }
}

export default memeReducer;