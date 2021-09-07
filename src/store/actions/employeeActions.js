import { EDIT_EMPLOYEE, ADD_EMPLOYEE } from '../constants';

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee,
});

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});
