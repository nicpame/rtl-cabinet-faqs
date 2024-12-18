import { Card } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    title: "شناخت انواع",
    subtitle: "کابینت آشــــپزخانه",
    image: "/lovable-uploads/bf950ca9-2299-4cd4-acad-8110f98ed252.png",
    number: "۱"
  },
  {
    id: 2,
    title: "نمونه کار اجرایی",
    subtitle: "کابینت آشــــپزخانه",
    image: "/lovable-uploads/bf950ca9-2299-4cd4-acad-8110f98ed252.png",
    number: "۲"
  },
  {
    id: 3,
    title: "قیمت انواع",
    subtitle: "کابینت آشــــپزخانه",
    image: "/lovable-uploads/bf950ca9-2299-4cd4-acad-8110f98ed252.png",
    number: "۳"
  },
  {
    id: 4,
    title: "ارتباط با کارشناسان",
    subtitle: "نویــــن کابیــــن",
    image: "/lovable-uploads/bf950ca9-2299-4cd4-acad-8110f98ed252.png",
    number: "۴"
  }
];

export const StepsSection = () => {
  return (
    <section className="bg-[#1D4B4F] py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-4">
          Novin Cabin
        </h2>
        <h3 className="text-center text-2xl text-white mb-12">
          چهار قدم تا انتخاب کابینت آشپزخانه ایده آل
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card 
              key={step.id} 
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
              style={{
                backgroundImage: `url('/lovable-uploads/84a4311c-4b88-4c6a-bfa9-053d2789d452.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="p-6 relative z-10 bg-white bg-opacity-90 h-full transition-all duration-300 hover:bg-opacity-95">
                <div className="relative h-48 mb-6">
                  <div className="absolute bottom-0 right-0 text-[100px] font-bold text-[#E5E5E5] opacity-30 leading-none">
                    {step.number}
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.subtitle}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};