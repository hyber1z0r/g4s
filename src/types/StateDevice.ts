import { Attribute } from "./Attribute";

export interface StateDevice {
	key?: number;
	isTampered?: boolean;
	hasLowBattery?: boolean;
	hasSupervisionFault?: boolean;
	isOpen?: boolean;
	isLocked: boolean;
	isLockout?: any;
	isTriggeredAlarm: boolean;
	alarmType: number;
	userName: string;
	serialNumber: string;
	dayPartition: boolean;
	nightPartition: boolean;
	rfLevel?: number;
	batteryLevel?: number;
	temperatureLevel?: number;
	subType?: number;
	attributes: Attribute[];
	hardwareDeviceType?: number;
	roleGroupId: number;
	bypassState: number;
	lockChangedByUser?: any;
	lockChangedByDeviceNumber?: any;
	lockChangedByDeviceType?: any;
	associatedOutputType?: number;
	associatedOutputId?: any;
	owner?: number;
	panelUpdateTime: Date;
	updateTime: Date;
	chime: boolean;
	securityMode?: number;
	isOutdoorMode?: boolean;
	isBeepEnable?: boolean;
	fullExitBeepsEnabled?: boolean;
	doorBellEnabled?: boolean;
	subDeviceType?: any;
	panelDeviceId?: any;
	isNormallyOpen?: any;
	isPulseDevice?: any;
	utDeviceType?: any;
	additionalData?: any;
	addedOrResetTime: Date;
	PkId: number;
	Id: number;
	Type: number;
	Name: string;
	ParentDeviceId?: any;
	PanelId: number;
	petImmune?: boolean;
	accessCode: string;
}