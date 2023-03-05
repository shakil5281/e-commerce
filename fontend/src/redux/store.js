import { configureStore } from '@reduxjs/toolkit'
import { productSlice, productDetailSlice } from './state/productSlice'
import { userLoginSlice } from './state/userSlice'

const store = configureStore({
    reducer: {
      productList: productSlice,
      productDetails : productDetailSlice,
      userLogin: userLoginSlice
    },
  })

export {
    store
}