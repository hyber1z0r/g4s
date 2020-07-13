import { UserRestrictedActions } from './UserRestrictedActions'
import { Settings } from './Settings'
import { UserOperationsRestrictions } from './UserOperationsRestrictions'

export interface CurrentPanelServicePackage {
	id: number;
	name: string;
	description: string;
	startDate: Date;
	endDate?: any;
	userRestrictedActions: UserRestrictedActions;
	settings: Settings;
	userOperationsRestrictions: UserOperationsRestrictions;
	type: string;
	distributorId?: any;
	duration?: any;
	packageChargePeriod: string;
	status: string;
	statusChangedBy: string;
	panelStartDate: Date;
	panelEndDate?: any;
	packageStartDate: Date;$$
	packageEndDate?: any;
	packagePanelStartDate: Date;
	packagePanelEndDate?: any;
	nextServicePackage?: any;
	maxNotificationProfileAlert?: any;
	emphasizedNotification?: any;
	gracePeriod?: any;
	inGracePeriod?: any;
}
