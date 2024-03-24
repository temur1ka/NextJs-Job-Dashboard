import React from 'react'

async function getData(id) {
  const response = await fetch("https://dummyjson.com/products/" + id);
  if (!response) {
    throw new Error("failed to fetch the data");
  }
  return response.json();
}

const Page = async ({params}) => {
  const data = await getData(params.id)
  
  return (
    <div>
      {data.title}
      </div>
  )
}

export default Page