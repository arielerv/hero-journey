import { takeLatest, put } from 'redux-saga/effects';
import actionsCreator, { userTypes } from 'store/user/actions';
import { setTheme, getTheme } from 'services/storage';
import { CONST_THEMES } from 'constant/themes';

export function* setThemeRequest({ theme }) {
  try {
    setTheme(theme);
    yield put(actionsCreator.userSetThemeSuccess(theme));
  } catch (error) {
    yield put(actionsCreator.userSetThemeError('Server error'));
  }
}

export function* getThemeRequest() {
  const storedTheme = getTheme();
  if (!storedTheme) {
    setTheme(CONST_THEMES.DARK);
  }
  yield put(actionsCreator.userGetThemeSuccess(storedTheme));
}

export function* userSaga() {
  yield takeLatest(userTypes.USER_SET_THEME_REQUEST, setThemeRequest);
  yield takeLatest(userTypes.USER_GET_THEME_REQUEST, getThemeRequest);
}
