import { KpiCard } from "@/components/dashboard/KpiCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { FileCheck, AlertTriangle, CheckCircle, Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          title="Documents Reviewed"
          value="85%"
          icon={FileCheck}
          trend="+12% from last month"
        />
        <KpiCard
          title="Compliance Gaps"
          value="12 Open"
          icon={AlertTriangle}
          trend="3 resolved this week"
        />
        <KpiCard
          title="Pending Approvals"
          value="4"
          icon={CheckCircle}
          trend="1 overdue"
        />
        <KpiCard
          title="Model Accuracy"
          value="99.2%"
          icon={Bot}
          trend="vs 98.9% last period"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
};

export default Index;