import { useNavigate } from "react-router-dom";

const AboutMe = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://firebasestorage.googleapis.com/v0/b/elle-s-portfolio.appspot.com/o/assets%2Fprofile.jpeg?alt=media&token=5939cfdd-4a10-42c8-9e29-7370f6f538c5" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-20">
            <h1 className="text-5xl">Hi, my name is...</h1>
            <h1 className="text-4xl mt-5 mb-3 btn btn-outline btn-primary">Celia Patterson</h1>
            <p className="py-3">I am a marketing professional working in New York City. I have experience working in graphic design, social media, email marketing, and more.</p>
            <p className="py-3">In my free time, I love to create doodles. I enjoy making digital art that focuses on textural elements and color contrast. A lot of my work incorporates type design, as I love to play with adding words and phrases. Feel free to take a look at some of my work below!</p>
            <button className="btn btn-primary mr-5 mt-3" onClick={() => navigate("/photography")}>Photography</button>
            <button className="btn btn-secondary" onClick={() => navigate("/design")}>Design</button>
          </div>
        </div>
      </div>
    );
};

export default AboutMe;
