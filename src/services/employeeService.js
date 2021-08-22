import axios from 'axios';
import BaseService from './baseService';

class EmployeeService extends BaseService {
  constructor() {
    super();
    this.BASE_ROUTE = 'v1/Employee/';
    this.name = 'employee';
  }

  /* 
    check trùng mã nhân viên
    CreatedBy: ĐVThành 19/8/2021
  */
  async checkDuplicateCode(employeeCode) {
    const res = await axios.get(
      axios.defaults.baseURL +
        this.BASE_ROUTE +
        `DuplicateCode/?employeeCode=${employeeCode}`
    );
    return res;
  }

  /* 
    lấy mã nhân viên mới
    CreatedBy: ĐVThành 19/8/2021
  */
  async getNewEmployeeCode() {
    const res = axios.get(axios.defaults.baseURL + this.BASE_ROUTE + 'NewCode');

    return res;
  }

  /* 
    api filter và phân trang
    CreatedBy: ĐVThành 19/8/2021
  */
  async getPagingAndFilter(paginate) {
    const res = axios.get(
      axios.defaults.baseURL +
        this.BASE_ROUTE +
        `EmployeeFilter?pageSize=${paginate.pageSize}&pageIndex=${paginate.pageNumber}&employeeFilter=${paginate.employeeFilter}`
    );

    return res;
  }
}

export default new EmployeeService();
