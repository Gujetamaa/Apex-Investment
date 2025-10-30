import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Apex Capital Founded",
      description: "Established with a vision to democratize sophisticated investment management for individual investors.",
      icon: "Rocket",
      stats: "$50M Initial AUM"
    },
    {
      year: "2019",
      title: "First Major Milestone",
      description: "Reached 100 clients and launched our proprietary risk management platform.",
      icon: "Users",
      stats: "100+ Clients"
    },
    {
      year: "2020",
      title: "Market Leadership",
      description: "Successfully navigated market volatility, outperforming benchmarks by 3.2% during the pandemic.",
      icon: "TrendingUp",
      stats: "+15.8% Returns"
    },
    {
      year: "2021",
      title: "Technology Innovation",
      description: "Launched client portal with real-time portfolio tracking and advanced analytics.",
      icon: "Smartphone",
      stats: "$500M AUM"
    },
    {
      year: "2022",
      title: "ESG Leadership",
      description: "Became a certified B-Corp and launched sustainable investment strategies.",
      icon: "Leaf",
      stats: "B-Corp Certified"
    },
    {
      year: "2023",
      title: "Expansion & Growth",
      description: "Opened second office and expanded team to serve growing client base nationwide.",
      icon: "Building",
      stats: "$2.8B AUM"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our Journey of Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From a small startup to a trusted investment partner managing billions, our journey reflects our commitment to client success and continuous innovation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <Icon name={milestone?.icon} size={16} className="text-white" />
                </div>

                {/* Content */}
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <div className="bg-white rounded-2xl p-6 lg:p-8 brand-shadow-subtle hover:brand-shadow-elevated brand-transition">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-accent">{milestone?.year}</span>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {milestone?.stats}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {milestone?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Apex Capital Today
            </h3>
            <p className="text-white/90 text-lg">
              Continuing our mission to provide exceptional investment management and client service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} />
              </div>
              <p className="text-3xl font-bold mb-2">$2.8B+</p>
              <p className="text-white/80">Assets Under Management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} />
              </div>
              <p className="text-3xl font-bold mb-2">500+</p>
              <p className="text-white/80">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} />
              </div>
              <p className="text-3xl font-bold mb-2">15+</p>
              <p className="text-white/80">Industry Awards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} />
              </div>
              <p className="text-3xl font-bold mb-2">12.8%</p>
              <p className="text-white/80">Average Annual Return</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;