import { FaStarOfLife, FaMoon, FaSun, FaHeart, FaUserAstronaut } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [hoveredSign, setHoveredSign] = useState(null);
  const navigate = useNavigate();
  
  const zodiacSigns = [
    { name: 'Aries', element: 'Fire', date: 'Mar 21 - Apr 19' },
    { name: 'Taurus', element: 'Earth', date: 'Apr 20 - May 20' },
    { name: 'Gemini', element: 'Air', date: 'May 21 - Jun 20' },
    { name: 'Cancer', element: 'Water', date: 'Jun 21 - Jul 22' },
    { name: 'Leo', element: 'Fire', date: 'Jul 23 - Aug 22' },
    { name: 'Virgo', element: 'Earth', date: 'Aug 23 - Sep 22' },
    { name: 'Libra', element: 'Air', date: 'Sep 23 - Oct 22' },
    { name: 'Scorpio', element: 'Water', date: 'Oct 23 - Nov 21' },
    { name: 'Sagittarius', element: 'Fire', date: 'Nov 22 - Dec 21' },
    { name: 'Capricorn', element: 'Earth', date: 'Dec 22 - Jan 19' },
    { name: 'Aquarius', element: 'Air', date: 'Jan 20 - Feb 18' },
    { name: 'Pisces', element: 'Water', date: 'Feb 19 - Mar 20' }
  ];

  const getElementColor = (element) => {
    const colors = {
      Fire: 'from-orange-500 to-red-500',
      Earth: 'from-lime-500 to-green-600',
      Air: 'from-sky-400 to-blue-500',
      Water: 'from-cyan-400 to-blue-600'
    };
    return colors[element];
  };

  const handleSignClick = (sign) => {
    navigate(`/zodiac/${sign.toLowerCase()}`);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <FaStarOfLife className="text-8xl text-yellow-300 relative animate-float" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
                Discover Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                Cosmic Path
              </span>
            </h1>
            
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
              Unlock the mysteries of the universe and find guidance in the stars. Your celestial journey begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => navigate('/quiz')}
                className="group relative px-8 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                  <FaUserAstronaut className="text-xl group-hover:rotate-12 transition-transform" />
                  Take the Quiz
                </span>
              </button>
              
              <button 
                onClick={() => navigate('/horoscope')}
                className="group relative px-8 py-4 overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                  <FaMoon className="text-xl group-hover:rotate-12 transition-transform" />
                  Daily Horoscope
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FaMoon,
              title: "Daily Guidance",
              description: "Receive personalized daily horoscope readings based on your zodiac sign and planetary alignments.",
              gradient: "from-orange-500 to-pink-500"
            },
            {
              icon: FaSun,
              title: "Personality Insights",
              description: "Discover deep insights about your personality traits, strengths, and potential through our detailed analysis.",
              gradient: "from-pink-500 to-purple-500"
            },
            {
              icon: FaHeart,
              title: "Zodiac Compatibility",
              description: "Learn about your compatibility with other zodiac signs in love, friendship, and work relationships.",
              gradient: "from-purple-500 to-violet-500"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
              <div className="glass-effect p-8 rounded-2xl relative z-10">
                <feature.icon className={`text-4xl mb-4 bg-gradient-to-r ${feature.gradient} text-transparent bg-clip-text`} />
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zodiac Signs Grid */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Explore Your Zodiac Sign
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {zodiacSigns.map((sign) => (
            <div
              key={sign.name}
              onClick={() => handleSignClick(sign.name)}
              onMouseEnter={() => setHoveredSign(sign.name)}
              onMouseLeave={() => setHoveredSign(null)}
              className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${getElementColor(sign.element)} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              <div className="glass-effect p-6 relative z-10">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {sign.name}
                  </h3>
                  <div className={`transform transition-all duration-300 ${
                    hoveredSign === sign.name ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <p className={`text-sm font-medium bg-gradient-to-r ${getElementColor(sign.element)} bg-clip-text text-transparent`}>
                      {sign.element}
                    </p>
                    <p className="text-gray-200 text-sm mt-1">{sign.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;