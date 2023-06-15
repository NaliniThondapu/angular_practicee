import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  emps: any;
  empForm: any
  showForm: boolean = false;
  actionBtn: boolean = true;


  constructor(private cs: CrudService, private fb: FormBuilder) {
    this.empForm = this.fb.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      role: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.getAllEmployees()

  }



  //GET
  getAllEmployees() {
    this.cs.getAllEmployees().subscribe({
      next: (res) => {
        this.emps = res;
      },
      error: (error) => {
        alert(error.message)
      }
    })
  }

  createEmployee() {
    const empObj = this.empForm.value;
    this.cs.createEmployee(empObj).subscribe({
      next: (res) => {
        this.getAllEmployees()
        this.clearForm()
      },
      error: (error) => {
        alert(error.message)
      }
    })

  }

  clearForm() {
    this.empForm.reset();
  }

  deleteEmployee(id: number) {

    this.cs.deleteEmployee(id).subscribe({
      next: (res) => {
        this.getAllEmployees()
      },
      error: (error) => {
        alert(error.message)
      }
    })

  }

  editEmployee(id: number) {
    this.showForm = true;
    this.actionBtn = false;
    this.cs.getEmployee(id).subscribe({
      next: (res) => {
        this.empForm.patchValue(res)
      },
      error: (error) => {
        alert(error.message)
      }
    })
  }

  showform() {
    this.showForm = true;
    this.actionBtn = true;
  }

  updateEmployee() {
    this.showForm = false;
    this.cs.updateEmployee(this.empForm.value).subscribe({
      next: (res) => {
        this.getAllEmployees();
        this.clearForm()
      },
      error: (error) => {
        alert(error.message)
      }
    })
  }

  cancelForm() {
    this.empForm.reset()
    this.getAllEmployees();
    this.showForm = false;

  }






}
