import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Search } from "lucide-react";
import { DateRange } from "react-day-picker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const auditLogs = [
  {
    id: "log-001",
    user: "C. Officer",
    action: "Approve",
    entityType: "Document",
    entityName: "Data Privacy Policy 2024",
    timestamp: "2024-07-15 10:30 AM",
  },
  {
    id: "log-002",
    user: "System",
    action: "Flag Gap",
    entityType: "Gap",
    entityName: "GDPR Art. 30",
    timestamp: "2024-07-15 09:00 AM",
  },
  {
    id: "log-003",
    user: "O. R. Manager",
    action: "Comment",
    entityType: "Document",
    entityName: "AML Framework",
    timestamp: "2024-07-14 02:45 PM",
  },
  {
    id: "log-004",
    user: "IT Security",
    action: "Upload",
    entityType: "Document",
    entityName: "Cybersecurity IR Plan",
    timestamp: "2024-07-14 11:10 AM",
  },
  {
    id: "log-005",
    user: "System",
    action: "Ingest",
    entityType: "Regulatory Feed",
    entityName: "EU Taxonomy Update",
    timestamp: "2024-07-13 08:00 AM",
  },
];

const actionVariantMap: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    Approve: "default",
    Upload: "secondary",
    "Flag Gap": "destructive",
    Comment: "outline",
    Ingest: "secondary",
};

const AuditTrail = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 6, 1),
    to: new Date(),
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Audit Trail</h1>
      <Card>
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
          <CardDescription>
            A complete history of all actions taken within the system.
          </CardDescription>
          <div className="flex items-center space-x-4 pt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search by user, action, or entity..." className="pl-10" />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[300px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "LLL dd, y")} -{" "}
                        {format(date.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(date.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>
                    <Badge variant={actionVariantMap[log.action] || "secondary"}>{log.action}</Badge>
                  </TableCell>
                  <TableCell>{log.entityType}</TableCell>
                  <TableCell className="font-medium">{log.entityName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuditTrail;