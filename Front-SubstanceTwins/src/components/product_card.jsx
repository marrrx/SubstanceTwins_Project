import { FormatMoney } from "../helpers"
import useStore from "../hooks/useStore"
import {useEffect} from 'react'




export default function product_card({ products }) {
  const { handleSetProduct, handleClickModal } = useStore();
  const { name, image, price, description } = products

  

  return (
    <>
      <div className="col p-4">

        <div className="card" style={{ width: " 18rem" }}>
          <img
            src={image}
            className="card-img-top"
            alt={`imagen ${name}`}

          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {description}
            </p>
            <h6 className="card-title">{FormatMoney(price)}</h6>

            <a
              type="button"
              className="btn btn-warning"
              onClick={() => {
                handleClickModal();
                handleSetProduct(products);
              }}
              
            >
              Add
            </a>
          </div>
        </div>

      </div>
    </>
  )
}
