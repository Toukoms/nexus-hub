import { Product } from "@/types/Message"
import { states } from ".";

export type CartStateProps = {
    counter: { [key: string]: number};
    productsInCart: Product[];
    addProductToCart(product: Product): void;
    removeProductFromCart(id: string): void;
    getCartTotal(): number;
}

export const CartState: CartStateProps = {
    counter: {},
    productsInCart: [],
    addProductToCart: (product) => {
        if (product.id in states.counter) {
            states.counter[product.id] += 1;
        } else {
            states.counter[product.id] = 1;
            states.productsInCart = [product, ...states.productsInCart]
        }
    },
    getCartTotal: () => {
        let total = 0;
        states.productsInCart.forEach(product => total += parseFloat(product.price)*states.counter[product.id])
        return total
    },
    removeProductFromCart: (id) => {
        states.productsInCart = states.productsInCart.filter((product) => product.id !== id)
        delete states.counter[id]
    }
}