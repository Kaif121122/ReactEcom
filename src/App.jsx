import React from "react"
import { GlobalStyles } from "./styles/GlobalStyles"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/TotalProducts"
import Contact from "./components/Contact"
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart"
import Error from "./components/Error"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { ThemeProvider } from "styled-components"
import Footer from "./components/Footer"

function App() {

  const theme = {

    colors: {
      dark_Black_color: '#222831',
      light_Black_color: '#393E46',
      teal_color: '#00ADB5',
      grey_color: '#EEEEEE',
    },
    media: {
      laptop:"1024px",
      tab: "768px",
      mob: "550px"
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />}></Route>

        </Routes>
        <Footer />
      </ThemeProvider>
    </>

  )
}

export default App
