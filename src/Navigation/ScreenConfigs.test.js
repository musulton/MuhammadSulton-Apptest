import Constants from '../Constants';

import ScreenConfigs from './ScreenConfigs';

const {
  ROUTES: {CONTACT, DETAILS, FORM},
} = Constants;

describe('ScreenConfigs', () => {
  it('should render MainNavigation correctly', () => {
    const expectedRouteName = [CONTACT, DETAILS, FORM];
    ScreenConfigs.map((item, i) => {
      expect(item.name).toEqual(expectedRouteName[i]);
    });
  });
});
