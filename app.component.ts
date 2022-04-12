import { Component} from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ACCOUNT HOLDER DETAILS';
  aform:FormGroup;
 
  constructor(){
    this.aform = new FormGroup({
      accname:new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]+')])
  });
}
get accname(){
  return this.aform.get('accname');

}
login(){
console.log(this.aform.value.accname)
alert("Successfully submitted")

}
}
