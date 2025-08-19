function JobList({ jobData }) {
  return (
    <>
      <div className="cards-grid">
        {jobData.map((product) => {
          return (
            <div className="card">
              <h5>Product: {product.title}</h5>
              <h6>Description: {product.description}</h6>
              <h6>Category: {product.category}</h6>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default JobList
