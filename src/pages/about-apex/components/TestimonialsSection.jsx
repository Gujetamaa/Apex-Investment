import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Robert Johnson",
      title: "Retired Executive",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: `Working with Apex Capital has been transformative for our retirement planning. Hannah and her team don't just manage our investments – they educate us every step of the way.\n\nTheir transparency and personal attention give us complete confidence in our financial future. We finally have peace of mind knowing our wealth is in expert hands.`,
      relationship: "Client since 2019",
      focus: "Retirement Planning & Wealth Preservation"
    },
    {
      id: 2,
      name: "Lisa Martinez",
      title: "Business Owner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: `As a business owner, I needed investment management that could adapt to my complex financial situation. Michael's expertise in growth strategies has been invaluable.\n\nThe team understands my goals and risk tolerance perfectly. Their proactive communication and strategic insights have helped me build wealth while focusing on growing my business.`,
      relationship: "Client since 2020",
      focus: "Growth Investing & Business Owner Solutions"
    },
    {
      id: 3,
      name: "James Wilson",
      title: "Technology Professional",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: `What sets Apex apart is their commitment to education and transparency. Emily takes time to explain every strategy and decision in terms I can understand.\n\nTheir technology platform gives me real-time access to my portfolio, and I never feel left in the dark. This is exactly the modern, client-focused approach I was looking for.`,
      relationship: "Client since 2021",
      focus: "Technology Integration & Portfolio Transparency"
    },
    {
      id: 4,
      name: "Margaret Chen",
      title: "Healthcare Administrator",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      content: `David's research and market insights have been incredibly valuable during volatile periods. His ability to explain complex economic trends in simple terms helps me make informed decisions.\n\nThe team's ESG investment options align perfectly with my values. I'm building wealth while supporting companies that make a positive impact on society.`,
      relationship: "Client since 2022",
      focus: "ESG Investing & Market Research"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our clients' success and satisfaction are the true measures of our performance. Here's what they say about their experience with Apex Capital.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 brand-shadow-subtle mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <Image
                src={current?.image}
                alt={`${current?.name} - ${current?.title}`}
                className="w-32 h-32 rounded-2xl object-cover mx-auto lg:mx-0 mb-6"
              />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {current?.name}
              </h3>
              <p className="text-primary font-medium mb-2">{current?.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{current?.relationship}</p>
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                <Icon name="Target" size={14} />
                <span>{current?.focus}</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="relative">
                <Icon name="Quote" size={48} className="text-primary/20 absolute -top-4 -left-4" />
                <blockquote className="text-lg text-muted-foreground leading-relaxed pl-8 whitespace-pre-line">
                  {current?.content}
                </blockquote>
              </div>
              
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center brand-transition"
                  >
                    <Icon name="ChevronLeft" size={20} className="text-primary" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center brand-transition"
                  >
                    <Icon name="ChevronRight" size={20} className="text-primary" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full brand-transition ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-primary/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Statistics */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-surface rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="ThumbsUp" size={32} className="text-success" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">98%</p>
            <p className="text-muted-foreground">Client Satisfaction Rate</p>
          </div>
          
          <div className="bg-surface rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">4.2</p>
            <p className="text-muted-foreground">Years Average Relationship</p>
          </div>
          
          <div className="bg-surface rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Heart" size={32} className="text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">85%</p>
            <p className="text-muted-foreground">Client Referral Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;