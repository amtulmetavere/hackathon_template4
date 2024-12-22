import React from "react";
import Navbar from "../navbar/page";
import Featured_Product from "../FeaturedProduct/page";
import TrendingProducts from "../trendingproduct/page";
import LatestProducts from "../latestproduct/page";
import Footer from "../Footer/page";



function Product() {

  return (

    <div>
         <Navbar />
         <Featured_Product />
         <LatestProducts />
         <TrendingProducts />
         <Footer />
    </div>

        );
}

export default Product;
