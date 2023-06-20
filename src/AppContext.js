import { createContext, useEffect, useState } from "react";
import productsApi from './api'
import { v4 as uuidv4 } from 'uuid';
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
  const [productsArr, setProducsArr] = useState(productsApi)
  const [adminIs, setAdminIs] = useState(false)
  const ListUser = JSON.parse(localStorage.getItem("ListUser"))
  const [CurrentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("CurrentUser")))
  const [totalCost, setTotalCost] = useState(0)

  const [UserProducts, setUserProduct] = useState(CurrentUser?.products || [])
  useEffect(()=>{
    let total = 0
    if(UserProducts){
      UserProducts?.forEach(product=>{
        console.log({price:product.price, quantity:product.quantity})
        total+= product.price * product.quantity
      })
      console.log({total})
    }
    setTotalCost(total)
  },[UserProducts])
  useEffect(() => {
    console.log(ListUser)
    let newListUser = ListUser?.map(user => user.id == CurrentUser.id ? CurrentUser : user)
    localStorage.setItem("ListUser", JSON.stringify(newListUser))
    localStorage.setItem("CurrentUser", JSON.stringify(CurrentUser))
  }, [CurrentUser])

  const saveNewUserToLocal = (newUser) => {
    const newUserData = {
      id: uuidv4(),
      orders: [],
      products: [],
      ...newUser
    }
    if (ListUser) {
      let newListUser = [...ListUser, newUserData]
      localStorage.setItem("ListUser", JSON.stringify(newListUser))
    } else {
      localStorage.setItem("ListUser", JSON.stringify([newUserData]))
    }
    localStorage.setItem("CurrentUser", JSON.stringify(newUserData))
  }
  const arrCollections = [
    {
      name: "PERSONALIZED",
      pathName: "personalized",
    },
    {
      name: "J1S SNEAKERS",
      pathName: "j1s-sneakers",
    },
    {
      name: "HIGH TOP SHOES",
      pathName: "high-top-shoes",
    },
  ]
  const handleAddProduct = (product) => {

    let idProduct = product.id
    let newProducts = []
    let productExised = UserProducts.find(item => item.id == idProduct)
    if (productExised) {
      newProducts = UserProducts.map(item => item.id == idProduct ? product : item)
    } else {
      newProducts = [...UserProducts, product]
    }

    setUserProduct(newProducts)
    setCurrentUser(prev => ({ ...prev, products: newProducts }))
  }
  const value = {
    arrCollections,
    productsArr,
    setProducsArr,
    adminIs, setAdminIs,
    UserProducts, setUserProduct,
    saveNewUserToLocal, handleAddProduct,
    totalCost
  };
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}