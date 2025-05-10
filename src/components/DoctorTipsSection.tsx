
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const doctorTips = [
  {
    id: 1,
    title: "Why Flossing is as Important as Brushing",
    description: "Dr. Prabha explains how daily flossing prevents gum disease and tooth decay.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Top 5 Foods That Stain Your Teeth",
    description: "Learn which foods to avoid for a whiter smile.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Is Your Toothbrush Too Old?",
    description: "Replace it every 3 months or after an illness.",
    image: "https://images.unsplash.com/photo-1550159930-40066082a4fc?q=80&w=1160&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "How to Help Kids Develop Good Oral Habits",
    description: "Make brushing fun and consistent.",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=1160&auto=format&fit=crop"
  }
];

const DoctorTipsSection = () => {
  return (
    <section id="doctor-tips" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dental-dark-gray mb-2">Doctor Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover professional advice from Dr. Prabha to maintain optimal dental health between visits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctorTips.map((tip) => (
            <Card key={tip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="#" 
            className="text-dental-blue hover:text-blue-700 font-medium inline-flex items-center"
          >
            View all doctor tips
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DoctorTipsSection;
