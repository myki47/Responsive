import './about.css';
import Image from '../assets/pic.jpg';

function About() {
    return (
        // <section className="about">
        //     <h1>About Us</h1>
        //     <div className='about-section'>
        //     <div className='about-text'>
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur exercitationem, dicta repudiandae beatae excepturi nisi aliquid optio ratione illo reiciendis eveniet voluptas inventore voluptatem atque dolor sequi iusto blanditiis?</p>
        //     </div>
        //     <div className="about-image">
        //         <img src={Image} alt="about" />
        //     </div>
        //     </div>

        // </section>

        <section className='about'>
            <h3>About Us</h3>
             <div className='about-section'>
                
             <div className='about-text'>
                {/* <h1>About Us</h1> */}
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur exercitationem, dicta repudiandae beatae excepturi nisi aliquid optio ratione illo reiciendis eveniet voluptas inventore voluptatem atque dolor sequi iusto blanditiis?</p>
             </div>
             <div className='about-image'>
                  <img src={Image} alt="about" />
           </div>
           </div>
        </section>
    )
}

export default About;