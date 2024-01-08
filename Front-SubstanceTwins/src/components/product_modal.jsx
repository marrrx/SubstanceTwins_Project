import { useState, useEffect } from "react";
import { FormatMoney } from "../helpers";
import useStore from "../hooks/useStore"



export default function product_modal({ }) {
    const { product, handleAddOrder, order, handleClickModal } = useStore();
    const [quantity, setQuantity] = useState(1);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (order.some(orderState => orderState.id === product.id)) {
            const productEdit = order.filter(orderState => orderState.id === product.id)[0]

            setQuantity(productEdit.quantity)
            setEdit(true)
        }
    }, [order])


    return (
        <>
                            <div className="mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.image}
                                            className="img-fluid rounded-start"
                                            alt={`Imagen producto ${product.name}`}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                           
                                            <p className="card-text mt-4">
                                                {FormatMoney(product.price)}
                                            </p>
                                            <div className="row row-cols-auto">
                                                <div className="col">
                                                    <button
                                                        className="btn"
                                                        type="button"
                                                        onClick={() => {
                                                            if (quantity <= 1) return
                                                            setQuantity(quantity - 1);
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-dash-circle"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="col">

                                                    <p className="card-text mt-2 ">
                                                        <small className="text-body-secondary">{quantity}</small>
                                                    </p>
                                                </div>
                                                <div className="col">
                                                    <button
                                                        className="btn"
                                                        type="button"
                                                        onClick={() => {
                                                            if (quantity >= 5) return
                                                            setQuantity(quantity + 1);
                                                        }}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-plus-circle"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={()=>{
                                    handleClickModal();
                                }}
>
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-success ms-5"
                                onClick={() => {
                                    handleAddOrder({ ...product, quantity });
                                    setQuantity(quantity == 1);
                                    handleClickModal();

                                }}
                            >
                                { edit ? "Save changes" : "Add to cart"}                            
                                </button>
                        </div>

        </>
    )
}
