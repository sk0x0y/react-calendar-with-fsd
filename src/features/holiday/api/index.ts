/* eslint-disable import/prefer-default-export */

import axios, { AxiosError, AxiosResponse } from 'axios';

import { HolidayInterface } from '@entities/holiday/interface';

export const fetcher = (url: string) =>
  axios.get(url).then((res: AxiosResponse<HolidayInterface[], AxiosError>) => res.data);
