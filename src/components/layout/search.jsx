import React, { useEffect, useState } from 'react'



const Search = () => {
    const [search, setSearch] = useState()
    useEffect(() => {
        console.log('post data to backend')
    }, [search])
    return (
        <div>
            <input value={search} onChange={e => { setSearch(e.target.value) }} />
        </div>
    );
}

export default Search;