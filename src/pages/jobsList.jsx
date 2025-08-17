function JobList({ jobData }) {
  return (
    <>
      <div className="cards-grid">
        {jobData.map((job) => {
          return (
            <div className="card">
              <h5>Job: {job.name}</h5>
              <h6>Job Description: {job.username}</h6>
              <h6>Company Name: {job.email}</h6>
              <h6>Location: {job.address.city}</h6>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default JobList
