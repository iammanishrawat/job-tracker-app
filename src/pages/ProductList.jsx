
const ProductList = ({jobData}) => {
  return (
    <>
      <div className="cards-grid">
        {
            jobData.map((jobs) => {
                return(
                    <div className="card" key={jobs.id}>
                        <h4>{jobs.title}</h4>
                        <p>{jobs.description}</p>
                        <p>{jobs.price}</p>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default ProductList