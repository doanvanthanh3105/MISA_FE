import axios from 'axios';

/* 
  base class cho việc gọi các api
  CreatedBy: ĐVThành 19/8/2021
*/
class BaseService {
  constructor() {
    this.BASE_ROUTE = 'v1/Base/';
    this.name = 'base';
  }

  /* 
    lấy theo id
    CreatedBy: ĐVThành 19/8/2021
  */
  async getById(id) {
    return await axios.get(axios.defaults.baseURL + this.BASE_ROUTE + id);
  }

  /* 
    lấy tất cả
    CreatedBy: ĐVThành 19/8/2021
  */
  async getAll() {
    return await axios.get(axios.defaults.baseURL + this.BASE_ROUTE);
  }

  /* 
    thêm mới
    CreatedBy: ĐVThành 19/8/2021
  */
  async Add(data) {
    return await axios.post(axios.defaults.baseURL + this.BASE_ROUTE, data);
  }

  /* 
    cập nhật theo id
    CreatedBy: ĐVThành 19/8/2021
  */
  async Update(data) {
    return await axios.put(
      axios.defaults.baseURL + this.BASE_ROUTE + data[`${this.name}Id`],
      data
    );
  }

  /* 
    xóa theo id
    CreatedBy: ĐVThành 19/8/2021
  */
  async Delete(id) {
    return await axios.delete(axios.defaults.baseURL + this.BASE_ROUTE + id);
  }
}

export default BaseService;
