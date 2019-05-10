import React from 'react';
const SearchBox=({searchField,SearchChange})=>
{
    return(
        <div className='pa2'>
        <input className='pa3 ba b--green-lightest-blue' type='search'  placeholder='Enter Robo Name'
            onChange={SearchChange}
        />
        </div>
    );
}
export default SearchBox;