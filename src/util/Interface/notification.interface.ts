export type NotificationDataType = {
  data: {
    totalCount: number;
    payload: {
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
};

export type OverviewDataTypes = {
  data: {
    record: number;
    InQueue: number;
    Fail: number;
    month: string[];
    countMonthData: number[];
    undeliveredMonth: string[];
    undeliveredCount: number[];
  };
};
