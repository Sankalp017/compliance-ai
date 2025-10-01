import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, Link, AlertTriangle } from "lucide-react";

export const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Your most frequent tasks, one click away.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button>
          <Upload className="mr-2 h-4 w-4" /> Upload New Document
        </Button>
        <Button variant="secondary">
          <Link className="mr-2 h-4 w-4" /> Connect Regulatory Feed
        </Button>
        <Button variant="outline">
          <AlertTriangle className="mr-2 h-4 w-4" /> Review Pending Gaps
        </Button>
      </CardContent>
    </Card>
  );
};