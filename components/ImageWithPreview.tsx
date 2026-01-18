import React, { useState, useRef } from 'react';

interface ImageWithPreviewProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithPreview: React.FC<ImageWithPreviewProps> = ({ src, alt, className }) => {
  const [previewSrc, setPreviewSrc] = useState<string>(src);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a local URL for the selected file to preview it
      const objectUrl = URL.createObjectURL(file);
      setPreviewSrc(objectUrl);
    }
  };

  return (
    <div 
      className={`relative group cursor-pointer ${className || ''}`} 
      onClick={handleClick}
      title="クリックしてFinderから画像を選択（プレビュー）"
    >
      <img 
        src={previewSrc} 
        alt={alt} 
        className="w-full h-full object-cover transition-opacity duration-300" 
      />
      
      {/* Overlay for hover effect to indicate clickable */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center pointer-events-none">
        <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-xs sm:text-sm bg-black bg-opacity-60 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20 transform scale-95 group-hover:scale-100 transition-all">
          画像を差し替え（プレビュー）
        </span>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default ImageWithPreview;