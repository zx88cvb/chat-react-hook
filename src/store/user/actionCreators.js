import * as constants from './constants';

// 获取用户
export const getUserAction = () => ({
  type: constants.GET_USER
});

// 获取用户成功
export const getUserSuccessSaga = (data) => ({
  type: constants.GET_USER_SUCCESS,
  data
});

// 根据用户名/邮箱登录
export const loginByUsernameAction = (data) => ({
  type: constants.LOGIN_USERNAME,
  data
});

// 根据用户名/邮箱登录 成功 saga
export const loginByUsernameSaga = (data) => ({
  type: constants.LOGIN_USERNAME_SUCCESS,
  data
});