import { useEffect, useState } from "react"

function AddJob() {
  const [newJobData, setNewJobData] = useState([])
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products' , {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'test product',
    //     description: 'lorem ipsum set',
    //     category: 'electronic'
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   setNewJobData(data)
    // })
    // .catch((err) => {
    //   alert('not creating new jobs', err)
    // })
  }, [])
  // handleSubmit((e) => {
  //   preventDefault(e)
  // })
  return (
    <>
      {/* yha form aayega jisse new jobs list me add hogi */}
      
      <form action="" className="addjob-from" onSubmit={''}>
        <input
          type="text"
          className="form-control mb-4"
          onChange={''}
          value={''}
          placeholder="Title"
          required
        />
        <input
          type="text"
          className="form-control mb-4"
          onChange={''}
          value={''}
          placeholder="Description"
          required
        />
        <input
          type="text"
          className="form-control mb-4"
          onChange={''}
          value={''}
          placeholder="Category"
          required
        />
        <button type="submit">Add Job</button>
      </form>
    </>
  )
}

export default AddJob
