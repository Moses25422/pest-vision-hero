import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImageAnalyzer from "@/components/ImageAnalyzer";
import AlertDashboard from "@/components/AlertDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="analyzer">
        <ImageAnalyzer />
      </section>
      
      <section id="dashboard">
        <AlertDashboard />
      </section>
    </div>
  );
};

export default Index;
