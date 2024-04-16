import DashboardCard from '@/app/components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableCell from '@/app/components/summary-table-cell';
import SummaryTableHeader from '@/app/components/summary-table-header';
import { getSummaryPromotions } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = getSummaryPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {(await data).map(
          ({ promotionId, promotionName, companyTitle, discount }) => (
            <tr key={promotionId}>
              <SummaryTableCell>{companyTitle}</SummaryTableCell>
              <SummaryTableCell>{promotionName}</SummaryTableCell>
              <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
            </tr>
          ),
        )}
      </SummaryTable>
    </DashboardCard>
  );
}
