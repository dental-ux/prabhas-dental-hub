
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TeethViewSection = () => {
  const [rotation, setRotation] = useState(0);

  const handleRotate = (direction: "left" | "right") => {
    setRotation((prev) => {
      if (direction === "left") {
        return prev - 45;
      } else {
        return prev + 45;
      }
    });
  };

  return (
    <section id="teeth-view" className="py-16 bg-dental-light-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dental-dark-gray mb-2">360° Teeth View</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rotate to view different tooth surfaces – Healthy vs Cavities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="bg-white p-4 rounded-lg">
                <div className="aspect-video bg-dental-light-gray rounded-lg flex items-center justify-center relative">
                  <div 
                    style={{ 
                      transform: `rotateY(${rotation}deg)`,
                      transition: 'transform 0.5s ease'
                    }}
                    className="w-64 h-64"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1170&auto=format&fit=crop" 
                      alt="Tooth model" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                    <Button 
                      variant="outline"
                      onClick={() => handleRotate("left")}
                      className="bg-white"
                    >
                      ← Rotate Left
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleRotate("right")}
                      className="bg-white"
                    >
                      Rotate Right →
                    </Button>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    This is a simplified 360° view. In our clinic, we use advanced 3D imaging to show patients the exact condition of their teeth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeethViewSection;
