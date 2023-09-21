import { Link } from 'react-router-dom';
import './index.css'

const footer=()=>{
    return(
        
        // <div className="footer">
        //     <footer style={{ fontSize: '2000px' }}></footer>

        //     <div className="sb_footer section_padding">
        //         <div className="sb_footer-links">
        //             <div className="sb_footer-links-div">
        //             <h5>About Us</h5>
        //             <p><b> Flowers & Fancies by Floral Fancies is committed to
        //                  offering only the finest floral arrangements and gifts, 
        //                  backed by service that is friendly and prompt.
        //                  Because all of our customers are important,
        //                  our professional staff is dedicated to making your experience a pleasant one.</b> </p>
        //         </div>
        //         <div className="col-sm-2">
        //             <h5>Special Services</h5>
        //             <p><a href=''>Shop Weddings</a></p>
        //             <p><a href=''>Event Florals </a></p>
        //         </div>
        //         <div className="col-sm-2">
        //         <h5>Flower Information</h5>
        //              <p><a href=''>Flower Care & Info</a></p>
        //              <p><a href=''>All About Birth Flowers</a></p>
        //              <p><a href=''>Identifying Fresh Flowers</a></p>
        //         </div> 
        //         <div className="col-sm-2">
        //             <h5>Contacts</h5> 
        //             <p><a href=''>0775811921</a></p>
        //             <p><a href=''>www.floralfancies.com</a></p>
        //             </div>
        //             </div>
        //             <h4>privacy policy</h4>
                    
        //         </div>
        //     </div>

        <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item">
        <Link to="/" class="nav-link px-2 text-muted">
        Home</Link>
        </li>
      <li class="nav-item">
        <Link to="/shop" class="nav-link px-2 text-muted">Shop</Link>
        </li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Gallery</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About Us</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Contacts</a></li>
    </ul>
    <p class="text-center text-muted">© 2023 Company, Inc</p>
  </footer>
        
    )

}

export default footer;