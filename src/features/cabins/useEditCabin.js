import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin Successfully Edited!');
      queryClient.invalidateQueries('cabins');
    },
    onError: (error) => {
      toast.error('Cabin could not be edited');
      console.error(error);
    },
  });

  return { editCabin, isEditing };
}
