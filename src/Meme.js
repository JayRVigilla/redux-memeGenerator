import React from "react";
import { useDispatch } from "react-redux";


function Meme({ meme: { topText, bottomText, imgURL, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "DELTE_MEME", payload: id })
  }

  return (
    <li>
      <p className="topText">{topText}</p>
      <img className="memeImage" src={imgURL} alt={`from ${imgURL}`} />
      <p className="bottomText">{bottomText}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Meme;