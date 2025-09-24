import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const PricingSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.pricing-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.pricing-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.pricing-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const pricingPlans = [
    {
      title: 'Essential',
      price: '€1,200',
      subtitle: 'Perfect for intimate ceremonies',
      features: [
        '4-6 hours of coverage',
        '2-3 minute highlight reel',
        'Full ceremony footage',
        'Professional editing',
        'Digital delivery',
        '1 revision included'
      ],
      popular: false
    },
    {
      title: 'Premium',
      price: '€2,500',
      subtitle: 'Our most popular package',
      features: [
        '8-10 hours of coverage',
        '5-7 minute cinematic film',
        'Full ceremony & reception',
        'Drone footage included',
        'Same-day highlights',
        'Professional color grading',
        'Digital + USB delivery',
        '3 revisions included'
      ],
      popular: true
    },
    {
      title: 'Luxury',
      price: '€4,200',
      subtitle: 'Complete wedding documentation',
      features: [
        'Full day coverage (12+ hours)',
        '10-15 minute feature film',
        'Multiple camera angles',
        'Drone & gimbal footage',
        'Same-day highlights',
        'Raw footage access',
        'Custom music licensing',
        'Premium packaging',
        'Unlimited revisions'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" ref={sectionRef} className='min-h-screen section-dark text-white relative depth-3 section-transition'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        <div className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
          <h2 className='pricing-title font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow'>
            Pricing
          </h2>
          <div className='floating-panel-dark max-width-content'>
            <p className='font-[font1] text-responsive leading-relaxed text-layer-2'>
              Choisissez le forfait qui correspond parfaitement à votre vision et à votre budget.
            </p>
          </div>
        </div>

        <div className='pricing-grid responsive-grid-3 max-width-wide'>
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card group floating-panel-dark glass-hover glass-click gpu-accelerated relative transition-all duration-500 ease-out h-full flex flex-col ${
                plan.popular ? 'border-2 border-[#D3FD50] glow-accent scale-105 lg:scale-110' : 'hover:scale-105'
              }`}
              style={{
                paddingTop: plan.popular ? '3rem' : '2rem',
                paddingBottom: '2rem',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem'
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-[font2] uppercase tracking-wide glow-accent shadow-lg shadow-[#D3FD50]/30 animate-pulse'>
                  Most Popular
                </div>
              )}
              
              {/* Plan Header */}
              <div className='text-center mb-8 sm:mb-10 flex-shrink-0'>
                <h3 className='font-[font2] text-xl sm:text-2xl lg:text-3xl uppercase text-layer-2 mb-4 sm:mb-6 tracking-wide'>
                  {plan.title}
                </h3>
                <div className='mb-4 sm:mb-6'>
                  <span className='font-[font2] text-4xl sm:text-5xl lg:text-6xl text-[#D3FD50] glow-accent text-glow-strong leading-none block'>
                    {plan.price}
                  </span>
                </div>
                <p className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 italic leading-relaxed'>
                  {plan.subtitle}
                </p>
              </div>

              {/* Features List */}
              <ul className='space-y-4 sm:space-y-5 mb-8 sm:mb-10 flex-1'>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start space-x-4 sm:space-x-5'>
                    <span className='w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] rounded-full flex-shrink-0 mt-1.5 micro-bounce glow-accent shadow-sm shadow-[#D3FD50]/50'></span>
                    <span className='font-[font1] text-sm sm:text-base lg:text-lg leading-relaxed text-layer-1'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className='text-center flex-shrink-0 mt-auto'>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className={`w-full btn-pill h-12 sm:h-14 lg:h-16 font-[font2] text-base sm:text-lg lg:text-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}
                >
                  Get Started
                </button>
              </div>

              {/* Hover accent line */}
              <div className='w-full accent-line mt-6 sm:mt-8 rounded-full glow-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className='text-center component-margin'>
          <div className='floating-panel-dark max-width-content'>
            <p className='font-[font1] text-responsive text-layer-1 mb-4 sm:mb-6'>
              Tous les forfaits incluent une consultation gratuite et un devis personnalisé.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8'>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <span className='text-lg sm:text-xl micro-bounce glow-accent'>💎</span>
                <span className='font-[font1] text-sm sm:text-base text-layer-1'>Premium Quality</span>
              </div>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <span className='text-lg sm:text-xl micro-bounce glow-accent'>⚡</span>
                <span className='font-[font1] text-sm sm:text-base text-layer-1'>Fast Delivery</span>
              </div>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <span className='text-lg sm:text-xl micro-bounce glow-accent'>🎯</span>
                <span className='font-[font1] text-sm sm:text-base text-layer-1'>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection