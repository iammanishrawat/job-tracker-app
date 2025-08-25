import { useEffect, useState } from 'react'
import ProductList from '../pages/ProductList'

const Products = () => {
  const [productListData, setProductListData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProductListData(data.products)
      })
      .catch(() => {
        alert('data not found')
      })
  }, [])
  return (
    <>
      <ProductList productListData={productListData} />
    </>
  )
}

export default Products
