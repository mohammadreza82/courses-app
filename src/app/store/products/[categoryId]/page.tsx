import React from 'react'

interface ICategory{
    params: { categoryId: string };
    searchParams: {};
}

const Category = ( {params} : ICategory) => {
  console.log("Here Your ProductId", params);
    
  return (
    <div>Category {params.categoryId}</div>
  )
}

export default Category