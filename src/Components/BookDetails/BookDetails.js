import image from "../../Pictures/book_cover.jpg"
import React from "react"
import Header from "../../routing/header";
import Main from "../../routing/main";
import Footer from "../../routing/footer";
const BookDetails = () => {
    return(
      <>
      <Header/>
        <div className="book_detail_container container">
            <div className="images">
                <img className="book_detail_img" alt="" src={image} />
            </div>
            <div className="product">
                <h1 className="book_detail_h1">Nike Epic React Fly-knit</h1>
                <h2 className="book_detail_h2">$150</h2>
                <p className="book_detail_p desc">The Nike Epic React Fly-knit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.</p>
            </div>
        </div>
        <Main/>
        <Footer/>
        </>
    )
}
export default BookDetails;