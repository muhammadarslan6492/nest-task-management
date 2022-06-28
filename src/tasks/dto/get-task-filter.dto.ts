import { TaskStatus } from '../task.model';

export class GetTaskFilterDto {
  status?: string;
  search?: string;
}
