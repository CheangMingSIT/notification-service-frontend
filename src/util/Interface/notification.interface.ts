export type NotificationDataType = {
  data: {
    id: string;
    userId: string;
    secretKey: string;
    channel: string;
    status: string;
    subject: string;
    message: string;
    scheduleDate: Date;
  }[];
};
