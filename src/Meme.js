import React from "react";
import { useDispatch } from "react-redux";

/**
 * Generates the html for an individual meme from the props passed down.
 * Allows user to delete meme by clicking on a button.
 *  props:
 *    meme:
  *    topText: topText for the meme
  *    bottomText: BottomText for the meme
  *    imgURL: URL to pull the image for the meme from
  *    id: unique id
 *  redux:
 *    Uses useDispatch to call on the DELETE_MEME action from the memeReducer
 * 
 */
function Meme({ meme: { topText, bottomText, imgURL, id } }) {
  const dispatch = useDispatch();

  const handleDelete = (memeId) => {
    dispatch({ type: "DELETE_MEME", payload: memeId })
  }

  return (
    
    <li>
      <p className="topText">{topText}</p>
      <img className="memeImage" src={imgURL} alt={`from ${imgURL}`} />
      <p className="bottomText">{bottomText}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  )
}

export default Meme;
