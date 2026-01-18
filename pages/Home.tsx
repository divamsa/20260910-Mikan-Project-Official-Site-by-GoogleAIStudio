import React from 'react';

const Home: React.FC = () => {
  // 元のロゴ画像URL
  const logoImage = "https://res.cloudinary.com/dbyxjlzmt/image/upload/v1768714736/20260118Toppagemikanskelton_xyeq6v.png";

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden" style={{ backgroundColor: '#fffaf0' }}>
      
      {/* Decorative Blur Element */}
      <div 
        className="absolute -top-[10%] left-[8%] w-[25vw] h-[25vw] max-w-[240px] max-h-[240px] pointer-events-none z-0 opacity-90 mix-blend-multiply animate-soft-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(255, 131, 0, 1) 0%, rgba(255, 165, 30, 0.8) 50%, rgba(255, 200, 100, 0) 90%)',
          filter: 'blur(35px)',
        }}
      />

      {/* Styles for the custom pulse animation and fade-in effects */}
      <style>{`
        @keyframes soft-pulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.05); opacity: 0.95; }
        }
        .animate-soft-pulse {
          animation: soft-pulse 8s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }
      `}</style>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-16 w-full max-w-4xl text-center animate-fade-in-up">
        
        {/* Large Central Logo */}
        <div className="mb-12">
          <img 
            src={logoImage}
            alt="みかんプロジェクト" 
            className="w-full max-w-[600px] h-auto object-contain mix-blend-multiply"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-12 font-maru">
          <p className="text-xl sm:text-2xl text-gray-900 font-bold leading-loose tracking-[0.15em]">
            みかんプロジェクトはNHK番組を主とした<br />
            映像制作会社です
          </p>
          
          <p className="text-lg sm:text-xl text-gray-900 font-bold leading-loose tracking-[0.15em] opacity-80">
            世の中に埋もれた大切な忘れものを<br />
            届けることが出来たら<br />
            そんな思いで番組を作っています
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;