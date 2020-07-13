import { UserNotificationsSetting } from './UserNotificationsSetting'
import { UserStorage } from './UserStorage';

export interface User {
	id: number;
	name: string;
	roleId: number;
	email: string;
	phoneNumber: string;
	languageCode?: number;
	canViewComfortVideo: boolean;
	userReadTermsAndConditions: boolean;
	eulaLastUpdatedTime: Date;
	userNotificationsSettings: UserNotificationsSetting[];
	userStorages: UserStorage[];
	passwordExpirationDays: number;
	canAccessSmokeCannon: boolean;
	accessCode?: any;
	emailConfirmationStatus: number;
	PackageOfferings: any[];
}
