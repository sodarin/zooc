import {ReservationEnum} from './enum/ReservationEnum';

export class Reserve {
  constructor(
    public reservationId: string,
    public userId: string,
    public trialId: string,
    public time: string,
    public message: string,
    public status: ReservationEnum
  ){}
}
