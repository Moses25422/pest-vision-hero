import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin, TrendingUp } from "lucide-react";

interface Alert {
  id: string;
  crop: string;
  threat: string;
  severity: 'low' | 'medium' | 'high';
  location: string;
  timestamp: string;
  confidence: number;
}

const AlertDashboard = () => {
  const alerts: Alert[] = [
    {
      id: '1',
      crop: 'Tomatoes - Field A',
      threat: 'Early Blight Disease',
      severity: 'high',
      location: 'North Field',
      timestamp: '2 hours ago',
      confidence: 92
    },
    {
      id: '2',
      crop: 'Corn - Field B',
      threat: 'Aphid Infestation',
      severity: 'medium',
      location: 'East Field',
      timestamp: '4 hours ago',
      confidence: 78
    },
    {
      id: '3',
      crop: 'Lettuce - Greenhouse 1',
      threat: 'Powdery Mildew',
      severity: 'low',
      location: 'Greenhouse 1',
      timestamp: '1 day ago',
      confidence: 65
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const stats = [
    { label: 'Active Alerts', value: '3', icon: AlertTriangle, color: 'text-destructive' },
    { label: 'Fields Monitored', value: '12', icon: MapPin, color: 'text-primary' },
    { label: 'Avg Response Time', value: '1.2h', icon: Clock, color: 'text-accent' },
    { label: 'Detection Rate', value: '95%', icon: TrendingUp, color: 'text-success' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Alert Dashboard</h2>
          <p className="text-muted-foreground text-lg">
            Monitor your crop health and respond to threats in real-time
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{alert.crop}</h3>
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity.toUpperCase()}
                        </Badge>
                      </div>
                      
                      <p className="text-destructive font-medium mb-2">{alert.threat}</p>
                      
                      <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {alert.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {alert.timestamp}
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {alert.confidence}% confidence
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlertDashboard;