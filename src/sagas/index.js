import { all } from 'redux-saga/effects';

import userSaga from '@/store/user/saga';

export default function* rootSaga() {
  yield all([
    userSaga()
  ]);
}