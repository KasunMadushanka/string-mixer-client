import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    inputForm = this.formBuilder.group({
        s1: null,
        s2: null,
    });
    public result: any;

    constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

    onSubmit(): void {
        this.http
            .get<any>('mix', {
                params: {
                    s1: this.inputForm.value.s1,
                    s2: this.inputForm.value.s2,
                },
            })
            .subscribe({
                next: (data) => {
                    this.result = data.result;
                },
                error: (error) => {
                    alert('There was an error!');
                    console.log(error);
                },
            });
    }

    isFormValid(): boolean {
        return this.inputForm.value.s1 && this.inputForm.value.s2
    }

    onReset(): void {
        this.result = null;
        this.inputForm.reset();
    }
}
