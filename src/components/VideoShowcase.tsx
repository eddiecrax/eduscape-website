import { useState, useRef } from 'react';
import { Play, X, Volume2, VolumeX, Clock, Presentation } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function VideoShowcase() {
  const { ref, inView } = useScrollReveal();
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {
          // If browser policy blocks autoplay with sound, fall back to muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            setMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    });
  };

  const handleClose = () => {
    setPlaying(false);
    videoRef.current?.pause();
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="video" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent" />
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-5">
            <Presentation className="w-3.5 h-3.5" />
            Product Walkthrough
          </div>
          <h2 className={`text-3xl sm:text-4xl font-display font-extrabold text-slate-900 text-balance leading-[1.3] sm:leading-[1.32] ${inView ? 'animate-fade-up' : 'reveal'}`}>
            See EduScape in action
          </h2>
          <p className={`mt-4 text-base text-slate-600 leading-relaxed text-pretty ${inView ? 'animate-fade-up' : 'reveal'}`} style={{ animationDelay: '0.1s' }}>
            A product walk-through showing how EduScape anchors student queries to lecturer courseware, delivers CBE-aligned responses, and respects institutional boundaries.
          </p>
        </div>

        <div
          className={`relative ${inView ? 'animate-scale-in' : 'reveal'}`}
          style={{ animationDelay: '0.15s' }}
        >
          {/* Video container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 ring-1 ring-slate-200/60 bg-slate-950 group">
            {/* Poster state: preview image + play button */}
            {!playing && (
              <>
                <div className="aspect-video relative overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src="/pitch-deck-poster.jpg"
                    alt="EduScape AI Product Demo Preview"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.75] transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

                  {/* Center content */}
                  <div className="relative flex flex-col items-center text-center px-6 z-10">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mb-5 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-600">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-primary-700 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <p className="text-white font-display font-bold text-lg sm:text-2xl drop-shadow-md">
                      EduScape AI — Product Walkthrough
                    </p>
                    <p className="mt-2 text-sm text-blue-100/90 font-medium">
                      Click to watch EduScape in action
                    </p>
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-3 text-white/90 z-10">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-medium">Product Overview (1:00 min)</span>
                </div>
              </>
            )}

            {/* Active video player */}
            {playing && (
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  muted={muted}
                  playsInline
                  poster="/pitch-deck-poster.jpg"
                >
                  <source src="/pitch-deck.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                {/* Custom overlay controls */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <button
                    onClick={toggleMute}
                    className="w-9 h-9 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-slate-800 transition-colors shadow-lg"
                    aria-label={muted ? 'Unmute' : 'Mute'}
                  >
                    {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-9 h-9 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-slate-800 transition-colors shadow-lg"
                    aria-label="Close video"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Click-to-play overlay */}
            {!playing && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 z-20 cursor-pointer"
                aria-label="Play product walkthrough video"
              />
            )}
          </div>

          {/* Caption below video */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <Presentation className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Product Demonstration</p>
                <p className="text-xs text-slate-500">Course-grounded AI tutoring, CBE roadmap alignment, and source attribution in action</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 font-medium text-slate-700">Product Walkthrough</span>
              <span className="px-2.5 py-1 rounded-full bg-primary-50 border border-primary-200 font-medium text-primary-700">1:00 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
