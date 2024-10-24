import Axios from 'axios';
import { AxiosHttpService } from '@app/common/services/http/axios-http.service';

jest.mock('axios', () => ({
  create: jest.fn(),
}));

const axiosMock = {
  get: jest.fn().mockResolvedValue(null),
  post: jest.fn().mockResolvedValue(null),
  put: jest.fn().mockResolvedValue(null),
  delete: jest.fn().mockResolvedValue(null),
  patch: jest.fn().mockResolvedValue(null),
};

describe('AxiosHttpService', () => {
  let axiosHttpService: AxiosHttpService;

  beforeAll(() => {
    (Axios.create as jest.Mock).mockImplementation(() => axiosMock);
    axiosHttpService = new AxiosHttpService();
  });

  it('should create a HTTP service based on Axios', async () => {
    const url = '/test';
    const data = {};
    const config = {};

    await expect(axiosHttpService.get(url, config)).resolves.not.toThrow();
    expect(axiosMock.get).toBeCalledWith(url, config);
    await expect(axiosHttpService.post(url, data, config)).resolves.not.toThrow();
    expect(axiosMock.post).toBeCalledWith(url, data, config);
    await expect(axiosHttpService.put(url, data, config)).resolves.not.toThrow();
    expect(axiosMock.put).toBeCalledWith(url, data, config);
    await expect(axiosHttpService.delete(url, config)).resolves.not.toThrow();
    expect(axiosMock.delete).toBeCalledWith(url, config);
    await expect(axiosHttpService.patch(url, data, config)).resolves.not.toThrow();
    expect(axiosMock.patch).toBeCalledWith(url, data, config);
  });
});
