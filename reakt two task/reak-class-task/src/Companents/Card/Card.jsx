import React from 'react'

function Card({data}) {
    return ( 
<>
<div>
{
    data.map((item,index)=>{
        return <div key={index}>
            <p>{item.title}</p>
            </div>
    })
}
    </div>
</>
  )
}

export default Card