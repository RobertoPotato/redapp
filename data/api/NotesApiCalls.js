import {URI} from '../api/defaultUri'

export default {
  async fetchnotes() {
    try {
      let response = await fetch(URI + "/api/notes");
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
      console.log(`DATA STARTS HERE ${responseJsonData}`)
    }
  }
};