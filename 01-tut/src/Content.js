import React from 'react'

import ItemList from './ItemList'

const Content = ({items, handleClick, handleDelete}) => {

  return (
    <main>
        {items.length ? (
          <ItemList 
          items={items}
          handleDelete = {handleDelete}
          handleClick = {handleClick}
        />

        ) : (
       <p style={{ marginTop: '2rem'}}>
       Your list is empty
       </p>
  )}
    </main>
  )

}

export default Content