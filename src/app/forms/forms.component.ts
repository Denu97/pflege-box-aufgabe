import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


interface gender2 {
  value: string;
}
@Component({
  selector: 'app-forms-page',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})


export class FormsComponent implements OnInit {

  userDetailsForm: FormGroup;
  captcha:string
  isCollapsed : boolean = true;
  isAdress : boolean = true;

  //Abweichende Lieferadresse
  toggleAdress() {
    this.isAdress= !this.isAdress;
  }

   //Versicherungsart
   toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }



  genders = [
    "Herr",
    "Frau",
    "Divers"
  ];

  //Für Abweichende Lieferadresse
  genders2: gender2[] = [
    {value: 'Herr'},
    {value: 'Frau'},
    {value: 'Divers'}
  ];

   boxes = [
    "Box 1",
    "Box 2",
    "Box 3",
    "Box 4",
    "Box 5",
    "Box 6",
   ];

  insurances= [
    "gesetzlich",
    "privat"
  ];

  validation_messages = {
    'firstName': [
      { type: 'required', message: 'Bitte Vorname eingeben' }
    ],
    'lastName': [
      { type: 'required', message: 'Bitte Nachname eingeben' }
    ],
    'adress': [
      { type: 'required', message: 'Bitte Straße und Hausnummer eingeben' }
    ],
    'zipCode': [
      { type: 'required', message: 'Bitte PLZ eingeben' }
    ],
    'location': [
      { type: 'required', message: 'Bitte Ort eingeben' }
    ],
    'healthInsurance': [
      { type: 'required', message: 'Bitte Krankenkasse eingeben' }
    ],
    'insuranceNumber': [
      { type: 'required', message: 'Bitte Versicherungsnummer eingeben z.B. A123456789'},
      { type: 'pattern', message: 'Bitte Format beachten: z.B. A123456789'}
    ],
    'box': [
    { type: 'required', message: 'Bitte Box auswählen' },
    ],
    'gender': [
      { type: 'required', message: 'Bitte Anrede auswählen' },
    ] 
  };


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
    this.captcha = '';
    
  }

  createForms() {
    // user details form validations
    // for submitting you have to delete not used validations
    this.userDetailsForm = this.fb.group({
      boxControl: ['', Validators.required],
      gender: ['', Validators.required],
      firstName: ['', Validators.required  ],
      lastName: ['', Validators.required ],
      adress: ['', Validators.required ],
      zipCode: ['', Validators.required ],
      location: ['', Validators.required ],
      healthInsurance: ['', Validators.required ],
      insuranceNumber: new FormControl('', Validators.compose([
        Validators.pattern('[A-Z]{1}[0-9]{9}'),
        Validators.required ]))
    });
  }

  onSubmitUserDetails(value: any){
    console.log(value);
  }

  resolved(captchaResponse: string) {
    this.captcha= captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }
}

