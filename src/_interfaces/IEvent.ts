export interface IEvent {
  id?: string | number;
  avartar: string;
  title: string;
  content: string;
  startTime: Date;
  endTime: Date;
  views?: number;
  status: boolean;
  date_Created?: Date;
}
