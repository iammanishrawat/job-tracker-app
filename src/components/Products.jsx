import { useEffect, useState } from 'react'

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
  return <div>Products</div>
}

export default Products
