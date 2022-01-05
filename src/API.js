import axios from 'axios';

const API = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_SOURCE}`
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
