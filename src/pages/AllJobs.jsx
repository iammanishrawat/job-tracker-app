import { useEffect, useState } from 'react'
import AddJobModal from '../components/AddJobModal'
import ViewJobModal from '../components/ViewJobModal'
const AllJobs = () => {
  const [allJobListData, setAllJobListData] = useState([])
  const [isAddJobModalOpen, setIsAddJobModalOpen] = useState(false)
  const [isViewJobModal, setIsViewJobModal] = useState(false)

  const fetchJobData = () => {
    fetch('http://localhost:3000/jobs')
      .then((response) => response.json())
      .then((data) => {
        setAllJobListData(data)
      })
      .catch((err) => console.error('No Data Found', err))
  }
  const deleteJobCard = (id) => {
    const shouldDelete = confirm('Do you want to delete')
    if (!shouldDelete) return
    fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log(`Job ${id} deleted`)
        fetchJobData()
      })
      .catch((err) => console.error('Delete failed', err))
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
          onClick={() => setIsAddJobModalOpen(true)}
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
                <div className="action-button flex gap-2">
                  <button
                    type="button"
                    className="button text-green-500 cursor-pointer"
                    onClick={() => setIsViewJobModal(job)}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="button btn-primary text-yellow-500 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="button btn-primary text-red-500 cursor-pointer"
                    onClick={() => deleteJobCard(job.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          )
        })}
      </div>
      {/* Render modal when open */}
      {isAddJobModalOpen && (
        <AddJobModal
          onClose={() => setIsAddJobModalOpen(false)}
          onAdded={() => {
            setIsAddJobModalOpen(false)
            fetchJobData()
          }}
        />
      )}

      {isViewJobModal && (
        <ViewJobModal
          job={isViewJobModal}
          onClose={() => setIsViewJobModal(false)}
        />
      )}
    </div>
  )
}

export default AllJobs
