import { useEffect, useState } from 'react'
import ProductList from '../pages/ProductList'
import AddProduct from '../pages/AddProduct'

const Products = () => {
  const [productListData, setProductListData] = useState([])

  // pehle function define karo
  const productData = () => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductListData(data.products)
      })
      .catch(() => {
        alert('data not found')
      })
  }

  // phir useEffect mein call karo
  useEffect(() => {
    productData()
  }, [])

  return (
    <>
      <AddProduct productData={productData} />
      <ProductList productListData={productListData} />
    </>
  )
}

export default Products
