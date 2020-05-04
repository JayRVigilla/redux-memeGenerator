import React from "react";

function Meme({topText, bottomText, imgURL}){

  return(
    <li>
      <p>{topText}</p>
      <img src={imgURL}></img>
  <p>{bottomText}</p>
    </li>
  )
}

default export Meme;




// for memelist
<ul>
  memelist.map(meme => id=> <Meme/...key={meme.id})
</ul>


// const renderBoxes = () => {
//   return (
//     <div>
//       {boxes.map(box => (
//         <div>
//           <Box key={box.id} id={box.id} backgroundColor={box.backgroundColor} width={box.width} height={box.height} remove={remove} />
//         </div>
//       ))}
//     </div>
//   );