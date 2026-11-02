import React from 'react';
import { User, Image as ImageIcon, Camera, Building } from 'lucide-react';

/**
 * ImagePlaceholder component that renders client-provided images, or
 * clearly marked, elegant medical placeholders when no client asset is yet provided.
 */
export const ImagePlaceholder = ({
  src,
  alt = "Clinic image",
  label = "[Client Image Placeholder]",
  type = "generic",
  className = "",
  aspectRatio = "aspect-4/3",
}) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover rounded-2xl transition-all duration-300 ${className}`}
      />
    );
  }

  // Icons based on placeholder type
  const renderIcon = () => {
    switch (type) {
      case "doctor":
        return <User className="w-12 h-12 text-[#0145f2]/70" />;
      case "about":
        return <Building className="w-12 h-12 text-[#0145f2]/70" />;
      case "hero":
        return <Camera className="w-12 h-12 text-[#0145f2]/70" />;
      default:
        return <ImageIcon className="w-12 h-12 text-[#0145f2]/70" />;
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#edf1f5] via-white to-blue-50/50 border-2 border-dashed border-blue-200/80 rounded-2xl text-center group transition-all duration-300 hover:border-[#0145f2] hover:shadow-md ${aspectRatio} ${className}`}
      role="img"
      aria-label={`${alt} - Placeholder`}
    >
      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-3 text-[#0145f2] shadow-xs group-hover:scale-105 transition-transform">
        {renderIcon()}
      </div>
      <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-[#0145f2] border border-blue-200/70 tracking-wide uppercase">
        {label}
      </span>
      <p className="text-[11px] text-slate-500 mt-2 max-w-[200px] leading-tight">
        Add image in <code className="text-[#0145f2] font-mono text-[10px] bg-blue-50 px-1 py-0.5 rounded">src/data/clinic.js</code>
      </p>
    </div>
  );
};

export default ImagePlaceholder;
