const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-bounce">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-mouse-scroll"></div>
        </div>
        <svg 
          className="w-4 h-4 text-white/50 animate-pulse" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollIndicator;