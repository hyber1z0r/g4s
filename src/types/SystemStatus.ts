import { PanelState } from './PanelState'
import { StateDevice } from './StateDevice'
import { CurrentPanelServicePackage } from './CurrentPanelServicePackage'
import { PanelCapability } from './PanelCapability'
import { PanelConfiguration } from './PanelConfiguration'
import { User } from './User'
import { PanelSettings } from './PanelSettings'
import { PanelInfo } from './PanelInfo'
import { ExternalParties } from './ExternalParties'
import { PanelServiceModeInfo } from './PanelServiceModeInfo'
import { SystemState } from './SystemState'
import { SynchronizationStatus } from './SynchronizationStatus'

export interface SystemStatus {
	hasUpdate: boolean;
	lastUpdateTime: Date;
	panelState: PanelState;
	stateDevices: StateDevice[];
	deletedDevices: any[];
	rules: any[];
	deletedRules: any[];
	currentPanelServicePackage: CurrentPanelServicePackage;
	panelCapabilities: PanelCapability[];
	panelConfigurations: PanelConfiguration[];
	users: User[];
	deletedUsers: User[];
	panelSettings: PanelSettings;
	panelInfo: PanelInfo;
	userMessages: any[];
	processProgress?: any;
	externalParties: ExternalParties;
	emergencyContactList?: any;
	panelInstallationInfo?: any;
	panelServiceModeInfo: PanelServiceModeInfo;
	synchronizationStatuses: SynchronizationStatus[];
	systemState: SystemState;
	Response: number;
	ResponseDescription: string;
}


