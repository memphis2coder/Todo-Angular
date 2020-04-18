import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DocumentReference } from '@angular/fire/firestore/interfaces';
import {TodoService} from '../services/todo.service';
import { Todo } from '../models/todo';
import { TodoViewModel } from '../models/todo-view-model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {
  todoForm: FormGroup;
  todos: any;

  constructor(private formBuilder: FormBuilder,
  public activeModal: NgbActiveModal,
  private todoService: TodoService) { }

  createMode: boolean = true;
  todo: TodoViewModel;

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: false
    });
    //if (!this.createMode) { this.loadTodo(this.todo); }
  }
  // loadTodo method
  loadTodo(todo: TodoViewModel) {
    this.todoForm.patchValue(todo);
  }

  // consume the TodoService service to save our record in the Cloud FireStore
  saveTodo() {
    // Validate the form
    if (this.todoForm.invalid) {
      return;
    }

    if (this.createMode) {
      let todo: Todo = this.todoForm.value;
      todo.lastModifiedDate = new Date();
      todo.createdDate = new Date();
      this.todoService.saveTodo(todo)
        .then(response => this.handleSuccessfulSaveTodo(response, todo))
        .catch(err => console.error(err));
    } else {
      let todo: TodoViewModel = this.todoForm.value;
      todo.id = this.todo.id;
      todo.lastModifiedDate = new Date();
        this.todoService.editTodo(todo)
          .then(() => this.handleSuccessfulEditTodo(todo))
          .catch(err => console.error(err));
      }
  }

  handleSuccessfulSaveTodo(response: DocumentReference, todo: Todo) {
    // Send info to the todo-list component
    this.activeModal.dismiss({ todo: todo, id: response.id });
  }

  // edit is successful
  handleSuccessfulEditTodo(todo: TodoViewModel) {
    this.activeModal.dismiss({ todo: todo, id: todo.id, createMode: false });
  }
  
  
  

}



