import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './TrainersSection.css';
import Hari from '../assets/Hari.png';
import Karthik from '../assets/Karthik.png';
import Ameesha from '../assets/Ameesha.png';
import Akash from '../assets/Akash.png';

/* ==========================================================================
   24 SEAMLESS TRIANGULAR FRAGMENTS GENERATOR
   Creates an exact, non-overlapping Delaunay-like triangulation over [0,100]x[0,100].
   Independent 3D translation (tx, ty, tz), rotation (rx, ry, rz), scale, and staggered delay.
   ========================================================================== */
const TRIANGLE_ROWS = [
  [[0, 0], [32, 0], [68, 0], [100, 0]],
  [[0, 28], [38, 24], [66, 30], [100, 26]],
  [[0, 54], [28, 58], [72, 52], [100, 54]],
  [[0, 78], [35, 80], [64, 76], [100, 78]],
  [[0, 100], [30, 100], [70, 100], [100, 100]],
];

const RAW_TRIANGLES = [];
for (let r = 0; r < 4; r++) {
  for (let c = 0; c < 3; c++) {
    const tl = TRIANGLE_ROWS[r][c];
    const tr = TRIANGLE_ROWS[r][c + 1];
    const bl = TRIANGLE_ROWS[r + 1][c];
    const br = TRIANGLE_ROWS[r + 1][c + 1];
    if ((r + c) % 2 === 0) {
      RAW_TRIANGLES.push([tl, tr, br]);
      RAW_TRIANGLES.push([tl, br, bl]);
    } else {
      RAW_TRIANGLES.push([tl, tr, bl]);
      RAW_TRIANGLES.push([tr, br, bl]);
    }
  }
}

const SUPER_FLOW_FRAGMENTS = RAW_TRIANGLES.map((tri, i) => {
  const clip = `polygon(${tri.map((p) => `${p[0]}% ${p[1]}%`).join(', ')})`;
  const cx = (tri[0][0] + tri[1][0] + tri[2][0]) / 3;
  const cy = (tri[0][1] + tri[1][1] + tri[2][1]) / 3;
  const dx = cx - 50;
  const dy = cy - 50;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const nx = dx / dist;
  const ny = dy / dist;

  // Varied 3D parallax trajectories: some outward, some inward into depth
  const isOutward = i % 2 === 0;
  const zMult = isOutward ? 1 : -0.75;
  const tx = Math.round(nx * (34 + (i % 5) * 14));
  const ty = Math.round(ny * (34 + (i % 4) * 14));
  const tz = Math.round(zMult * (48 + (i % 6) * 16));
  const rx = Math.round(((i * 7) % 25 - 12));
  const ry = Math.round(((i * 11) % 25 - 12));
  const rz = Math.round(((i * 13) % 21 - 10));
  const scale = Number((0.84 + (i % 4) * 0.08).toFixed(2));
  const delay = Math.round(i * 18); // 0 to ~414ms

  return {
    id: i,
    clip,
    tx,
    ty,
    tz,
    rx,
    ry,
    rz,
    scale,
    delay,
  };
});

