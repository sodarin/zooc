import { Injectable } from '@angular/core';
import {Department} from '../../model/Department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  branches: Department[] = [
    new Department('1', '1', '东软第一分部', '这里是一个地址', 0, 0, '18804015102'),
    new Department('2', '2', '中软第一分部', '这里是一个地址', 0, 0, '18804015102'),
    new Department('3', '1', '东软第二分部', '这里是一个地址', 0, 0, '18804015102'),
    new Department('4', '1', '东软第三分部', '这里是一个地址', 0, 0, '18804015102'),
    new Department('5', '1', '东软第四分部', '这里是一个地址', 0, 0, '18804015102'),
    new Department('6', '3', '58同城第一分部', '这里是一个地址', 0, 0, '18804015102'),
    new Department('7', '1', '东软第五分部', '这里是一个地址', 0, 0, '18804015102'),

  ];

  constructor() { }

  getDepartmentById(enterpriseId: string): Department[] {
    return this.branches.filter(department => department.enterpriseId == enterpriseId);
  }
}
