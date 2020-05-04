import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { v4 as uuid } from 'uuid';


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
    let memeObj = {topText: formData.topText, bottomText: formData.bottomText, imgURL: formData.imgURL, id: uuid()}
    dispatch({type:"ADD_MEME", payload: memeObj})
  }

  
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <label htmlFor="topText"></label>
        <input type="text"
          name="topText"
          value={FormData.topText}
          placeholder=""
          onChange={handleChange}
        ></input>

        <label htmlFor="bottomText"></label>
        <input type="text"
          name="bottomText"
          value={FormData.bottomText}
          placeholder=""
          onChange={handleChange}
        ></input>

        <label htmlFor="imgURL"></label>
        <input type="text"
          name="imgURL"
          value={FormData.imgURL}
          placeholder=""
          onChange={handleChange}
        ></input>

        <button>
          Create Meme
        </button>
      </form>
    </div>
  )
}


export default MemeForm;