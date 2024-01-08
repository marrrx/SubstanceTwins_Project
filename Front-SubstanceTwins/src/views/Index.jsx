import useSWR from 'swr'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product_card from '../components/product_card'
import useStore from '../hooks/useStore'
import clientAxios from '../config/axios'

export default function Index() {

  const { actualCategory } = useStore();

  //Consulta SWR
  const fetcher = () => clientAxios('/api/products').then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/products', fetcher)
  const products = isLoading ? [] : data.data.filter(product => product.categories_id === actualCategory.id);

  
  return (
    <>
      <br />
      <div className="container mt-5">
        <h1 class>{actualCategory.name}</h1>
        <h4 class>Choose the products you want add to the cart.</h4>

        <div className="row row-cols-3">
          {products.map(products => (
            <Product_card
              key={products.id}
              products={products}
            />
          ))}
        </div>
      </div>


    </>
  )
}
