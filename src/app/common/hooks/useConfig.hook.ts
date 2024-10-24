import { Config } from '@app/common/services/config/config.interface';

export const useConfig = (): Config => {
  return <Config>{
    environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
    apiPath: process.env.NEXT_PUBLIC_API_PATH,
    imagesPath: process.env.NEXT_PUBLIC_IMAGES_PATH,
  };
};
