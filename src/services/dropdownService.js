import BaseService from './baseService';

class DepartmentService extends BaseService {
  constructor() {
    super();
    this.BASE_ROUTE = 'v1/Department/';
    this.name = 'department';
  }
}

// class PositionService extends BaseService {
//   constructor() {
//     super();
//     this.BASE_ROUTE = 'v1/Position/';
//     this.name = 'Position';
//   }
// }

export const dropdownService = {
  // positionService: new PositionService(),
  departmentService: new DepartmentService(),
};
