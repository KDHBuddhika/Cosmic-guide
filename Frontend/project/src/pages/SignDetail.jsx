import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaHeart, FaSun, FaMoon } from 'react-icons/fa';

function SignDetail() {
  const { sign } = useParams();
  const navigate = useNavigate();

  const zodiacData = {
    aries: {
      name: 'Aries',
      element: 'fire',
      date: 'March 21 - April 19',
      symbol: '♈',
      ruling_planet: 'Mars',
      traits: ['Courageous', 'Determined', 'Confident', 'Enthusiastic', 'Optimistic', 'Honest', 'Passionate'],
      strengths: ['Natural born leader', 'Determined', 'Optimistic', 'Enthusiastic'],
      weaknesses: ['Impatient', 'Short tempered', 'Impulsive', 'Aggressive'],
      love_compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      career_paths: ['Entrepreneur', 'Athlete', 'Military', 'Sales', 'Management'],
      famous_people: ['Robert Downey Jr.', 'Lady Gaga', 'Reese Witherspoon', 'Emma Watson'],
      description: 'Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. As the first sign in the zodiac, they\'re the leaders of the pack, eager to blaze a trail and embark on new adventures.',
      detailed_traits: {
        personality: 'Aries possesses a strong personality characterized by their pioneering spirit and fearless approach to life. They are natural-born leaders who thrive on challenges and new beginnings.',
        love: 'In love, Aries is passionate and direct. They pursue their romantic interests with enthusiasm and aren\'t afraid to take the initiative. They seek partners who can match their energy and independence.',
        career: 'Professionally, Aries excels in positions of leadership and environments that offer challenges and opportunities for innovation. They have excellent entrepreneurial skills and thrive when taking initiative.',
        friendship: 'As friends, Aries are loyal and enthusiastic companions. They bring energy to social situations and are always ready for new adventures. They value authentic relationships and direct communication.'
      },
      images: {
        symbol: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        constellation: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      }
    }
  };

  const signInfo = zodiacData[sign.toLowerCase()];

  if (!signInfo) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cosmic-primary mb-4">Sign Not Found</h1>
          <button
            onClick={() => navigate('/zodiac')}
            className="glass-effect px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <FaArrowLeft /> Back to Zodiac Signs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Navigation */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-24 left-6 glass-effect p-3 rounded-full transition-all duration-300 hover:scale-105 z-10"
      >
        <FaArrowLeft className="text-cosmic-primary" />
      </button>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{signInfo.symbol}</span>
                <h1 className="text-4xl md:text-5xl font-bold custom-gradient">
                  {signInfo.name}
                </h1>
              </div>
              <p className="text-xl text-cosmic-tertiary mb-4">{signInfo.date}</p>
              <p className="text-cosmic-primary text-lg mb-6">{signInfo.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="glass-effect p-4 rounded-xl">
                  <FaSun className="text-cosmic-accent mb-2" />
                  <p className="text-cosmic-primary">Element: {signInfo.element}</p>
                </div>
                <div className="glass-effect p-4 rounded-xl">
                  <FaMoon className="text-cosmic-accent mb-2" />
                  <p className="text-cosmic-primary">Planet: {signInfo.ruling_planet}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={signInfo.images.symbol}
                alt={`${signInfo.name} symbol`}
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Traits Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-cosmic-primary flex items-center gap-2">
              <FaStar className="text-cosmic-accent" />
              Strengths
            </h2>
            <div className="flex flex-wrap gap-3">
              {signInfo.strengths.map((strength) => (
                <span key={strength} className="glass-effect px-4 py-2 rounded-full text-cosmic-primary">
                  {strength}
                </span>
              ))}
            </div>
          </div>
          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-cosmic-primary flex items-center gap-2">
              <FaHeart className="text-cosmic-accent" />
              Love Compatibility
            </h2>
            <div className="flex flex-wrap gap-3">
              {signInfo.love_compatibility.map((sign) => (
                <span key={sign} className="glass-effect px-4 py-2 rounded-full text-cosmic-primary">
                  {sign}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Traits Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(signInfo.detailed_traits).map(([key, value]) => (
            <div key={key} className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 capitalize text-cosmic-primary">{key}</h3>
              <p className="text-cosmic-tertiary">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Famous People Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-cosmic-primary">Famous {signInfo.name}s</h2>
        <div className="flex flex-wrap gap-4">
          {signInfo.famous_people.map((person) => (
            <span key={person} className="glass-effect px-4 py-2 rounded-full text-cosmic-primary">
              {person}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SignDetail;