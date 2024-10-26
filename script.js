import React, { useEffect, useState } from 'react';
import { 
  Radiation, Radio, AlertTriangle, 
  Monitor, Smartphone,
  Clock, Users, BookOpen
} from 'lucide-react';

const NuclearWinterLanding = () => {
  const [glitchText, setGlitchText] = useState('ЯДЕРНАЯ ЗИМА');
  const [radiation, setRadiation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Эффект глитча для текста
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const glitched = "ЯДЕРНАЯ ЗИМА".split('').map(char => 
          Math.random() > 0.7 ? String.fromCharCode(Math.random() * 26 + 1040) : char
        ).join('');
        setGlitchText(glitched);
      } else {
        setGlitchText("ЯДЕРНАЯ ЗИМА");
      }
    }, 100);

    // Анимация счетчика радиации
    const radiationInterval = setInterval(() => {
      setRadiation(Math.floor(Math.random() * 150) + 100);
    }, 1000);

    // Показываем контент после загрузки
    setIsVisible(true);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(radiationInterval);
    };
  }, []);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "20+ часов геймплея",
      description: "Погрузитесь в атмосферу постапокалиптического СССР"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Множество персонажей",
      description: "Каждый со своей историей и мотивацией"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Нелинейный сюжет",
      description: "Ваши решения влияют на судьбу мира"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Радиационная сетка */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(57,255,20,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-[gradient-shift_20s_linear_infinite]" />

        {/* Основной контент героя */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform 
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Radiation className="w-24 h-24 text-green-500 mx-auto mb-8 animate-spin" />
          
          <h1 className="text-7xl md:text-8xl font-bold mb-8 transition-all duration-300"
              style={{
                textShadow: '0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)'
              }}>
            {glitchText}
          </h1>

          {/* Счетчик Гейгера */}
          <div className="inline-block bg-zinc-800/80 backdrop-blur-sm p-4 rounded-lg mb-8">
            <div className="flex items-center gap-4">
              <Radio className="w-6 h-6 text-red-500 animate-pulse" />
              <span className="font-mono text-green-500 text-xl">{radiation} мР/ч</span>
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
            </div>
          </div>

          {/* Платформы */}
          <div className="flex justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-green-500">
              <Monitor className="w-6 h-6" />
              <span>PC</span>
            </div>
            <div className="flex items-center gap-2 text-green-500">
              <Smartphone className="w-6 h-6" />
              <span>Mobile</span>
            </div>
          </div>

          {/* CTA кнопка */}
          <button className="group relative px-8 py-4 bg-green-500/20 hover:bg-green-500/30 
                           border-2 border-green-500 rounded-lg transition-all duration-300
                           hover:scale-105 overflow-hidden">
            <span className="relative z-10 font-mono text-green-500 group-hover:text-white
                           transition-colors duration-300">
              НАЧАТЬ ПУТЕШЕСТВИЕ
            </span>
          </button>
        </div>

        {/* Градиент внизу */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-500/10 to-transparent" />
      </div>

      {/* Features Section */}
      <div className="relative bg-zinc-800/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Особенности игры
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} 
                   className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-lg
                            border border-green-500/20 hover:border-green-500
                            transition-all duration-300 hover:scale-105">
                <div className="text-green-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>
    </div>
  );
};

export default NuclearWinterLanding;
