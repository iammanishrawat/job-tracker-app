// JobList.jsx
import React from 'react'

function JobList({ allJobs }) {
  return (
    <div>
      <h2>All Jobs</h2>
      {allJobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        <ul>
          {allJobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> - {job.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default JobList
