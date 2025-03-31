import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import { useRecentBookings } from '../features/dashboard/useRecentBookings';
import { useRecentStays } from '../features/dashboard/useRecentStays';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Spinner from '../ui/Spinner';

function Dashboard() {
  const { isLoading: isLoadingtBooking, bookings } = useRecentBookings();
  const { isLoading: isLoadingtSays, stays, confirmedStays } = useRecentStays();

  if (isLoadingtBooking || isLoadingtSays) return <Spinner />;
  console.log(bookings);
  console.log(confirmedStays);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
