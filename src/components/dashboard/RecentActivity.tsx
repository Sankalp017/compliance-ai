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

const activities = [
  {
    user: "C. Officer",
    action: "Approved",
    document: "Policy 2023-V4",
    time: "2m ago",
    status: "Approved",
  },
  {
    user: "System",
    action: "Flagged Gap",
    document: "Basel III Update",
    time: "15m ago",
    status: "Open",
  },
  {
    user: "O. R. Manager",
    action: "Commented",
    document: "Policy 2023-V4",
    time: "1h ago",
    status: "In Review",
  },
  {
    user: "System",
    action: "Ingested",
    document: "EU Taxonomy Feed",
    time: "3h ago",
    status: "Completed",
  },
];

export const RecentActivity = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          A log of the latest changes, approvals, and comments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{activity.document}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>{activity.user}</TableCell>
                <TableCell>{activity.time}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      activity.status === "Approved" ? "default" : "secondary"
                    }
                  >
                    {activity.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};