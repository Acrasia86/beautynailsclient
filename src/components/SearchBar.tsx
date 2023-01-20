import { observer } from 'mobx-react-lite'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
        <div className="container">
  <input placeholder='Sök tjänst' className='js-search' type="text" />
  <i id='searchIcon' className="fa fa-search"></i>
</div>
    </div>
  )
}

export default observer(SearchBar);
