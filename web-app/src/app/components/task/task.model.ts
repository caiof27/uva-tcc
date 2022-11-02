export interface TaskModel {
  id?: number;
  title: string;
  priority?: string;
  description: string;
  status: number;
  createdBy: number;
  assignTo?: number;
  finishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status_name?:string;
  createdBy_name?:string;
  assignTo_name?:string;
}