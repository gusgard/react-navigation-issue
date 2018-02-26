import { NavigationActions } from 'react-navigation';

import { CREATE_WIZARD, CREATE, DASHBOARD } from './constants';

export const goBack = () => ({ type: NavigationActions.BACK });
export const goToCreate = () => ({ type: CREATE });
export const goToCreateWizard = () => ({ type: CREATE_WIZARD });
export const goToDashboard = () => ({ type: DASHBOARD });