export default function TrainersSection() {
  const [activeTrainerIndex, setActiveTrainerIndex] = useState(0);
  const [prevTrainerIndex, setPrevTrainerIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDispersing, setIsDispersing] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const sectionRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  // Four existing trainers strictly preserved
  const trainers = [
    {
      id: 1,
      name: 'Sri Hari Chilumuri',
      role: 'Java Developer | Frontend & Backend Development',
      companies: [],
      image: Hari,
      accentColor: '#A31C1B',
      mentored: '430+ Engineers',
      specialty: 'Java, HTML5, CSS3, JavaScript, React.js & SQL',
      bio: 'Computer Science graduate with a strong foundation in Java programming, frontend development and database management. Focused on building responsive web applications, developing practical software solutions and continuously strengthening technical skills.',
    },
    {
      id: 2,
      name: 'Akash Katam',
      role: 'GenAI & Python Full-Stack Developer',
      companies: [],
      image: Akash,
      accentColor: '#8B5CF6',
      mentored: '380+ Engineers',
      specialty: 'Generative AI, LLMs, Prompt Engineering, Python, Django, FastAPI, REST APIs & Full-Stack Development',
      bio: 'Specializes in Generative AI concepts and Python-based application development, with a focus on building intelligent applications, developing backend services and integrating AI capabilities into modern full-stack solutions.',
    },
    {
      id: 3,
      name: 'Karthik Neelagiri',
      role: 'Cybersecurity & Network Security Specialist',
      companies: [],
      image: Karthik,
      accentColor: '#10B981',
      mentored: '310+ Engineers',
      specialty: 'Ethical Hacking, Network Security, TCP/IP, Routing & Switching, Linux, SOC Operations & SIEM Tools',
      bio: 'Focuses on cybersecurity fundamentals and network infrastructure, covering ethical hacking, network defense, Linux security and security monitoring. Emphasizes hands-on lab exercises, practical troubleshooting and real-world security concepts.',
    },
    {
      id: 4,
      name: 'Ameesha Gade',
      role: 'Software Testing & QA Trainer',
      companies: [],
      image: Ameesha,
      accentColor: '#F43F5E',
      mentored: '390+ Engineers',
      specialty: 'Manual Testing, Automation Testing, Selenium, Playwright, API Testing, SQL & Test Case Design',
      bio: 'Focuses on software testing fundamentals and quality assurance practices, covering manual and automation testing, test case design, API validation and defect tracking. Emphasizes practical exercises and hands-on projects to help learners develop industry-relevant testing skills.',
    },
  ];

  // Scroll entrance observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Reduced motion preference check: disable autoplay if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
  }, [swiperInstance]);

  // Clean up any pending transition safety timer
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Swiper Slide Change Event Handlers
  const handleSlideChangeStart = (swiper) => {
    const newIndex = swiper.realIndex;
    const oldIndex = activeTrainerIndex;

    if (newIndex !== oldIndex) {
      // Determine forward or backward direction
      const isForward =
        (newIndex > oldIndex && !(oldIndex === 0 && newIndex === trainers.length - 1)) ||
        (oldIndex === trainers.length - 1 && newIndex === 0);
      const dir = isForward ? 1 : -1;
      setTransitionDirection(dir);
      setPrevTrainerIndex(oldIndex);
      setActiveTrainerIndex(newIndex);
      setIsTransitioning(true);
      setIsDispersing(false);

      // Trigger dispersal in next frame so the initial 0-transform state is painted
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsDispersing(true);
        });
      });

      // Complete lifecycle timer for the full 1050ms staggered fragment dispersal
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setIsDispersing(false);
        setPrevTrainerIndex(null);
      }, 1050);
    }
  };

  const handleSlideChangeEnd = () => {
    // Preserve active dispersal until the complete 1050ms animation lifecycle finishes
    // This prevents quick touch swipes on Android mobile from truncating the animation
  };

  // Desktop hover pause: only pauses on devices with actual hover capability (never on touch screens)
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches && swiperInstance?.autoplay) {
      swiperInstance.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches && swiperInstance?.autoplay) {
      swiperInstance.autoplay.start();
    }
  };

  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleBulletClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section className="trainers-section" id="trainers" ref={sectionRef}>
      <div className="trainers-container">
        {/* Section Header */}
        <div className="trainers-header reveal-content">
          <div className="trainers-badge">
            <span className="star-glow">★</span>
            <span>Corporate Faculty & Mentors</span>
          </div>
          <h2 className="trainers-title">
            Learn from <span className="trainers-gradient">Corporate Trainers</span>
          </h2>
          <p className="trainers-sub">
            No academic theorists. Every mentor at QuickEd Solutions is a verified senior engineer or architect 
            with a proven track record at top global tech giants.
          </p>
        </div>

        {/* Super Flow-Inspired Swiper Carousel */}
        <div 
          className="trainers-carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Keyboard, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop={true}
            speed={900}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false, // Prevents simulated mouseenter on Android touch from permanently pausing autoplay
            }}
            keyboard={{
              enabled: true,
            }}
            onSwiper={setSwiperInstance}
            onSlideChangeTransitionStart={handleSlideChangeStart}
            onSlideChangeTransitionEnd={handleSlideChangeEnd}
            className="trainers-swiper"
          >
            {trainers.map((trainer, index) => {
              const skills = trainer.specialty.split(',').map((s) => s.trim());
              const isCurrentActive = activeTrainerIndex === index;
              const isIncomingTransition = isCurrentActive && isTransitioning && prevTrainerIndex !== null;
              const outgoingImage = isIncomingTransition ? trainers[prevTrainerIndex].image : null;

              return (
                <SwiperSlide key={trainer.id} className="trainer-slide">
                  <div 
                    className="trainer-showcase-card"
                    style={{ '--accent': trainer.accentColor }}
                  >
                    {/* LEFT COLUMN: Trainer Photograph with Super Flow Triangular Fragment Engine */}
                    <div className="trainer-photo-col">
                      <div className={`trainer-photo-wrapper ${isIncomingTransition ? 'is-transitioning' : ''}`}>
                        {/* Base High-Resolution Trainer Portrait */}
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          className="trainer-photo-main"
                          loading="eager"
                        />

                        {/* Super Flow Triangular Fragment Overlay (Outgoing Image Fragment Dispersal) */}
                        {isIncomingTransition && outgoingImage && (
                          <div 
                            className={`super-flow-fragments-stage ${isDispersing ? 'is-active' : ''}`}
                            style={{ '--dir': transitionDirection }}
                            aria-hidden="true"
                          >
                            {SUPER_FLOW_FRAGMENTS.map((frag) => {
                              const activeTransform = `translate3d(${frag.tx * transitionDirection}px, ${frag.ty}px, ${frag.tz}px) rotateX(${frag.rx}deg) rotateY(${frag.ry * transitionDirection}deg) rotateZ(${frag.rz * transitionDirection}deg) scale(${frag.scale})`;
                              const baseTransform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)';

                              return (
                                <div
                                  key={frag.id}
                                  className={`super-flow-fragment ${isDispersing ? 'is-dispersed' : ''}`}
                                  style={{
                                    clipPath: frag.clip,
                                    WebkitClipPath: frag.clip,
                                    transform: isDispersing ? activeTransform : baseTransform,
                                    WebkitTransform: isDispersing ? activeTransform : baseTransform,
                                    opacity: isDispersing ? 0 : 1,
                                    transition: 'transform 0.82s cubic-bezier(0.16, 1, 0.3, 1), -webkit-transform 0.82s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.82s cubic-bezier(0.16, 1, 0.3, 1)',
                                    WebkitTransition: '-webkit-transform 0.82s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.82s cubic-bezier(0.16, 1, 0.3, 1)',
                                    transitionDelay: `${frag.delay}ms`,
                                    WebkitTransitionDelay: `${frag.delay}ms`,
                                    '--tx': `${frag.tx * transitionDirection}px`,
                                    '--ty': `${frag.ty}px`,
                                    '--tz': `${frag.tz}px`,
                                    '--rx': `${frag.rx}deg`,
                                    '--ry': `${frag.ry * transitionDirection}deg`,
                                    '--rz': `${frag.rz * transitionDirection}deg`,
                                    '--scale': frag.scale,
                                    '--delay': `${frag.delay}ms`,
                                  }}
                                >
                                  <img
                                    src={outgoingImage}
                                    alt=""
                                    className="super-flow-fragment-img"
                                  />
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Visual Depth Gradient & Red Accent Details */}
                        <div className="photo-overlay-gradient"></div>
                        <div 
                          className="photo-accent-border" 
                          style={{ borderColor: trainer.accentColor }}
                        ></div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Trainer Profile Information */}
                    <div className="trainer-info-col">
                      <div className="trainer-meta-badge-row">
                        <span 
                          className="trainer-status-badge"
                          style={{ 
                            color: trainer.accentColor, 
                            borderColor: `${trainer.accentColor}55`,
                            backgroundColor: `${trainer.accentColor}18` 
                          }}
                        >
                          Verified Senior Mentor
                        </span>
                        <span className="trainer-mentored-tag">
                          👥 {trainer.mentored}
                        </span>
                      </div>

                      <h3 className="trainer-showcase-name">{trainer.name}</h3>
                      <span className="trainer-showcase-role" style={{ color: trainer.accentColor }}>
                        {trainer.role}
                      </span>

                      {/* Technical Skills and Specialties */}
                      <div className="skills-block">
                        <span className="skills-label">Core Technical Expertise:</span>
                        <div className="skills-container">
                          {skills.map((skill, idx) => (
                            <span 
                              key={idx} 
                              className="skill-tag" 
                              style={{ '--accent': trainer.accentColor }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Biography */}
                      <p className="trainer-showcase-bio">{trainer.bio}</p>

                      {/* Additional Institutional Features */}
                      <div className="trainer-footer-features">
                        <div className="feature-item">
                          <span className="feature-check" style={{ color: trainer.accentColor }}>✓</span>
                          <span>1-on-1 Code Reviews</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-check" style={{ color: trainer.accentColor }}>✓</span>
                          <span>Industry Project Guidance</span>
                        </div>
                        <div className="feature-item">
                          <span className="feature-check" style={{ color: trainer.accentColor }}>✓</span>
                          <span>Career & Interview Mentorship</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* MANUAL NAVIGATION CONTROLS */}
          <div className="trainers-controls-bar">
            {/* Previous Button */}
            <button
              type="button"
              className="trainer-nav-btn trainer-nav-prev"
              onClick={handlePrevClick}
              aria-label="Previous Trainer"
            >
              <FiChevronLeft size={22} />
            </button>

            {/* Pagination Indicators (4 Trainers) */}
            <div className="trainers-pagination-pills" role="tablist" aria-label="Trainers pagination">
              {trainers.map((t, idx) => {
                const isActive = activeTrainerIndex === idx;
                return (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show ${t.name}`}
                    className={`trainer-pagination-bullet ${isActive ? 'active' : ''}`}
                    onClick={() => handleBulletClick(idx)}
                  >
                    <span className="bullet-glow"></span>
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              type="button"
              className="trainer-nav-btn trainer-nav-next"
              onClick={handleNextClick}
              aria-label="Next Trainer"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
