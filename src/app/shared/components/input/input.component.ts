import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorModel } from '@shared/Interfaces/common.interface';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent implements OnInit {
  @Input() id!: number;
  @Input() title!: string;
  @Input() placeholder!: string;
  @Input() name!: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() errors: ErrorModel = {};
  @Output() OnInput = new EventEmitter<string | null>();
  inputForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      task: new FormControl({ value: '', disabled: this.disabled }, [Validators.required, Validators.minLength(5)])
    });
  }

  onInput(): void {
    if (this.inputForm.invalid) return;
    const inputValue: string | null = this.inputForm.value[this.name];
    if (this.OnInput) this.OnInput.emit(inputValue);
  }

  errorObjectKeys(error: any): string[] {
    return Object.keys(error);
  }

  get task(): FormControl {
    return this.inputForm.get('task') as FormControl;
  }
}
