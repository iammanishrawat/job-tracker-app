const JobsList = ({ jobData }) => {
  return (
    <>
      <div className="cards-grid">
        {jobData.map((jobs) => {
          return (
            <div className="card" key={jobs.id}>
              <h2>Job Title: {jobs.title}</h2>
              <p>Job Description: {jobs.description}</p>
              <p>Job Location: {jobs.location}</p>
              <p>Company: {jobs.company}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default JobsList
