const JobsList = ({ jobListData }) => {
  return (
    <>
      <div className="cards-grid">
        {jobListData.map((data) => {
          return (
            <div className="card" key={data.id}>
              <h4>Title: {data.title}</h4>
              <p>Company: {data.company}</p>
              <p>Location: {data.location}</p>
              <p>Salary: {data.salary}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default JobsList
