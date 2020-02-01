import {URI} from '../api/defaultUri'

export default {
  async fetchProducts() {
    try {
      let response = await fetch(URI + "/api/products?page=2");
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  }
};