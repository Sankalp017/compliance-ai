import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";

const insights = [
  { text: "Added clause on GDPR data portability.", severity: "High" },
  { text: "Removed reference to outdated 'Safe Harbor' framework.", severity: "Medium" },
  { text: "Updated contact information for the Data Protection Officer.", severity: "Low" },
];

export const AiInsights = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
          AI Insights
        </CardTitle>
        <CardDescription>
          Key changes identified between versions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {insights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <Badge
                variant={insight.severity === "High" ? "destructive" : "secondary"}
                className="mr-3 mt-1"
              >
                {insight.severity}
              </Badge>
              <span className="text-sm">{insight.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};