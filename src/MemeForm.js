import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { v4 as uuid } from 'uuid';


/**
 * Form for adding a new meme.
 *  state:
 *    formData: holds the state for processing the form
 *  Redux:
 *    Uses useDispatch with the "ADD_MEME" action from memeReducer
 * Generates a unique id for each meme with UUID v4.
 * 
 */
function MemeForm() {
  const INITIAL_STATE = { topText: "", bottomText: "", imgURL: "", id:"" };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const hanldeSubmit = (evt) =>{
    evt.preventDefault();
    let memeObj = { topText: formData.topText, 
                    bottomText: formData.bottomText, 
                    imgURL: formData.imgURL, 
                    id: uuid()}
    dispatch({type:"ADD_MEME", payload: memeObj})
  }

  
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <label htmlFor="topText">Top Text</label>
        <input type="text"
          name="topText"
          value={formData.topText}
          placeholder=""
          onChange={handleChange}
        ></input><br/>

        <label htmlFor="bottomText">Bottom Text</label>
        <input type="text"
          name="bottomText"
          value={formData.bottomText}
          placeholder=""
          onChange={handleChange}
        ></input><br/>

        <label htmlFor="imgURL">Image URL</label>
        <input type="text"
          name="imgURL"
          value={formData.imgURL}
          placeholder=""
          onChange={handleChange}
        ></input><br/>

        <button>
          Create Meme
        </button>
      </form>
    </div>
  )
}


export default MemeForm;