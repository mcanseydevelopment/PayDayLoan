export default function ApplianceService() {
  const serviceCenters = [
    { id: "1", center: "Bluestar Service Center", url: "/service-center/bluestar-service-center" },
    { id: "2", center: "Bosch Service Center", url: "/service-center/bosch-service-center" },
    { id: "3", center: "BPL Service Center", url: "/service-center/bpl-service-center" },
    { id: "4", center: "Daikin Service Center", url: "/service-center/daikin-service-center" },
    { id: "5", center: "Electrolux Service Center", url: "/service-center/electrolux-service-center" },
    { id: "6", center: "Godrej Service Center", url: "/service-center/godrej-service-center" },
    { id: "7", center: "Haier Service Center", url: "/service-center/haier-service-center" },
    { id: "8", center: "Hitachi Service Center", url: "/service-center/hitachi-service-center" },
    { id: "9", center: "IFB Service Center", url: "/service-center/ifb-service-center" },
    { id: "10", center: "Koryo Service Center", url: "/service-center/koryo-service-center" },
    { id: "11", center: "LG Service Center", url: "/service-center/lg-service-center" },
    { id: "12", center: "Liebherr Service Center", url: "/service-center/liebherr-service-center" },
    { id: "13", center: "Lloyd Service Center", url: "/service-center/lloyd-service-center" },
    { id: "14", center: "Mitashi Service Center", url: "/service-center/mitashi-service-center" },
    { id: "15", center: "Mitsubishi Service Center", url: "/service-center/mitsubishi-service-center" },
    { id: "16", center: "O general Service Center", url: "/service-center/ogeneral-service-center" },
    { id: "17", center: "Onida Service Center", url: "/service-center/onida-service-center" },
    { id: "18", center: "Panasonic Service Center", url: "/service-center/panasonic-service-center" },
    { id: "19", center: "Samsung Service Center", url: "/service-center/samsung-service-center" },
    { id: "20", center: "Sharp Service Center", url: "/service-center/sharp-service-center" },
    { id: "21", center: "Siemens Service Center", url: "/service-center/siemens-service-center" },
    { id: "22", center: "Toshiba Service Center", url: "/service-center/toshiba-service-center" },
    { id: "23", center: "Voltas Service Center", url: "/service-center/voltas-service-center" },
    { id: "24", center: "Whirlpool Service Center", url: "/service-center/whirlpool-service-center" },
    { id: "25", center: "Videocon Service Center", url: "/service-center/videocon-service-center" },
    { id: "26", center: "Toshiba Service Center", url: "/service-center/toshiba-service-center" },
    { id: "27", center: "Philips Service Center", url: "/service-center/philips-service-center" },
    { id: "28", center: "Sony Service Center", url: "/service-center/sony-service-center" },
    { id: "29", center: "Realme Service Center", url: "/service-center/realme-service-center" },
  ]

  return (
    <div className="min-h-screen ] my-8">
      {/* Main Content */}
      <div className="container mx-auto  rounded-xl bg-white shadow-lg">
        {/* Header Banner */}
        <div className="bg-[#1359D1] text-white py-3  px-8 rounded-t-xl">
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Your One-Stop Solution for All Home Appliance Repair Service
          </span>
        </div>
        {/* First Lorem Section */}
        <div className="p-8 space-y-8">
          <p className="text-[#1359D1] text-lg">
            Trustworthy & Reliable Appliance Repair Services.
          </p>

          {/* Service Description */}
          <div className="space-y-4 text-gray-700 text-sm">
            <p>
              At 24X7 Service Centers, we are passionate about providing fast and reliable home appliance repair solutions to customers across India. With over 15 years of experience in the industry, our certified technicians are well-equipped to handle a wide range of appliances like LED/LCD/TV, air conditioners, refrigerators, washing machines, dryers, microwaves, ovens, geysers, inverters, dishwashers, kitchen chimneys and water purifiers.
              We take pride in serving renowned appliance brands in India, including Godrej, LG, Sony, Samsung, Whirlpool, Panasonic, Electrolux, Bosch, Lloyd, Voltas, Haier, IFB, Videocon, Mi and many others.
            </p>
            <p>
              We know how frustrating it can be when an appliance breaks down, which is why we focus on responding quickly and offer emergency repairs within 60 minutes to make sure your appliances are back in action. What sets us apart is our strong focus on customer satisfaction. We offer clear pricing, flexible scheduling and a 90-day warranty on all our repairs, showing our commitment to great service.
            </p>
            <p>
              At 24X7 Service Centers, we are more than just an appliance repair service; we are your reliable partner in keeping your home appliances running smoothly, giving you the convenience and trust you deserve
            </p>
            <p>
              Choose us for an easy and satisfying repair experience
            </p>
          </div>

          {/* Second Lorem Section */}
          <p className="text-[#1359D1] text-lg">
            Find Your Nearest Service Center Across India.
          </p>

          {/* Service Center Grid */}
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceCenters.map((service, index) => (
                <a
                  key={index}
                  href={service.url}
                  className="block p-4 text-center border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-700 hover:text-blue-600">{service.center}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}