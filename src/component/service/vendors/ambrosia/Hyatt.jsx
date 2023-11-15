import loc from "../../../../assets/location.jpg"
import group from "../../../../assets/group.jpg"
import rate from "../../../../assets/Noun_Project_Star_icon_370530_cc.svg.svg"
import like from "../../../../assets/iconmonstr-heart-thin.svg"
import "./Ambrosia.css"
import tick from"../../../../assets/tick.jpg"
import imf from "../../../../assets/Hotel_Facade.jpg"
import cart from "../../../../assets/cart.svg"
function Hyatt(){
    return(
        
        <div className="ambody" ><div className="backf"><h1 className="heading">Hyatt Centric Rajpur Road </h1>
       <img src={imf} alt=""  className="weblovc"/> 
        <img src={loc} className="imgloc1"></img>
        <div className="cart"><button className="cartf"><img src={cart} alt="" />Add to Cart</button></div>
        <div className="loc1">Chennai</div>
        <img src={group} className="visicon1"></img>
        <div className="number1">Visitor Number-650</div>
        <div className="like1">
            <div className="icon">
                <img src={like} className="love"/>
                Add To Wishlist
            </div>
        </div></div>
        <hr />
        <div className="overview"> 
        <h2 className="head1">Overview</h2>
        <hr></hr>
            <div className="veg">
            <div ><button className="vegbutton">Veg <br></br>1500Rs </button></div>
                
            </div>
            <div className="nonveg">
            <div ><button className="nonvegbutton">NonVeg <br></br>2000Rs </button></div>
                
            </div>
        </div>
        <div className="about">
            <h2 className="abhead">About</h2>
            <hr />
            <p>HYATT CENTRIC Rajpur Road Dehradun is spread across 1 acre, located at a heart of Chennai, a short walk from all the best of city’s culture, entertainment, open markets and shopping . Right outside our gates is a street that is city’s lifeline and home to heritage landmarks and bustling Dehradun life ; for our guests to explore on foot or by short drive.

Hyatt Centric has an inventory of 126 keys, along with facilities like largest double height ball room, pre function areas that the city has to offer . Gymnasium, a Swimming pool at the rooftop, selection of rooms and suites with scenic views are some of what hotel offers to our guests. Concept restaurant with indoor & outdoor seating present stunning views of Mussoorie hills and ever - changing sights of sunrise and sunsets .
</p>
        </div>
        <div className="specification">
            <h1 className="sphead">Special Specifications</h1>
            <hr />
            <div className="jk">
            <div className="grid">
                <div className="box1"><img src={tick} className="tick"  ></img>Electricity Backup</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Air-conditioned</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Restaurant</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Airport Pickup/Drop</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Conference Center</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Wifi</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Pool</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Vallet Parking</div>
                <div className="box1"><img src={tick} className="tick"  ></img>Bar</div>

            </div></div>
        </div>
        <div className="spec">
            <h2 className="abhead">*Policies</h2>
            <hr />
            <br />
            <h3>Payment Policy</h3>
            <p>Upto 25% Advance while booking</p>
            <br />
            <h3>Cancellation Policy</h3>
            <p>No Refund</p>
        </div>
        <div className="rating">
            <h2>Ratings</h2>
            <hr />
            <img src={rate} className="rrr" alt="" />
            <h1>3.8</h1><p className="kk">rating</p>

        </div>



        
        </div>
        
    )
}
export default Hyatt;