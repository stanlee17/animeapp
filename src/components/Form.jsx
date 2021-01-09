import React from 'react'

const Form = ({ query, setQuery, searchHandler }) => {
  return (
    <>
      <form className="form" onSubmit={searchHandler}>
        <input
          className="form__search"
          type="text"
          placeholder="Search anime..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button className="form__btn">Search</button>
      </form>
    </>
  )
}

export default Form
