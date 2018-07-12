import { Injectable } from '@angular/core';
import {Branch} from '../../model/Department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  branches: Branch[] = [
    new Branch('1', '1', '东软第一分部', '这里是一个地址', 0, 0, '18804015102'),
    new Branch('2', '2', '中软第一分部', '这里是一个地址', 0, 0, '18804015102'),
    new Branch('3', '1', '东软第二分部', '这里是一个地址', 0, 0, '18804015102'),
    new Branch('4', '1', '东软第三分部', '这里是一个地址', 0, 0, '18804015102'),
    new Branch('5', '1', '东软第四分部', '这里是一个地址', 0, 0, '18804015102'),
    new Branch('6', '3', '58同城第一分部', '这里是一个地址', 0, 0, '18804015102'),
    new Branch('7', '1', '东软第五分部', '这里是一个地址', 0, 0, '18804015102'),

  ];

  constructor() { }

  getDepartmentById(enterpriseId: string): Branch[] {
    return this.branches.filter(department => department.enterpriseId == enterpriseId);
  }
}
