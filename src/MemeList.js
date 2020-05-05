import React from "react";
import Meme from "./Meme";
import {useSelector} from "react-redux";
import "./MemeList.css"

/**
 * Creates the list of memes from the list held in redux state
 *  Redux:
 *    Uses useSelector to get the memes array held in state.
 */

function MemeList(){
const memes = useSelector(state => state.memes);


  return(
    <div>
      <ul>
        {memes.map( meme => 
          <Meme key={meme.id} meme={meme}/>
        )}
      </ul>
    </div>
  )
}

export default MemeList