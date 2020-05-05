import React from 'react';
import MemeForm from "./MemeForm"
import MemeList from "./MemeList"

/**
 * MemeGenerator renders the MemeForm and MemeList components
 */
function MemeGenerator(){



  return(
    <div>
      <MemeForm/>
      <MemeList/>
    </div>
  )
}


export default MemeGenerator;