import { useState, useCallback } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';

import Projects from './components/Projects';
import VideoModal from './components/VideoModal';
import About from './components/About';
import EditingStyle from './components/EditingStyle';
import Services from './components/Services';
import Skills from './components/Skills';
import Process from './components/Process';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionCut, RedFlash } from './components/SectionCut';

// All playable videos for modal navigation
const allVideos = [
  { src: '/videos/showreel.mp4', title: 'Main Showreel', category: 'Selected Work' },
  { src: '/videos/project-01.mp4', title: 'Visual Story', category: 'Cinematic Edit' },
  { src: '/videos/project-02.mp4', title: 'Motion Content', category: 'Content Edit' },
  { src: '/videos/project-03.mp4', title: 'Story Arc', category: 'Cinematic Edit' },
  { src: '/videos/project-04.mp4', title: 'Reels Edit', category: 'Short-Form' },
  { src: '/videos/0188.mp4', title: 'Social Cut', category: 'Social Media' },
  { src: '/videos/0882.mp4', title: 'Quick Impact', category: 'Short-Form' },
  { src: '/videos/project-07.mp4', title: 'Visual Flow', category: 'Motion' },
  { src: '/videos/0816.mp4', title: 'Creator Cut', category: 'Content Edit' },
  { src: '/videos/Video-3373.mp4', title: 'Rapid Fire', category: 'Short-Form' },
  { src: '/videos/Video-25529.mp4', title: 'Kinetic Pulse', category: 'Motion' },
  { src: '/videos/Video-20489.mp4', title: 'Micro Story', category: 'Content Edit' },
  { src: '/videos/Video-51870.mp4', title: 'Scroll Hook', category: 'Social Media' },
  { src: '/videos/0816-1.mp4', title: 'Frame Perfect', category: 'Cinematic Edit' },
  { src: '/videos/Video-70140.mp4', title: 'Snap Edit', category: 'Short-Form' },
  { src: '/videos/Video-72634.mp4', title: 'Drift', category: 'Motion' },
  { src: '/videos/Video-81678.mp4', title: 'Raw Cut', category: 'Content Edit' },
  { src: '/videos/17aug_analysis.mp4', title: 'Aug Analysis', category: 'Clipping' },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  function openVideo(src, title, category, projectIndex) {
    // Find the video in allVideos array
    let idx = allVideos.findIndex(v => v.src === src);
    if (idx === -1) idx = 0;
    setCurrentVideoIndex(idx);
    setModalOpen(true);
  }

  function handleShowreel() {
    setCurrentVideoIndex(0);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  function prevVideo() {
    setCurrentVideoIndex(prev => Math.max(0, prev - 1));
  }

  function nextVideo() {
    setCurrentVideoIndex(prev => Math.min(allVideos.length - 1, prev + 1));
  }

  const current = allVideos[currentVideoIndex];

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero onShowreel={handleShowreel} />
            <SectionCut />
            <Showreel onPlay={openVideo} />
            <RedFlash />

            <Projects onPlay={openVideo} />
            <SectionCut />
            <About />
            <RedFlash />
            <EditingStyle />
            <SectionCut />
            <Services />
            <RedFlash />
            <Skills />
            <SectionCut />
            <Process />
            <RedFlash />
            <Timeline />
            <SectionCut />
            <Contact />
          </main>
          <Footer />
        </>
      )}

      <VideoModal
        isOpen={modalOpen}
        videoSrc={current?.src}
        title={current?.title}
        category={current?.category}
        onClose={closeModal}
        onPrev={prevVideo}
        onNext={nextVideo}
        hasPrev={currentVideoIndex > 0}
        hasNext={currentVideoIndex < allVideos.length - 1}
      />
    </>
  );
}
