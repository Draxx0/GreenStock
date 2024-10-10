import { toast } from 'vue-sonner';

const error = ({
  title = 'Une erreur est survenue',
  description,
}: {
  title?: string;
  description: string;
}) => {
  return toast({
    title,
    description,
    type: 'error',
  });
};

export const renderToast = {
  error,
};
