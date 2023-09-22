import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
           <div className='lg:w-1/2 relative'>
           <img className='w-3/4 rounded-md' src={person} alt="" />
           <img className='w-1/2 border-8 border-white rounded-md absolute -right-0 -bottom-5' src={parts} alt="" />
           </div>
          <div className='lg:w-1/2 p-4'>
            <h1 className='text-orange-500 text-3xl font-bold'>About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <button className="btn bg-orange-500 hover:bg-orange-700">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
