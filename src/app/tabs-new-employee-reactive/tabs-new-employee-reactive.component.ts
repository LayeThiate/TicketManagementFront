import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule,MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatIconModule, MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//need to import at least FormBuilder here and not in app_module, will not work otherwise
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-tabs-new-employee-reactive',
  templateUrl: './tabs-new-employee-reactive.component.html',
  styleUrls: ['./tabs-new-employee-reactive.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class TabsNewEmployeeReactiveComponent implements OnInit {

  public backgroundForm: FormGroup; // our form model

  // we will use form builder to simplify our syntax
  constructor(private _fb: FormBuilder) { }
 
   ngOnInit() { 
        // we will initialize our form here
		this.backgroundForm = this._fb.group({
            employmentBackgroundArray: this._fb.array([
                this.initEmploymentBackground(),
            ])
        });
    }
    initEmploymentBackground() {
        // initialize our employment background
        return this._fb.group({
            companyName: [''],
            positionTitle: [''],
			emloymentBeginningDate: [''],
            emloymentEndingDate: ['']
        });
    }
	
	get employmentBackground() {
		return this.backgroundForm.get('employmentBackgroundArray') as FormArray;
	}
	
    addEmploymentBackground() {
		// add employment background to the list
		this.employmentBackground.push(this._fb.group({
            companyName: [''],
            positionTitle: [''],
			emloymentBeginningDate: [''],
            emloymentEndingDate: ['']
        }));
	}

	deleteEmploymentBackground(/*i: number*/index) {
		// remove employment background from the list
		this.employmentBackground.removeAt(index);
	}

}
