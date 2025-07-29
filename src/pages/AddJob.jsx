const AddJob = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Job</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Job Title</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Frontend Developer"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Company Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Google"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Job Location</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. Remote / Bangalore"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Status</label>
          <select className="w-full border px-3 py-2 rounded">
            <option>Pending</option>
            <option>Interview</option>
            <option>Declined</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Job
        </button>
      </form>
    </div>
  )
}

export default AddJob
