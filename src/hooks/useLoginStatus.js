import { useSelector, shallowEqual } from 'react-redux';

/**
 * 获取登录状态
 */
function useLoginStatus() {
  // 通过redux获取当前用户
  const user = useSelector(state => state.user.user, shallowEqual);
  return user && user.id !== '';
}

export default useLoginStatus;