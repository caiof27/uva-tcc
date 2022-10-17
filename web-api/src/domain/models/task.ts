export interface TaskModel {
    id: number;
    title: string;
    priority: string;
    description: string;
    status: string;
    createdBy: number;
    assignTo: number;
    finishedAt: Date;
  }