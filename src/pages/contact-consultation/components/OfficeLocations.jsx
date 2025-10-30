import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const OfficeLocations = () => {
  const [selectedOffice, setSelectedOffice] = useState('manhattan');

  const offices = [
  {
    id: "nyc",
    name: "Apex Capital — New York Headquarters",
    shortLabel: "New York",
    address1: "350 Madison Avenue",
    address2: "Floor 22",
    city: "New York",
    state: "NY",
    zip: "10017",
    phone: "+1 (555) 010-2000",
    email: "nyc@apexcapital.com",
    hours: "Mon–Fri: 8:00 AM – 6:30 PM ET",
    lat: "40.7559",
    lng: "-73.9773",
    features: [
      "Private Wealth Lounge",
      "Institutional Strategy War Room",
      "On-prem Secure Deal Rooms (SOC2)",
      "Video Conferencing Suite",
      "Same-day Notary Services",
      "EV-Ready Valet & Parking Validation",
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop&auto=format",
  },
  {
    id: "sf",
    name: "Apex Capital — San Francisco Office",
    shortLabel: "San Francisco",
    address1: "101 California Street",
    address2: "Suite 2400",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    phone: "+1 (555) 010-3000",
    email: "sf@apexcapital.com",
    hours: "Mon–Fri: 8:00 AM – 6:00 PM PT",
    lat: "37.7920",
    lng: "-122.3990",
    features: [
      "Research & Market Intelligence Lab",
      "Client Huddle Pods",
      "Recording-free Compliance Rooms",
      "Guest Wi-Fi with WPA3",
      "Bike Storage & Showers",
      "BART/Muni & Ferry Access",
    ],
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&h=800&fit=crop&auto=format",
  },
  {
    id: "chi",
    name: "Apex Capital — Chicago Office",
    shortLabel: "Chicago",
    address1: "225 W Wacker Drive",
    address2: "Suite 1800",
    city: "Chicago",
    state: "IL",
    zip: "60606",
    phone: "+1 (555) 010-4000",
    email: "chicago@apexcapital.com",
    hours: "Mon–Fri: 8:30 AM – 5:30 PM CT",
    lat: "41.8876",
    lng: "-87.6368",
    features: [
      "Trading & Execution Briefing Room",
      "Sound-treated Client Rooms",
      "CFA Library Nook",
      "Coffee & Refreshment Bar",
      "Accessible Entrance & Elevators",
      "Underground Pedway Access",
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&auto=format",
  },
];

  const selectedOfficeData = offices?.find(office => office?.id === selectedOffice);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
          Visit Our Offices
        </h3>
        <p className="text-muted-foreground">
          Schedule an in-person consultation at one of our locations near you!
        </p>
      </div>
      {/* Office Selection */}
      <div className="flex flex-wrap gap-2">
        {offices?.map((office) => (
          <Button
            key={office?.id}
            variant={selectedOffice === office?.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedOffice(office?.id)}
          >
            {office?.name?.split(' ')?.[0]}
          </Button>
        ))}
      </div>
      {/* Selected Office Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Office Information */}
        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 brand-shadow-subtle">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-lg">
                  {selectedOfficeData?.name}
                </h4>
                <div className="text-sm text-muted-foreground space-y-1 mt-2">
                  <p>{selectedOfficeData?.address}</p>
                  <p>{selectedOfficeData?.city}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {selectedOfficeData?.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {selectedOfficeData?.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {selectedOfficeData?.hours}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h5 className="font-medium text-foreground mb-3">Office Features</h5>
              <div className="grid grid-cols-2 gap-2">
                {selectedOfficeData?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <Button
                variant="default"
                size="sm"
                iconName="Navigation"
                iconPosition="left"
                onClick={() => window.open(`https://maps.google.com?q=${selectedOfficeData?.lat},${selectedOfficeData?.lng}`, '_blank')}
              >
                Get Directions
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open(`tel:${selectedOfficeData?.phone}`, '_self')}
              >
                Call Office
              </Button>
            </div>
          </div>

          {/* Office Image */}
          <div className="bg-card rounded-xl overflow-hidden brand-shadow-subtle">
            <div className="aspect-video relative">
              <img
                src={selectedOfficeData?.image}
                alt={`${selectedOfficeData?.name} office interior`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Professional Meeting Environment</p>
                <p className="text-xs opacity-90">Secure & Confidential Consultations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="bg-card rounded-xl overflow-hidden brand-shadow-subtle">
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <Icon name="Map" size={20} className="text-primary" />
              <h4 className="font-medium text-foreground">Location Map</h4>
            </div>
          </div>
          <div className="aspect-square lg:aspect-auto lg:h-96">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title={selectedOfficeData?.name}
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${selectedOfficeData?.lat},${selectedOfficeData?.lng}&z=15&output=embed`}
              className="border-0"
            />
          </div>
        </div>
      </div>
      {/* Transportation & Parking */}
      <div className="bg-surface rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Car" size={20} className="text-primary" />
          <span>Transportation & Parking</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 className="font-medium text-foreground mb-2">Public Transit</h5>
            <ul className="text-muted-foreground space-y-1">
              <li>• Grand Central - 5 min walk</li>
              <li>• Multiple subway lines</li>
              <li>• Metro-North accessible</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-foreground mb-2">Parking</h5>
            <ul className="text-muted-foreground space-y-1">
              <li>• Valet service available</li>
              <li>• Nearby parking garages</li>
              <li>• Validation provided</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-foreground mb-2">Accessibility</h5>
            <ul className="text-muted-foreground space-y-1">
              <li>• ADA compliant entrance</li>
              <li>• Elevator access</li>
              <li>• Accessible restrooms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;