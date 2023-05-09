import { Product } from '@/types/Message'
import { proxy } from 'valtio'
import { CartState, CartStateProps } from './cart'

type StateProps = CartStateProps

export const states = proxy<StateProps>(
    { ...CartState }
)