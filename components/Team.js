import React from 'react'
import SectionTitle from './generics/SectionTitle'
import Button from './generics/Button'
import image1 from '../assets/images/kristine palmer.png'
import image2 from '../assets/images/Mark Aubri.png'
import image3 from '../assets/images/kimberly hansen.png'
import image4 from '../assets/images/justin w.png'
import im1 from '../assets/images/rev1.png'
import im2 from '../assets/images/rev2.png'
import im3 from '../assets/images/rev3.png'
import TeamBox from './TeamBox'
import ReviewBox from './ReviewBox'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Team = () => {

    const teamTable=[
        { image:image1, title: "Kristine Palmer", description:"Chef Opperation Officer" },
        { image:image2, title: "Mark Aubri", description:"Senior Consultant"},
        { image:image3,  title: "Kimberly Hansen", description:"Senior Consultant"},
        { image:image4,  title: "Justin Willoman", description:"Senior Tech Consultant"}
    
    ]   

    const reviewTable=[
        { image:im1, title: "Cassandra Warren", description:"Bussines Manager, Dorfus" },
        { image:im2, title: "Amanda Tulling", description:"Senior Developer, Square"},
        { image:im3,  title: "Jack McDogglas", description:"Key Account Manager, Gobona"}
        
    ]   

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
       
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <section className="team">
    <div className="container">
        <div className="wrapper2">
            <div className="section-title">
                <SectionTitle title="Meet our team" description="Experience Team Members"/>
            </div>
            <div className="browse-btn">
            <Button type="yellow" url="members.html" title="Browse Team"/>
             
            </div>
            
        </div>
   
    <Carousel
     responsive={responsive}
    showDots={true}
    infinite={true} 
    removeArrowOnDeviceType={["mobile"]} 
    dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px" >
    {
                teamTable.map(( team, index) => (
                    <TeamBox key={index}  image={team.image} title={team.title} description={team.description} />
                ))
            }
            </Carousel>
    
    </div>
    <div className="reviews">
        <div className="container">
            <div className="section-title">
                <SectionTitle title="Testimonial" description="What our Clients Say"/>
               </div>
            <div className="testimonial">
                <div className="review">
                     <div>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    
                     </div>
                     <div>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                     
                  
                     </div>
                    <div>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <i className="fa-sharp fa-solid fa-star"></i>
                     <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                     
                      </div>    
                </div>
                <div className="photo">
                {
                reviewTable.map(( review, index) => (
                    <ReviewBox key={index}  image={review.image} title={review.title} description={review.description} />
                ))
            }
                    </div>
                

            </div>
            <div className="center-button">
             <Button type="dark" url="" title="All reviews"/>
            </div>
        </div>
    </div>
 </section>
  )
}

export default Team