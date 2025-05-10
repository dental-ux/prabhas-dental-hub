
import { Card, CardContent } from "@/components/ui/card";

const hygieneSteps = [
  {
    id: 1,
    title: "Brushing Technique",
    description: "Use a soft-bristled brush at a 45-degree angle to your gums. Gently brush using short back-and-forth strokes. Brush all surfaces: outer, inner, and chewing.",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1173&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Flossing Daily",
    description: "Curve the floss around each tooth in a 'C' shape, and gently slide it under the gumline. Use a clean section of floss for each tooth to avoid spreading bacteria.",
    image: "https://images.unsplash.com/photo-1588528402605-1f9d0eb3a3cd?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Mouthwash Use",
    description: "Use an antimicrobial mouthwash to reduce plaque, prevent gingivitis, and freshen breath. Swish for 30-60 seconds after brushing and flossing.",
    image: "https://images.unsplash.com/photo-1621720553586-06235a2ae04f?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Tongue Cleaning",
    description: "Clean your tongue daily with a tongue scraper or your toothbrush to remove bacteria that cause bad breath and affect taste sensation.",
    image: "https://images.unsplash.com/photo-1622467827417-bbe6542801eb?q=80&w=1287&auto=format&fit=crop"
  }
];

const OralHygieneSection = () => {
  return (
    <section className="py-16 bg-dental-light-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dental-dark-gray mb-2">
            Proper Oral Hygiene Guide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these essential steps for maintaining excellent oral hygiene and preventing dental problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {hygieneSteps.map((step) => (
            <Card key={step.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "The best time to brush your teeth is before going to bed and at least one other time during the day."
            <br />— Dr. Prabha
          </p>
        </div>
      </div>
    </section>
  );
};

export default OralHygieneSection;
