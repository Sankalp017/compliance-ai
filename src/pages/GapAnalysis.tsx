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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ShieldAlert, ShieldCheck, AlertOctagon } from "lucide-react";
import { KpiCard } from "@/components/dashboard/KpiCard";

const gaps = [
  {
    id: "gap-001",
    regulation: "GDPR Art. 30",
    description: "Record of processing activities does not include data transfer mechanisms.",
    severity: "High",
    status: "Open",
    document: "Data Privacy Policy 2024",
  },
  {
    id: "gap-002",
    regulation: "AML Directive 5",
    description: "UBO verification process is not adequately documented.",
    severity: "Medium",
    status: "In Progress",
    document: "AML Framework",
  },
  {
    id: "gap-003",
    regulation: "Basel III Sec. 14.2",
    description: "Liquidity coverage ratio calculation methodology is outdated.",
    severity: "High",
    status: "Open",
    document: "Capital Adequacy Policy",
  },
  {
    id: "gap-004",
    regulation: "ISO 27001 A.12.1",
    description: "Patch management policy does not specify a timeline for critical updates.",
    severity: "Low",
    status: "Resolved",
    document: "Cybersecurity IR Plan",
  },
];

const severityVariantMap: { [key: string]: "destructive" | "secondary" | "outline" } = {
    High: "destructive",
    Medium: "secondary",
    Low: "outline",
};

const statusVariantMap: { [key: string]: "default" | "secondary" | "outline" } = {
    Open: "default",
    "In Progress": "secondary",
    Resolved: "outline",
};

const GapAnalysis = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gap Analysis</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <KpiCard
          title="Open Gaps"
          value="2"
          icon={ShieldAlert}
          trend="1 new gap this week"
        />
        <KpiCard
          title="High Severity Gaps"
          value="2"
          icon={AlertOctagon}
          trend="Requires immediate attention"
        />
        <KpiCard
          title="Gaps Resolved"
          value="1"
          icon={ShieldCheck}
          trend="+1 from last week"
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Compliance Gap Details</CardTitle>
          <CardDescription>
            A list of discrepancies found between regulations and internal documents.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Regulation</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Source Document</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {gaps.map((gap) => (
                <TableRow key={gap.id}>
                  <TableCell className="font-mono text-xs">{gap.regulation}</TableCell>
                  <TableCell className="max-w-sm truncate">{gap.description}</TableCell>
                  <TableCell>
                    <Badge variant={severityVariantMap[gap.severity]}>{gap.severity}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariantMap[gap.status]}>{gap.status}</Badge>
                  </TableCell>
                  <TableCell>{gap.document}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Assign Task</DropdownMenuItem>
                        <DropdownMenuItem>Mark as Resolved</DropdownMenuItem>
                        <DropdownMenuItem>View Source Document</DropdownMenuItem>
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
  );
};

export default GapAnalysis;