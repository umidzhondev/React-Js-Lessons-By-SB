import React from 'react';

function MyButton({children,...props}){
    return (
       <button {...props} className='btn btn-primary w-100'>
            {children}
       </button> 
    )
}

export default MyButton;