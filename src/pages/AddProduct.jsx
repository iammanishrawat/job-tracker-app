import { useState } from 'react'

const AddProduct = ({ productData }) => {
  const [productName, setProductName] = useState('')
  const [productDescriptions, setProductDescriptions] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const formSubmit = (e) => {
    e.preventDefault()
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: productName,
        description: productDescriptions,
        category: productCategory,
        price: productPrice,
        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        productData()
      })
      .catch(() => {
        alert('not data here')
      })
  }
  return (
    <>
      <h3>Add Product Form</h3>
      <form action="" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter Product Category"
          value={productCategory}
          onChange={(e) => {
            setProductCategory(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value)
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="Enter Descriptions"
          value={productDescriptions}
          onChange={(e) => {
            setProductDescriptions(e.target.value)
          }}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default AddProduct
