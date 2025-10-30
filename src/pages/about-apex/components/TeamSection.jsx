import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Hannah Lee",
      title: "Chief Investment Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      experience: "15+ Years",
      specialties: ["Portfolio Strategy", "Risk Management", "ESG Investing"],
      credentials: ["CFA", "MBA Finance", "Series 7 & 66"],
      bio: `Hannah leads our investment strategy with over 15 years of experience in institutional asset management. She previously managed $800M+ portfolios at Goldman Sachs Asset Management.\n\nHer expertise in ESG integration and quantitative analysis has consistently delivered superior risk-adjusted returns for our clients.`,
      philosophy: "I believe in combining rigorous analysis with long-term thinking. Markets are emotional, but successful investing requires discipline and patience.",
      achievements: [
        "Morningstar Fund Manager of the Year 2022",
        "Published 25+ research papers on sustainable investing",
        "Speaker at 50+ industry conferences"
      ]
    },
    {
      id: 2,
      name: "Porto Garcia",
      title: "Senior Portfolio Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      experience: "12+ Years",
      specialties: ["Growth Investing", "Technology Sector", "Alternative Assets"],
      credentials: ["CFA", "CAIA", "MS Economics"],
      bio: `Porto specializes in growth-oriented strategies and technology sector analysis. His deep understanding of innovation cycles has helped clients capitalize on emerging market trends.\n\nPrior to Apex, he was a senior analyst at Fidelity Investments, covering technology and healthcare sectors.`,
      philosophy: "Innovation drives long-term wealth creation. I focus on identifying companies that will shape the future while managing downside risk.",
      achievements: [
        "Top 10% performance in growth strategies (5-year track record)",
        "Featured in Wall Street Journal and Bloomberg",
        "Technology sector specialist with 95% accuracy rate"
      ]
    },
    {
      id: 3,
      name: "Hailey Quinn",
      title: "Director of Client Relations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      experience: "10+ Years",
      specialties: ["Wealth Planning", "Client Education", "Retirement Strategies"],
      credentials: ["CFP", "ChFC", "MBA"],
      bio: `Hailey ensures every client receives personalized attention and comprehensive financial planning. She translates complex investment strategies into clear, actionable insights.\n\nHer background in financial planning and client service has helped hundreds of families achieve their financial goals.`,
      philosophy: "Every client is unique. Success comes from understanding individual goals and creating tailored strategies that evolve with life changes.",
      achievements: [
        "Client satisfaction rating of 98%",
        "Certified Financial Planner Board of Standards recognition",
        "Author of \'Personal Wealth Management\' guide"
      ]
    },
    {
      id: 4,
      name: "Joshua Chen",
      title: "Head of Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      experience: "18+ Years",
      specialties: ["Economic Analysis", "Fixed Income", "Global Markets"],
      credentials: ["PhD Economics", "CFA", "FRM"],
      bio: `Josh leads our research team with extensive experience in macroeconomic analysis and fixed income strategies. His insights drive our asset allocation decisions.\n\nHe previously served as Chief Economist at a major regional bank and has published extensively on market dynamics.`,
      philosophy: "Markets are driven by fundamentals over the long term. Deep research and economic understanding are essential for consistent performance.",
      achievements: [
        "Predicted 2020 market recovery with 95% accuracy",
        "Published economist with 100+ research papers",
        "Regular contributor to Financial Times and Reuters"
      ]
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our seasoned professionals bring decades of combined experience in investment management, financial planning, and market research to serve your interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="bg-white rounded-2xl p-6 brand-shadow-subtle hover:brand-shadow-elevated brand-transition group">
              <div className="text-center">
                <div className="relative mb-6">
                  <Image
                    src={member?.image}
                    alt={`${member?.name} - ${member?.title}`}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {member?.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member?.title}</p>
                <p className="text-sm text-muted-foreground mb-4">{member?.experience}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs font-medium text-foreground mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member?.specialties?.slice(0, 2)?.map((specialty, index) => (
                        <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                      {member?.specialties?.length > 2 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                          +{member?.specialties?.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openModal(member)}
                  iconName="User"
                  iconPosition="left"
                  fullWidth
                >
                  View Profile
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Team Member Profile
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeModal}
                    iconName="X"
                  />
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="text-center lg:text-left">
                    <Image
                      src={selectedMember?.image}
                      alt={`${selectedMember?.name} - ${selectedMember?.title}`}
                      className="w-32 h-32 rounded-2xl object-cover mx-auto lg:mx-0 mb-6"
                    />
                    <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                      {selectedMember?.name}
                    </h4>
                    <p className="text-primary font-medium mb-4">{selectedMember?.title}</p>
                    <p className="text-muted-foreground mb-6">{selectedMember?.experience}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium text-foreground mb-2">Credentials</p>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          {selectedMember?.credentials?.map((credential, index) => (
                            <span key={index} className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                              {credential}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-medium text-foreground mb-2">Specialties</p>
                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                          {selectedMember?.specialties?.map((specialty, index) => (
                            <span key={index} className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Biography</h5>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {selectedMember?.bio}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Investment Philosophy</h5>
                      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                        "{selectedMember?.philosophy}"
                      </blockquote>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {selectedMember?.achievements?.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Icon name="Award" size={16} className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;