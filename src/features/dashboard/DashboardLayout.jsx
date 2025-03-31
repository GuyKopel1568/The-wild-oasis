import styled from 'styled-components';
import { useRecentBookings } from '../dashboard/useRecentBookings';
import { useRecentStays } from '../dashboard/useRecentStays';
import { useCabins } from '../cabins/useCabins';
import TodayActivity from '../check-in-out/TodayActivity';
import Spinner from '../../ui/Spinner';
import Stats from './Stats';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoadingtBooking, bookings } = useRecentBookings();
  const {
    isLoading: isLoadingtSays,
    confirmedStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoadingCabins } = useCabins();

  if (isLoadingtBooking || isLoadingtSays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
