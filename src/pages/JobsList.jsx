const jobsList = ({jobPostData}) => {
  return (
    <>
      <div className="cards-grid">
        {
          jobPostData.map((e) => {
            return(
              <div className="card">
                <h3>Job Name: {e.title}</h3>
                <p>Company: {e.company}</p>
                <p>Location: {e.Remote}</p>
                <p>Salary: {e.salary}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default jobsList
