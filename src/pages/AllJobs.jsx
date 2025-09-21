import { useEffect, useState } from 'react'
import AddJobModal from '../components/AddJobModal'
const AllJobs = () => {
  const [allJobListData, setAllJobListData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fetchJobData = () => {
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json())
      .then((data) => {
        setAllJobListData(data)
      })
      .catch((err) => console.error('No Data Found', err))
  }
  useEffect(() => {
    fetchJobData()
  }, [])
  return (
    <div className="mt-[100px] max-w-3xl mx-auto">
      <div className="justify-between flex">
        <h2 className="text-2xl font-bold mb-6">All Jobs</h2>
        <button
          type="button"
          className="bg-amber-400 cursor-pointer"
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          onClick={() => setIsModalOpen(true)}
        >
          Add New Job
        </button>
      </div>
      <div className="space-y-4 mt-4">
        {allJobListData.map((job) => {
          return (
            <>
              <div className="border p-4 rounded shadow" key={job.id}>
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <p>Salary: {job.salary}</p>
              </div>
            </>
          )
        })}
      </div>
      {/* Render modal when open */}
      {isModalOpen && (
        <AddJobModal
          onClose={() => setIsModalOpen(false)}
          onAdded={() => {
            setIsModalOpen(false)
            fetchJobData()
          }}
        />
      )}
    </div>
  )
}

export default AllJobs
