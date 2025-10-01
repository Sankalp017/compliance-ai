import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const oldVersion = `
<p>1.1 The company is committed to ensuring the security and protection of the personal information that we process.</p>
<p>1.2 Data must be protected from unauthorized access. <span style="background-color: #f8d7da; text-decoration: line-through;">The primary data center is located in Dublin, Ireland.</span></p>
<p>1.3 The Data Protection Officer (DPO) is John Smith.</p>
`;

const newVersion = `
<p>1.1 The company is committed to ensuring the security and protection of the personal information that we process, in accordance with GDPR.</p>
<p>1.2 Data must be protected from unauthorized access. <span style="background-color: #d4edda;">Our data centers are located in Frankfurt, Germany and Dublin, Ireland.</span></p>
<p>1.3 The Data Protection Officer (DPO) is <span style="background-color: #fff3cd;">Jane Doe</span>. <span style="background-color: #d4edda;">The DPO can be reached at dpo@example.com.</span></p>
`;

export const ChangeDetectionView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Version 2.0 (Old)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: oldVersion }} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Version 2.1 (New)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: newVersion }} />
        </CardContent>
      </Card>
    </div>
  );
};