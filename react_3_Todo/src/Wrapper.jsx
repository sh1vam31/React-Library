import React, { createContext, useState } from 'react';

// Context  —  Prop drilling se bachne ke liye ham context ka use karte hai context matlab akk component banao orr jsme sara data daal do orr usko export kar do orr jis jis file me vo data ki need ho vaha par usko import kar do orr context jis principle par kaam karta hai usko bolte hai HOC (Higher Order Components) 
// context universal data to hold karta hai 
export const todocontext = createContext(null);

const Wrapper = (props) => {

    const [todo, settodo] = useState(
        [
          { id: 1, title: 'Kaam karle bhai', completed: false },
        ]
      )

  return (
    <todocontext.Provider value={[todo, settodo]}>
         {props.children}
    </todocontext.Provider> 
    
  )
}

export default Wrapper