import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import clientAxios from '../config/axios';

const SubstanceContext = createContext();

const SubstanceProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [actualCategory, setActualCategory] = useState({});
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);
    const [order, setOrder] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal);
    }, [order])

    const getCategories = async()=>{
        try {
            const {data} = await clientAxios('/api/categories')
            setCategories(data.data)
            setActualCategory(data.data[0])

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getCategories();
    },[])
    


    const handleClickCategory = id => {
        const category = categories.filter(category => category.id === id)[0]
        setActualCategory(category)

    }

    const handleClickModal = () => {
        setModal(!modal)

    }
    const handleSetProduct = product => {
        setProduct(product)
    }
    const handleAddOrder = ({ category_id, description, ...product }) => {
        if (order.some(orderState => orderState.id === product.id)) {
            const orderUpdate = order.map(orderState => orderState.id === product.id ? product : orderState)
            setOrder(orderUpdate)
            toast.success("The product was modified correctly!", {
                theme: "dark",
            })

        } else {
            setOrder([...order, product])
            toast.success("The product was added!", {
                theme: "dark",
            })
        }

    }
    const handleEditQuantity = id => {
        const productUpdate = order.filter(product => product.id === id)[0]
        setProduct(productUpdate);
        setModal(!modal);
    }
    const handleDeleteProductCart = id => {
        const orderUpdate = order.filter(product => product.id !== id)
        setOrder(orderUpdate);
        toast.success("Product deleted correctly!", {
            theme: "dark"
        });
    }


    return (
        <SubstanceContext.Provider

            value={{
                categories,
                actualCategory,
                handleClickCategory,
                handleClickModal,
                order,
                product,
                handleSetProduct,
                modal,
                handleAddOrder,
                handleEditQuantity,
                handleDeleteProductCart,
                total,
            }}


        >{children}</SubstanceContext.Provider>
    )
}
export {
    SubstanceProvider
}
export default SubstanceContext