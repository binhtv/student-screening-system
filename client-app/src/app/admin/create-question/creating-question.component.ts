import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './creating-question.component.html',
  styleUrls: []
})
export class CreatingExamComponent implements OnInit {
  questionForm: FormGroup;
  constructor(private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
    this.questionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      question: ['', [Validators.required, Validators.minLength(20)]],
      number: ['4']
    });
  }

  CreateQuestion() {
    const newQuestion = this.questionForm.value;
    newQuestion.status = true;
    this.adminService.createQuestion(newQuestion).subscribe(resp => {
      console.log(resp);
    });
  }

  get title() {
    return this.questionForm.get('title');
  }

  get question() {
    return this.questionForm.get('question');
  }
}
