import Image from 'next/image';
import top1 from '@/assets/images/top1.png'
import top2 from '@/assets/images/top2.jpg'
import top3 from '@/assets/images/top3.png'
import avatar from '@/assets/images/avatar.png'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Empowering Your Lifestyle
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Innovative Solutions for Everyday Challenges
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Image 
              src= {top1}
              alt="Our Story" 
              width={600} 
              height={400} 
              className="rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Our journey began with a simple idea: to bring high-quality, innovative solutions to
              everyday problems. From humble beginnings to an industry leader, we've always stayed
              true to our mission.
            </p>
            <p className="text-gray-600">
              Over the years, we’ve achieved remarkable milestones and we’re just getting started.
              Join us as we continue to innovate and redefine what’s possible.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What We Believe In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image src={top2} alt="Innovation" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">We strive to bring the latest and greatest in product technology.</p>
            </div>
            {/* Repeat for other values */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image src={top3} alt="Sustainability" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">Our focus is on creating products that are both effective and eco-friendly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image src={top2} alt="Customer Focus" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600">We listen to our customers and create solutions tailored to their needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <Image src={top3} alt="Quality" width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">Excellence is at the heart of everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image 
                src={avatar} 
                alt="Team Member" 
                width={120} 
                height={120} 
                className="mx-auto rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            {/* Repeat for other team members */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image 
                src={avatar}  
                alt="Team Member" 
                width={120} 
                height={120} 
                className="mx-auto rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Jane Smith</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image 
                src={avatar} 
                alt="Team Member" 
                width={120} 
                height={120} 
                className="mx-auto rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Mike Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image 
                src={avatar}  
                alt="Team Member" 
                width={120} 
                height={120} 
                className="mx-auto rounded-full"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Emily Davis</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* Testimonial Slide */}
              <div className="swiper-slide p-6 bg-white rounded-lg shadow-lg">
                <Image 
                  src={avatar}
                  alt="Customer" 
                  width={60} 
                  height={60} 
                  className="rounded-full mx-auto"
                />
                <p className="text-lg font-semibold text-gray-800 mt-4">Great experience! The product changed my life.</p>
                <p className="text-sm text-gray-600">- Sarah Williams</p>
              </div>
              {/* Repeat for other testimonials */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg mb-6">
            Stay updated with the latest news and product releases.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
