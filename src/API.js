import axios from 'axios';

const API = axios.create({
  baseURL: `http://101.79.8.239`
});

export const TaxiAPI = {
  findOne: async (taxiNumber) => await API.get(`/taxi/${taxiNumber}`),
  findTaxiSample: async (taxiId, options) => await API.get(`/taxi/${taxiId}/sample`, { params: options }),
}

export const SampleAPI = {
  getSampleImage: async (sampleId) => await API.get(`/sample/${sampleId}/image`),
  getSample: async (sampleId) => await API.get(`/sample/${sampleId}`)
}

export const CustomerAPI = {
  createCustomer: async (customerDto, stockDto) => await API.post(`/customer/`, { customerDto, stockDto })
}

export const StockAPI = {
  getStockInfo: async (taxiId, sampleId) => await API.get(`/taxi/${taxiId}/sample/${sampleId}`)
}
