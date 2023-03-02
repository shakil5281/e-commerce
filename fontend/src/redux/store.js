import { configureStore } from '@reduxjs/toolkit'
import { productSlice, productDetailSlice } from './state/productSlice'

const store = configureStore({
    reducer: {
      productList: productSlice,
      productDetails : productDetailSlice
    },
  })

export {
    store
}