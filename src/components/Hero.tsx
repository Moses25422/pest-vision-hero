import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Camera, AlertTriangle, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agtech.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-agtech-primary/80 to-agtech-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Predictive Pest & Disease 
              <span className="text-agtech-secondary"> Detection</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Protect your crops with AI-powered computer vision. Upload crop images for instant analysis and early threat detection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-agtech-primary hover:bg-white/90 shadow-lg">
                <Upload className="mr-2 h-5 w-5" />
                Analyze Crops Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Camera className="mr-2 h-5 w-5" />
                Take Photo
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-4">
            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground mr-4">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Early Detection</h3>
                  <p className="text-muted-foreground">Identify threats before visible damage</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-success text-success-foreground mr-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Precision Analysis</h3>
                  <p className="text-muted-foreground">95% accuracy with AI computer vision</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-accent text-accent-foreground mr-4">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mobile Ready</h3>
                  <p className="text-muted-foreground">Analyze crops directly in the field</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;