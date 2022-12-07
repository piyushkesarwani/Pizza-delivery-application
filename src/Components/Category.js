import React from 'react'

export const Category = ({categories, filterItems}) => {
  return (
    <div className='categoryGroup'>
      {categories.map((category, index) => {
        return(
          <button type='button' className='btnCategory' key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}
