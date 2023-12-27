import React from 'react'

const CategoryForm = ({value, setValue, handleSubmit}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input type="text" className="form-control" placeholder='Create Category Here....' value={value} onChange={(e)=> setValue(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </>
  )
}

export default CategoryForm
