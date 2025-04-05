import { useState } from 'react';
import { FaFire, FaWater, FaWind, FaMountain, FaInfoCircle } from 'react-icons/fa';

function Zodiac() {
  const [selectedElement, setSelectedElement] = useState('all');
  const [selectedSign, setSelectedSign] = useState(null);

  const elements = [
    { name: 'all', icon: FaInfoCircle, label: 'All Signs', color: 'text-cosmic-accent' },
    { name: 'fire', icon: FaFire, label: 'Fire Signs', color: 'text-red-500' },
    { name: 'water', icon: FaWater, label: 'Water Signs', color: 'text-blue-500' },
    { name: 'air', icon: FaWind, label: 'Air Signs', color: 'text-purple-400' },
    { name: 'earth', icon: FaMountain, label: 'Earth Signs', color: 'text-green-500' }
  ];

  const zodiacSigns = [
    {
      name: 'Aries',
      element: 'fire',
      date: 'March 21 - April 19',
      traits: ['Courageous', 'Determined', 'Confident'],
      description: 'Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination.',
      symbol: '♈'
    },
    {
      name: 'Taurus',
      element: 'earth',
      date: 'April 20 - May 20',
      traits: ['Reliable', 'Patient', 'Practical'],
      description: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments.',
      symbol: '♉'
    },
    {
      name: 'Gemini',
      element: 'air',
      date: 'May 21 - June 20',
      traits: ['Gentle', 'Curious', 'Adaptable'],
      description: 'Gemini is a dynamic, versatile sign that can quickly adapt to any situation. Represented by the celestial twins, this air sign is interested in so many pursuits.',
      symbol: '♊'
    },
    {
      name: 'Cancer',
      element: 'water',
      date: 'June 21 - July 22',
      traits: ['Tenacious', 'Imaginative', 'Loyal'],
      description: 'Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore representing Cancer\'s ability to exist in both emotional and material realms.',
      symbol: '♋'
    },
    {
      name: 'Leo',
      element: 'fire',
      date: 'July 23 - August 22',
      traits: ['Creative', 'Passionate', 'Generous'],
      description: 'Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle.',
      symbol: '♌'
    },
    {
      name: 'Virgo',
      element: 'earth',
      date: 'August 23 - September 22',
      traits: ['Loyal', 'Analytical', 'Kind'],
      description: 'Virgo is an earth sign historically represented by the goddess of wheat and agriculture. This earth sign is a perfectionist at heart and isn\'t afraid to improve skills through diligent and consistent practice.',
      symbol: '♍'
    },
    {
      name: 'Libra',
      element: 'air',
      date: 'September 23 - October 22',
      traits: ['Diplomatic', 'Gracious', 'Fair-minded'],
      description: 'Libra is an air sign represented by the scales, an association that reflects Libra\'s fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.',
      symbol: '♎'
    },
    {
      name: 'Scorpio',
      element: 'water',
      date: 'October 23 - November 21',
      traits: ['Resourceful', 'Powerful', 'Brave'],
      description: 'Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.',
      symbol: '♏'
    },
    {
      name: 'Sagittarius',
      element: 'fire',
      date: 'November 22 - December 21',
      traits: ['Generous', 'Idealistic', 'Great humor'],
      description: 'Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.',
      symbol: '♐'
    },
    {
      name: 'Capricorn',
      element: 'earth',
      date: 'December 22 - January 19',
      traits: ['Responsible', 'Disciplined', 'Self-control'],
      description: 'The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.',
      symbol: '♑'
    },
    {
      name: 'Aquarius',
      element: 'air',
      date: 'January 20 - February 18',
      traits: ['Progressive', 'Original', 'Independent'],
      description: 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land.',
      symbol: '♒'
    },
    {
      name: 'Pisces',
      element: 'water',
      date: 'February 19 - March 20',
      traits: ['Compassionate', 'Artistic', 'Intuitive'],
      description: 'Pisces, a water sign, is the last constellation of the zodiac. It\'s symbolized by two fish swimming in opposite directions, representing the constant division of Pisces\'s attention between fantasy and reality.',
      symbol: '♓'
    }
  ];

  const filteredSigns = selectedElement === 'all' 
    ? zodiacSigns 
    : zodiacSigns.filter(sign => sign.element === selectedElement);

  const getElementColor = (element) => {
    const colors = {
      fire: 'from-red-500 to-orange-500',
      water: 'from-blue-500 to-cyan-500',
      air: 'from-purple-400 to-indigo-400',
      earth: 'from-green-500 to-emerald-500'
    };
    return colors[element];
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Element Filter Section */}
      <section className="container mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 custom-gradient">
          Explore Zodiac Signs
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {elements.map(({ name, icon: Icon, label, color }) => (
            <button
              key={name}
              onClick={() => setSelectedElement(name)}
              className={`glass-effect px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2
                ${selectedElement === name ? 'cosmic-border bg-cosmic-accent/10' : ''}`}
            >
              <Icon className={`text-xl ${color}`} />
              <span className="text-cosmic-primary">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Zodiac Signs Grid */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSigns.map((sign) => (
            <div
              key={sign.name}
              onClick={() => setSelectedSign(selectedSign?.name === sign.name ? null : sign)}
              className={`glass-effect p-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer
                ${selectedSign?.name === sign.name ? 'cosmic-border bg-cosmic-accent/10' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-cosmic-primary flex items-center gap-2">
                  <span className={`text-3xl bg-gradient-to-r ${getElementColor(sign.element)} bg-clip-text text-transparent`}>
                    {sign.symbol}
                  </span>
                  {sign.name}
                </h3>
              </div>
              <p className="text-cosmic-tertiary text-sm mb-2">{sign.date}</p>
              <div className={`transition-all duration-300 overflow-hidden ${selectedSign?.name === sign.name ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pt-4">
                  <p className="text-cosmic-primary mb-4">{sign.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sign.traits.map((trait) => (
                      <span
                        key={trait}
                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${getElementColor(sign.element)} text-white`}
                      >
                        {trait}
                      </span>
                    ))}
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

export default Zodiac;