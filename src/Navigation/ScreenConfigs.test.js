import Constants from '../Constants';

import ScreenConfigs from './ScreenConfigs';

const {
  ROUTES: {LIST, DETAILS, FORM},
} = Constants;

describe('ScreenConfigs', () => {
  it('should render MainNavigation correctly', () => {
    const expectedRouteName = [LIST, DETAILS, FORM];
    ScreenConfigs.map((item, i) => {
      expect(item.name).toEqual(expectedRouteName[i]);
    });
  });
});
