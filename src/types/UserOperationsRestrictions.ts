import { Master } from './Master'
import { Standard } from './Standard'
import { Guard } from './Guard'
import { Installer } from './Installer'

export interface UserOperationsRestrictions {
	Master: Master;
	Standard: Standard;
	Guard: Guard;
	Installer: Installer;
}
