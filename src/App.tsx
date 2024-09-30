import Category from "./components/Category"
import Footer from "./components/Footer"
import FormalWearBanner from "./components/FormalWearBanner"
import HeadingTexts from "./components/HeadingTexts"
import Highlight from "./components/Highlight"
import JustLanded from "./components/JustLanded"
import Navbar from "./components/Navbar"
import OurBrands from "./components/OurBrands"
import Slider from "./components/Slider"
import ProductGrid from "./components/TrendingProducts"

function App() {

  return (
    <>
      <Navbar/>
      <Slider/>
      <Highlight/>
      <HeadingTexts text="SHOP BY CATEGORY" />
      <Category/>
      <HeadingTexts text="JUST LANDED" />
      <JustLanded/>
      <FormalWearBanner/>
      <HeadingTexts text="TRENDING PRODUCTS" />
      <ProductGrid/>
      <HeadingTexts text="OUR BRANDS" />
      <OurBrands/>
      <Footer/>


    </>
  )
}

export default App
