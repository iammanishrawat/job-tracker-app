import { useState } from 'react'

const AddJob = () => {
  const [titleData, setTitleData] = useState()
  const [descriptionData, setDescriptionData] = useState()
  const [locationData, setLocationData] = useState()
  const [companyNameData, setCompanyNameData] = useState()
  const handleJobSubmit = (e) => {
    e.preventDefault()
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleData,
        description: descriptionData,
        location: locationData,
        company: companyNameData,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }
  return (
    <>
      <form action="" onSubmit={handleJobSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => {
            setTitleData(e.target.value)
          }}
          value={titleData}
        />
        <input
          type="text"
          placeholder="Job Description"
          onChange={(e) => {
            setDescriptionData(e.target.value)
          }}
          value={descriptionData}
        />
        <input
          type="text"
          placeholder="Job Location"
          onChange={(e) => {
            setLocationData(e.target.value)
          }}
          value={locationData}
        />
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => {
            setCompanyNameData(e.target.value)
          }}
          value={companyNameData}
        />
        <button type="submit">Add Job</button>
      </form>
    </>
  )
}

export default AddJob
