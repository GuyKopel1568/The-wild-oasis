import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked out successfully`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: (error) => {
      toast.error(
        `There was an error while checking out the booking: ${error}`
      );
    },
  });

  return { checkout, isCheckingOut };
}
