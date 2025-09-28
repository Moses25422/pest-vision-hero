import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, Loader2, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  threat: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  recommendations: string[];
}

const ImageAnalyzer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResults(null);
    }
  };

  const mockAnalysis = (): AnalysisResult => {
    const threats = [
      { threat: "Aphid Infestation", severity: 'high' as const, confidence: 92 },
      { threat: "Early Blight Disease", severity: 'medium' as const, confidence: 78 },
      { threat: "Healthy Crop", severity: 'low' as const, confidence: 95 },
      { threat: "Powdery Mildew", severity: 'medium' as const, confidence: 84 },
    ];
    
    const selected = threats[Math.floor(Math.random() * threats.length)];
    
    return {
      ...selected,
      recommendations: selected.threat === "Healthy Crop" 
        ? ["Continue current care routine", "Monitor for seasonal changes", "Maintain soil moisture"]
        : ["Apply organic pesticide", "Increase air circulation", "Monitor daily for progression", "Consider biological controls"]
    };
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const result = mockAnalysis();
    setResults(result);
    setIsAnalyzing(false);

    toast({
      title: "Analysis Complete",
      description: `Detected: ${result.threat} (${result.confidence}% confidence)`,
    });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="h-5 w-5 text-destructive" />;
      case 'medium': return <AlertTriangle className="h-5 w-5 text-warning" />;
      case 'low': return <CheckCircle className="h-5 w-5 text-success" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Crop Analysis Tool</h2>
          <p className="text-muted-foreground text-lg">
            Upload an image of your crops for instant AI-powered analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                Upload Crop Image
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                {previewUrl ? (
                  <div className="space-y-4">
                    <img 
                      src={previewUrl} 
                      alt="Crop preview" 
                      className="max-h-48 mx-auto rounded-lg object-cover"
                    />
                    <p className="text-sm text-muted-foreground">
                      {selectedFile?.name}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Camera className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Select an image to analyze
                    </p>
                  </div>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />

              <Button 
                onClick={analyzeImage}
                disabled={!selectedFile || isAnalyzing}
                className="w-full"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Analyze Crop
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              {!results ? (
                <div className="text-center py-12 text-muted-foreground">
                  <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Upload and analyze an image to see results</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Threat Detection */}
                  <div className="p-4 rounded-lg border bg-card">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Detection</h3>
                      {getSeverityIcon(results.severity)}
                    </div>
                    <p className={`text-lg font-medium ${getSeverityColor(results.severity)}`}>
                      {results.threat}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Confidence: {results.confidence}%
                    </p>
                  </div>

                  {/* Severity Level */}
                  <div className="p-4 rounded-lg border bg-card">
                    <h3 className="font-semibold mb-2">Severity Level</h3>
                    <div className="flex items-center">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        results.severity === 'high' ? 'bg-destructive/10 text-destructive' :
                        results.severity === 'medium' ? 'bg-warning/10 text-warning' :
                        'bg-success/10 text-success'
                      }`}>
                        {results.severity.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="p-4 rounded-lg border bg-card">
                    <h3 className="font-semibold mb-3">Recommendations</h3>
                    <ul className="space-y-2">
                      {results.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImageAnalyzer;