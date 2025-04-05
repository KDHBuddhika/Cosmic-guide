import { useState } from 'react';
import { FaMoon, FaSun, FaStarOfLife, FaHeart } from 'react-icons/fa';

function Horoscope() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const horoscopeData = {
    aries: {
      today: "Today brings exciting opportunities for leadership. Your natural confidence will help you tackle challenges head-on. Focus on personal projects and don't be afraid to take initiative.",
      love: "Romance is highlighted today. Your passionate nature attracts admirers.",
      career: "A professional breakthrough is possible. Trust your instincts in meetings.",
      health: "Channel your energy into physical activities for best results.",
      lucky_number: "7",
      lucky_color: "Red",
      compatibility: "Leo"
    }
  };

  const signs = [
    { name: 'Aries', symbol: '♈', date: 'Mar 21 - Apr 19' },
    { name: 'Taurus', symbol: '♉', date: 'Apr 20 - May 20' },
    { name: 'Gemini', symbol: '♊', date: 'May 21 - Jun 20' },
    { name: 'Cancer', symbol: '♋', date: 'Jun 21 - Jul 22' },
    { name: 'Leo', symbol: '♌', date: 'Jul 23 - Aug 22' },
    { name: 'Virgo', symbol: '♍', date: 'Aug 23 - Sep 22' },
    { name: 'Libra', symbol: '♎', date: 'Sep 23 - Oct 22' },
    { name: 'Scorpio', symbol: '♏', date: 'Oct 23 - Nov 21' },
    { name: 'Sagittarius', symbol: '♐', date: 'Nov 22 - Dec 21' },
    { name: 'Capricorn', symbol: '♑', date: 'Dec 22 - Jan 19' },
    { name: 'Aquarius', symbol: '♒', date: 'Jan 20 - Feb 18' },
    { name: 'Pisces', symbol: '♓', date: 'Feb 19 - Mar 20' }
  ];

  const handleSignSelect = (sign) => {
    setIsLoading(true);
    setSelectedSign(sign.toLowerCase());
    setTimeout(() => setIsLoading(false), 1000); // Simulated loading
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-indigo-900/50 to-violet-900/50 backdrop-blur-xl"></div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="animate-float inline-block mb-8">
              <FaSun className="text-6xl text-amber-400 glow-effect" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent">
              Daily Horoscope
            </h1>
            <p className="text-xl text-cosmic-tertiary mb-4">{formatDate()}</p>
            <p className="text-lg text-cosmic-tertiary">
              Discover what the stars have aligned for you today
            </p>
          </div>
        </div>
      </section>

      {/* Zodiac Selection Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {signs.map((sign) => (
            <button
              key={sign.name}
              onClick={() => handleSignSelect(sign.name)}
              className={`glass-effect p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                selectedSign === sign.name.toLowerCase() ? 'cosmic-border bg-cosmic-accent/10' : ''
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-2">{sign.symbol}</span>
                <h3 className="text-lg font-semibold text-cosmic-primary mb-1">{sign.name}</h3>
                <p className="text-xs text-cosmic-tertiary">{sign.date}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Horoscope Display */}
      {selectedSign && (
        <section className="container mx-auto px-6 py-12">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto cosmic-border">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin text-cosmic-accent">
                  <FaStarOfLife className="text-4xl" />
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-200 to-purple-400 bg-clip-text text-transparent capitalize">
                    {selectedSign} Daily Horoscope
                  </h2>
                  <p className="text-cosmic-tertiary">{formatDate()}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="glass-effect p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-cosmic-primary">
                        <FaSun className="text-amber-400" />
                        Today's Overview
                      </h3>
                      <p className="text-cosmic-tertiary leading-relaxed">
                        {horoscopeData[selectedSign].today}
                      </p>
                    </div>

                    <div className="glass-effect p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-cosmic-primary">
                        <FaHeart className="text-pink-400" />
                        Love & Relationships
                      </h3>
                      <p className="text-cosmic-tertiary leading-relaxed">
                        {horoscopeData[selectedSign].love}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="glass-effect p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-cosmic-primary">
                        Career & Goals
                      </h3>
                      <p className="text-cosmic-tertiary leading-relaxed">
                        {horoscopeData[selectedSign].career}
                      </p>
                    </div>

                    <div className="glass-effect p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-cosmic-primary">
                        <FaMoon className="text-cosmic-accent" />
                        Lucky Elements
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-cosmic-tertiary mb-1">Lucky Number</p>
                          <p className="text-lg font-semibold text-cosmic-primary">
                            {horoscopeData[selectedSign].lucky_number}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-cosmic-tertiary mb-1">Lucky Color</p>
                          <p className="text-lg font-semibold text-cosmic-primary">
                            {horoscopeData[selectedSign].lucky_color}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-cosmic-tertiary mb-1">Compatible With</p>
                          <p className="text-lg font-semibold text-cosmic-primary">
                            {horoscopeData[selectedSign].compatibility}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

export default Horoscope;