import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export class MyShopValidators {

//  whitespace validation
// static notOnlyWhitespace(control: FormControl): ValidationErrors {
export function notOnlyWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const fieldValid = (value != null) && (value.trim().length > 0);

        return !fieldValid ? { 'notOnlyWhitespace': true } : null;

        // if ((value != null) && (value.trim().length === 0)) {
        //     return { 'notOnlyWhitespace': true };
        // }

    }
}


