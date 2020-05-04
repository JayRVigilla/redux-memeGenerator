const INITIAL_STATE ={
  memes: [] //array of objects of topText, bottomText, image, id
};

function memeReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case 'ADD_MEME':
      return {...state, memes: [...state.memes, action.payload]} // spread old, action.payload

    case 'DELETE_MEME':
      return {...state, memes: state.memes.filter( meme => meme.id !== action.payload.id)} // filtering out by id

    default:
      return state;
  }
}