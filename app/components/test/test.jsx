import React, { useState } from 'react'

const test = () => {
 const [tags, settags] = useState([])
 const Data = [{
    id: 1,
    name : "BKC",
    tags : [tags]
 }]
  Data[tags].map((e,i)=>{
  settags(tags)
  })
  return (
    <div>test</div>
  )
}

export default test