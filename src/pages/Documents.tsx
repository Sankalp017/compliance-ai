import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle, Search } from "lucide-react";
import { UploadDocumentDialog } from "@/components/documents/UploadDocumentDialog";

const documents = [
  {
    id: "doc-001",
    name: "Data Privacy Policy 2024",
    version: "v2.1",
    status: "Approved",
    lastUpdated: "2024-07-15",
    updatedBy: "C. Officer",
  },
  {
    id: "doc-002",
    name: "Anti-Money Laundering (AML) Framework",
    version: "v1.8",
    status: "In Review",
    lastUpdated: "2024-07-10",
    updatedBy: "O. R. Manager",
  },
  {
    id: "doc-003",
    name: "Basel III Capital Adequacy",
    version: "v3.0",
    status: "Approved",
    lastUpdated: "2024-06-28",
    updatedBy: "System",
  },
  {
    id: "doc-004",
    name: "Cybersecurity Incident Response Plan",
    version: "v1.5",
    status: "Draft",
    lastUpdated: "2024-07-18",
    updatedBy: "IT Security",
  },
];

const statusVariantMap: { [key: string]: "default" | "secondary" | "outline" | "destructive" } = {
    Approved: "default",
    "In Review": "secondary",
    Draft: "outline",
};

const Documents = () => {
  const [isUploadOpen, setUploadOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <UploadDocumentDialog isOpen={isUploadOpen} onClose={() => setUploadOpen(false)} />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Document Library</h1>
          <Button onClick={() => setUploadOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" /> Upload Document
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>All Documents</CardTitle>
            <CardDescription>
              Search, filter, and manage all your compliance documents.
            </CardDescription>
            <div className="relative pt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search by name or content..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Name</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Updated By</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id} onClick={() => navigate(`/documents/${doc.id}`)} className="cursor-pointer">
                    <TableCell className="font-medium">{doc.name}</TableCell>
                    <TableCell>{doc.version}</TableCell>
                    <TableCell>
                      <Badge variant={statusVariantMap[doc.status] || "secondary"}>
                        {doc.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{doc.lastUpdated}</TableCell>
                    <TableCell>{doc.updatedBy}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost" onClick={(e) => e.stopPropagation()}>
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Compare Versions</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Documents;