import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './state/productSlice'

const store = configureStore({
    reducer: {
      productList: productSlice
    },
  })


console.log(store.productList)
export {
    store
}