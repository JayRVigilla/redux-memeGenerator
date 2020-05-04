import React from "react";
import Meme from "./Meme";
import {useSelector} from "react-redux";



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