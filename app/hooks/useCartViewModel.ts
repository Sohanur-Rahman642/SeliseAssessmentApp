import { useDispatch } from "react-redux";

interface MenuItem {
    id: number,
    name: string | undefined,
    description: string | undefined,
    price: number | undefined
}

export const useCartViewModel = () => {
    const dispatch = useDispatch()
    const addItemToCart = (param: MenuItem) => {
        dispatch(addToCart(param))
    }

    return { addItemToCart }
};