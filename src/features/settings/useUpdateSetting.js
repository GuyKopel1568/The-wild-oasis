import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting Successfully Edited!');
      queryClient.invalidateQueries('settings');
    },
    onError: (error) => {
      toast.error('Cabin could not be edited');
      console.error(error);
    },
  });

  return { updateSetting, isUpdating };
}
