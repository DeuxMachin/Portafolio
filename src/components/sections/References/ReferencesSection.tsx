import { useState, useEffect } from 'react';
import { Card } from '../../ui/Card';
import { QuoteIcon, LinkedInIcon } from '../../ui/Icons';
import { references } from '../../../data/references';

export function ReferencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % references.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="references" className="py-24 bg-[#161B22] relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#A8E6CF] font-mono text-sm tracking-wider">
            // REFERENCIAS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8F9FA] mt-2">
            Lo que dicen de mí
          </h2>
          <div className="w-20 h-1 bg-[#A8E6CF] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Card className="relative p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-[#A8E6CF]/20">
              <QuoteIcon size={48} />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <blockquote className="text-lg md:text-xl text-[#B8BCC8] leading-relaxed mb-8 text-center italic">
                "{references[currentIndex].testimonial}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-[#2E333D] flex items-center justify-center text-2xl border-2 border-[#A8E6CF]/30">
                  👤
                </div>

                {/* Info */}
                <div className="text-left">
                  <h4 className="text-[#F8F9FA] font-semibold flex items-center gap-2">
                    {references[currentIndex].name}
                    {references[currentIndex].linkedinUrl && (
                      <a
                        href={references[currentIndex].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7A8090] hover:text-[#A8E6CF] transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <LinkedInIcon size={16} />
                      </a>
                    )}
                  </h4>
                  <p className="text-[#A8E6CF] text-sm">
                    {references[currentIndex].role}
                  </p>
                  <p className="text-[#7A8090] text-sm">
                    {references[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {references.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[#A8E6CF] w-8'
                    : 'bg-[#3A4050] hover:bg-[#7A8090]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All References Grid (visible on larger screens) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {references.map((reference, index) => (
            <Card
              key={reference.id}
              className={`p-6 cursor-pointer transition-all ${
                index === currentIndex
                  ? 'border-[#A8E6CF] bg-[#A8E6CF]/5'
                  : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#2E333D] flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <h4 className="text-[#F8F9FA] font-medium text-sm">
                    {reference.name}
                  </h4>
                  <p className="text-[#7A8090] text-xs">
                    {reference.role} @ {reference.company}
                  </p>
                </div>
              </div>
              <p className="text-[#B8BCC8] text-sm line-clamp-3">
                "{reference.testimonial}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReferencesSection;
