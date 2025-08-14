import JobList from "../pages/jobsList"
import AddJob from "../pages/AddJob"

function Jobs() {
  return (
    <>
      {/* yha se old job list aayegi jiske sath add job wala form aayega or phir new fresh list show hogi */}
      <JobList />
      <AddJob />
    </>
  )
}

export default Jobs
