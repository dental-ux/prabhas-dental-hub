
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "general", name: "General Dentistry" },
  { id: "cosmetic", name: "Cosmetic Dentistry" },
  { id: "pediatric", name: "Pediatric Dentistry" },
  { id: "orthodontics", name: "Orthodontics" }
];

const videos = {
  general: [
    {
      id: 1,
      title: "Basics of Oral Hygiene – Brushing Techniques",
      thumbnail: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1173&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      id: 2,
      title: "Understanding Gum Disease",
      thumbnail: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1173&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    }
  ],
  cosmetic: [
    {
      id: 1,
      title: "Teeth Whitening – What to Expect",
      thumbnail: "https://images.unsplash.com/photo-1581593261424-28069a7a5ade?q=80&w=1173&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      id: 2,
      title: "Veneer Procedure Explained",
      thumbnail: "https://images.unsplash.com/photo-1616587894289-86480e533129?q=80&w=1170&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    }
  ],
  pediatric: [
    {
      id: 1,
      title: "Tips to Keep Your Child's Teeth Healthy",
      thumbnail: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=1170&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      id: 2,
      title: "Making Dental Visits Fun for Kids",
      thumbnail: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=1170&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    }
  ],
  orthodontics: [
    {
      id: 1,
      title: "Braces vs Aligners – Which is Right for You?",
      thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1169&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      id: 2,
      title: "Caring for Your Braces",
      thumbnail: "https://images.unsplash.com/photo-1649972180596-3e08bbdce7ee?q=80&w=1170&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    }
  ]
};

const TrainingSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<null | {
    title: string;
    videoId: string;
  }>(null);

  return (
    <section id="training" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dental-dark-gray mb-2">
            Training Videos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Educational resources organized by dental specialty to help you better understand various dental procedures and care tips.
          </p>
        </div>

        <Tabs defaultValue="general" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(videos).map(([category, categoryVideos]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div 
                      className="relative h-48 overflow-hidden"
                      onClick={() => setSelectedVideo({ title: video.title, videoId: video.videoId })}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0EA5E9" className="w-8 h-8">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg">{video.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full">
              <div className="p-4 flex justify-between items-center border-b">
                <h3 className="font-medium">{selectedVideo.title}</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedVideo(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </Button>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainingSection;
