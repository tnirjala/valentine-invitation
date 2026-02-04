import React, { useState } from 'react';

export default function ValentineEnvelope() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isSadSticker, setIsSadSticker] = useState(false);

  const handleEnvelopeClick = () => {
    setEnvelopeOpen(true);
    setTimeout(() => setShowQuestion(true), 800);
  };

  const handleNoHover = () => {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    setNoButtonPosition({ x: randomX, y: randomY });
    setIsSadSticker(true);
    
    // Reset to happy after 1 second
    setTimeout(() => setIsSadSticker(false), 1000);
  };

  const handleYes = () => {
    setAccepted(true);
  };

  return (
 <div 
  className="relative w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: window.innerWidth >= 768 
      ? `url(${process.env.PUBLIC_URL}/desktop-bg.jpg)` 
      : `url(${process.env.PUBLIC_URL}/mobile-bg.jpg)`
  }}
>
      {/* Falling Hearts Animation */}
      {accepted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <span className="text-4xl">❤️</span>
            </div>
          ))}
        </div>
      )}

      {/* Envelope Section */}
      {!envelopeOpen && !showQuestion && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            onClick={handleEnvelopeClick}
            className="cursor-pointer transform transition-all duration-300 hover:scale-110"
          >
            <div className="relative w-72 h-52">
              {/* Envelope Body - Cream/Beige Color */}
              <div className="absolute bottom-0 w-72 h-40 bg-gradient-to-br from-amber-50 to-stone-200 rounded-lg shadow-2xl border-4 border-red-900">
                {/* Envelope Flap */}
                <div className="absolute -top-24 left-0 w-0 h-0 border-l-[144px] border-l-transparent border-r-[144px] border-r-transparent border-b-[90px] border-b-stone-200 drop-shadow-2xl"></div>
                
                {/* Dark Red Heart in Middle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg width="100" height="100" viewBox="0 0 24 24" className="animate-pulse">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                          fill="#7f1d1d" 
                          stroke="#7f1d1d" 
                          strokeWidth="0.5"/>
                  </svg>
                </div>
                
                {/* Click Here, Sweetie Text */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <p className="text-red-900 text-xl font-bold drop-shadow-sm">
                    Click Here, Sweetie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Opening Envelope Animation */}
      {envelopeOpen && !showQuestion && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-72 h-52 animate-pulse">
            <div className="absolute bottom-0 w-72 h-40 bg-gradient-to-br from-amber-50 to-stone-200 rounded-lg shadow-2xl border-4 border-red-900">
              <div className="absolute -top-24 left-0 w-0 h-0 border-l-[144px] border-l-transparent border-r-[144px] border-r-transparent border-b-[90px] border-b-stone-200 animate-flip drop-shadow-2xl"></div>
            </div>
          </div>
        </div>
      )}

      {/* Question Card */}
      {showQuestion && !accepted && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md w-full mx-4 transform animate-slideIn border-4 border-red-900">
            <div className="text-center space-y-6">
              {/* Dynamic Sticker - Happy or Sad */}
              <div className="flex justify-center">
              <img 
               src={isSadSticker 
               ? `${process.env.PUBLIC_URL}/sad-sticker.png` 
               : `${process.env.PUBLIC_URL}/happy-sticker.png`} 
               alt="sticker"
               className="w-32 h-32 object-contain transition-all duration-300"
               />

              </div>
              <h1 className="text-4xl font-bold text-red-600 font-serif">Hi, Nimo!</h1>
              <p className="text-3xl font-semibold text-gray-800 leading-relaxed">
                Will you be my Valentine?
              </p>
              
              <div className="flex gap-6 justify-center pt-6 relative">
                <button
                  onClick={handleYes}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 hover:shadow-2xl active:scale-95"
                >
                  Yes! 💗
                </button>
                
                <button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="px-8 py-4 bg-gray-400 text-white text-xl font-bold rounded-full shadow-lg transition-all duration-200 absolute"
                  style={{
                    left: noButtonPosition.x ? `${noButtonPosition.x}px` : 'auto',
                    top: noButtonPosition.y ? `${noButtonPosition.y}px` : 'auto',
                    position: noButtonPosition.x ? 'fixed' : 'relative',
                  }}
                >
                  No 😢
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accepted Screen */}
      {accepted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="text-center space-y-8 animate-fadeIn z-40">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mx-4 border-4 border-red-900">
              {/* Love Sticker */}
              <div className="flex justify-center mb-6">
              <img 
                src={`${process.env.PUBLIC_URL}/love-sticker.png`} 
                alt="love sticker"
                className="w-40 h-40 object-contain animate-bounce-slow"
              />

              </div>
              <h1 className="text-5xl font-bold text-red-600 mb-6 font-serif animate-pulse">
                Yay! 🎉
              </h1>
              <p className="text-3xl text-gray-800 font-semibold leading-relaxed">
                Mayai Maya timi lai ❤️
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0.5;
          }
        }

        @keyframes flip {
          0% {
            transform: rotateX(0deg);
          }
          100% {
            transform: rotateX(180deg);
          }
        }

        @keyframes slideIn {
          0% {
            transform: scale(0) rotateY(180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotateY(0deg);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-flip {
          animation: flip 0.6s ease-in-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .text-9xl {
            font-size: 6rem;
          }
          .text-5xl {
            font-size: 2.5rem;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
