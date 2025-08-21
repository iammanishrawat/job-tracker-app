import ProductList from "../pages/ProductList"
import { useEffect, useState } from "react"

const Products = () => {
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        getJobList()
    }, [])

    const getJobList = () => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setJobData(data)
            })
            .catch(() => {
                alert(`Bhai list check kar le ek baar`)
            })
    }
  return (
    <>
    <ProductList jobData={jobData} />
    </>
  )
}

export default Products
