import React from "react";
import Navbar from "../navbar/page";
import LatestBlog from "../latestblog/page";
import Footer from "../Footer/page";



function Blog() {

  return (

    <div>
         <Navbar />
         <LatestBlog limit={6} />
         <Footer />
    </div>

        );
}

export default Blog;