import React from 'react'

const SearchBar = ({handleSubmit, value, handleChange}) => (
  <form onSubmit={handleSubmit}>
  <input type="text" value={value} placeholder="Entrer une ville, un pays" onChange={handleChange} />
  <input type="submit" value="Rechercher" />
  </form>
)
export default SearchBar