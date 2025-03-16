import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New Cabin Successfully Created!');
      queryClient.invalidateQueries('cabins');
    },
    onError: (error) => {
      toast.error('Cabin could not be created');
      console.error(error);
    },
  });

  return { createCabin, isCreating };
}
