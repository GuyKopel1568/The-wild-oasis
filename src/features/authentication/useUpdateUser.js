import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success('User Account Successfully Updated!');

      queryClient.setQueryData(['user'], user);

      queryClient.invalidateQueries('user');
    },
    onError: (error) => {
      toast.error('User could not be updated');
      console.error(error);
    },
  });

  return { updateUser, isUpdating };
}
