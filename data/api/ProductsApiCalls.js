import {URI} from '../api/defaultUri'

export default {
  async fetchProducts() {
    try {
      let response = await fetch(URI + "/api/products");
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
      console.log(`DATA STARTS HERE ${responseJsonData}`)
    }
  }
};