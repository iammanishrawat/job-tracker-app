const ViewJobModal = ({ job, onClose }) => {
  if (!job) return null // agar job data hi nahi mila to kuch mat dikha

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{job.title}</h2>
        <p>
          <strong>Company:</strong> {job.company}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default ViewJobModal
