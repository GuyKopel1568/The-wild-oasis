import styled from 'styled-components';
import { useRecentBookings } from '../dashboard/useRecentBookings';
import { useRecentStays } from '../dashboard/useRecentStays';
import { useCabins } from '../cabins/useCabins';
import Spinner from '../../ui/Spinner';
import Stats from './Stats';

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
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoadingCabins } = useCabins();

  if (isLoadingtBooking || isLoadingtSays || isLoadingCabins)
    return <Spinner />;

  console.log(bookings);
  console.log(confirmedStays);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Today&apos;s activities </div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
