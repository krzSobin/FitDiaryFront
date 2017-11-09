import { UserData } from '../index';
import { IBodyMeasurement } from './body-measurement';

export interface IFullInfo {
    UserBaseInfo: UserData;
    LastBodyMeasurement: IBodyMeasurement;
}