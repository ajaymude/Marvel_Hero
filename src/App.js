import React, { useState } from 'react'
import Marvel from './Marvel'
import Search from './Search';

const App = () => {
  const [search, setSearch] =useState("spider");
  return (
    <div>
    <Search setSearch={setSearch} />
      <Marvel search={search}/>
    </div>
  )
}

export default App
