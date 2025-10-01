import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AiInsights } from "@/components/documents/AiInsights";
import { ChangeDetectionView } from "@/components/documents/ChangeDetectionView";
import { ArrowLeft, Check, MessageSquare, X } from "lucide-react";

const DocumentDetail = () => {
  const { documentId } = useParams();

  // In a real app, you'd fetch document data based on the ID
  const documentName = "Data Privacy Policy 2024";

  return (
    <div className="space-y-6">
      <div>
        <Link to="/documents" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Document Library
        </Link>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{documentName}</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" /> Comment</Button>
            <Button variant="destructive"><X className="mr-2 h-4 w-4" /> Reject</Button>
            <Button><Check className="mr-2 h-4 w-4" /> Approve</Button>
          </div>
        </div>
        <p className="text-muted-foreground">Comparing v2.0 against v2.1</p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChangeDetectionView />
        </div>
        <div>
          <AiInsights />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;