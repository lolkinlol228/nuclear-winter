import React, { useEffect, useState } from 'react';
import { 
  Radiation, Radio, AlertTriangle, 
  Monitor, Smartphone, Clock, 
  Users, BookOpen, Waves,
  Thermometer, Wind
} from 'lucide-react';

const NuclearWinterLanding = () => {
  const [glitchText, setGlitchText] = useState('ЯДЕРНАЯ ЗИМА');
  const [radiation, setRadiation] = useState(0);
  const [temperature, setTemperature] = useState(-23);
  const [windSpeed, setWindSpeed] = useState(15);
  const [scanlineActive, setScanlineActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [dateTime, setDateTime] = useState('');
  
  useEffect(() => {
    // Обновление даты в советском стиле
    const updateDateTime = () => {
      const now = new Date();
      const formatted = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()} / ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      setDateTime(formatted);
    };

    // Глитч-эффект
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const glitched = "ЯДЕРНАЯ ЗИМА".split('').map(char => 
          Math.random() > 0.7 ? "БГДЖЗКЛМНПРСТФХЦЧШЩ"[Math.floor(Math.random() * 19)] : char
        ).join('');
        setGlitchText(glitched);
      } else {
        setGlitchText("ЯДЕРНАЯ ЗИМА");
      }
    }, 100);

    // Симуляция показаний приборов
    const metricsInterval = setInterval(() => {
      setRadiation(Math.floor(Math.random() * 150) + 100);
      setTemperature(-23 + Math.random() * 2);
      setWindSpeed(15 + Math.random() * 5);
    }, 1000);

    // Эффект мерцания ЭЛТ
    const scanlineInterval = setInterval(() => {
      setScanlineActive(prev => !prev);
    }, 5000);

    const dateInterval = setInterval(updateDateTime, 1000);
    updateDateTime();
    setIsVisible(true);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(metricsInterval);
      clearInterval(scanlineInterval);
      clearInterval(dateInterval);
    };
  }, []);

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "20+ часов геймплея",
      description: "Исследуйте руины некогда великой державы"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Множество персонажей",
      description: "Встречайте выживших в бункерах и заброшенных городах"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Нелинейный сюжет",
      description: "Каждое решение приближает или отдаляет ядерную зиму"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 overflow-hidden font-mono">
      {/* ЭЛТ эффект */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_80%)]" />
        <div className={`absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[length:100%_4px] ${scanlineActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`} />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Советский фоновый паттерн */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#00ff00_10px,#00ff00_11px)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,#00ff00_10px,#00ff00_11px)]" />
        </div>

        {/* Верхняя панель с датой и статусом */}
        <div className="absolute top-0 left-0 right-0 bg-zinc-900/80 border-b border-green-500/30 p-2">
          <div className="flex justify-between items-center text-green-500 text-sm">
            <div>СТАТУС: АКТИВЕН</div>
            <div>{dateTime}</div>
            <div>РЕЖИМ: БОЕВОЙ</div>
          </div>
        </div>

        {/* Основной контент */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform 
                        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-8 relative">
            <Radiation className="w-24 h-24 text-green-500 mx-auto animate-spin" />
            <div className="absolute inset-0 bg-gradient-radial from-green-500/20 to-transparent" />
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-8 min-h-[1.2em] tracking-wider text-green-500"
              style={{
                textShadow: '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)'
              }}>
            {glitchText}
          </h1>

          {/* Панель мониторинга */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {/* Радиация */}
            <div className="bg-zinc-800 border border-green-500/30 p-4">
              <div className="flex items-center gap-4 justify-center">
                <Radio className="w-6 h-6 text-green-500 animate-pulse" />
                <span className="text-green-500 text-xl">{radiation} мР/ч</span>
              </div>
              <div className="text-green-500/70 text-sm mt-2">РАДИАЦИОННЫЙ ФОН</div>
            </div>
            
            {/* Температура */}
            <div className="bg-zinc-800 border border-green-500/30 p-4">
              <div className="flex items-center gap-4 justify-center">
                <Thermometer className="w-6 h-6 text-green-500" />
                <span className="text-green-500 text-xl">{temperature.toFixed(1)}°C</span>
              </div>
              <div className="text-green-500/70 text-sm mt-2">ТЕМПЕРАТУРА</div>
            </div>
            
            {/* Ветер */}
            <div className="bg-zinc-800 border border-green-500/30 p-4">
              <div className="flex items-center gap-4 justify-center">
                <Wind className="w-6 h-6 text-green-500" />
                <span className="text-green-500 text-xl">{windSpeed.toFixed(1)} м/с</span>
              </div>
              <div className="text-green-500/70 text-sm mt-2">ВЕТЕР</div>
            </div>
          </div>

          {/* Платформы */}
          <div className="flex justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-green-500 border border-green-500/30 px-4 py-2">
              <Monitor className="w-6 h-6" />
              <span>PC</span>
            </div>
            <div className="flex items-center gap-2 text-green-500 border border-green-500/30 px-4 py-2">
              <Smartphone className="w-6 h-6" />
              <span>Mobile</span>
            </div>
          </div>

          {/* CTA кнопка */}
          <button className="group relative px-8 py-4 bg-green-500/10 
                           border-2 border-green-500/50 
                           hover:border-green-500 hover:bg-green-500/20
                           transition-all duration-300">
            <span className="relative z-10 text-green-500 group-hover:text-green-400">
              НАЧАТЬ ВЫЖИВАНИЕ
            </span>
            <div className="absolute inset-0 bg-green-500/10 translate-x-1 translate-y-1 -z-10" />
          </button>
        </div>

        {/* Нижний градиент */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
      </div>

      {/* Features Section */}
      <div className="relative bg-zinc-800/50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-500">
            ХАРАКТЕРИСТИКИ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} 
                   className="bg-zinc-900 border-2 border-green-500/30 p-6
                            hover:border-green-500/50 transition-all duration-300
                            relative group">
                <div className="text-green-500 mb-4 group-hover:animate-pulse">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-500">{feature.title}</h3>
                <p className="text-green-500/70">{feature.description}</p>
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-500/50 group-hover:bg-green-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuclearWinterLanding;
