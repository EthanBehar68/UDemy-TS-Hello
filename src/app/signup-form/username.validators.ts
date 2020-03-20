import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace: true };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // Fake a server delay
            setTimeout(() => {
                console.log('...waiting');

                if ((control.value as string) == "mosh")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 3000);
        });
    }
}