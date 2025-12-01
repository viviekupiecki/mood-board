import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const WeddingPlanner = () => {
  return (
    <div className="w-full min-w-0 p-6">
      <Table>
        <TableHeader className="sticky relative">
          <TableRow></TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};

export default WeddingPlanner;
