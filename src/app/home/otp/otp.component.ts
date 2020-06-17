import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import { Validators, FormControl } from '@angular/forms';
import { CommonServiceService } from './../../services/common-service.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
  providers: [CommonServiceService]
})
export class OtpComponent implements OnInit {

  phone : any;
  
  codebox1Ctrl = new FormControl('', [
    Validators.required
  ]);
  codebox2Ctrl = new FormControl('', [
    Validators.required
  ]);
  codebox3Ctrl = new FormControl('', [
    Validators.required
  ]);
  codebox4Ctrl = new FormControl('', [
    Validators.required
  ]);
  constructor(private acroute: ActivatedRoute,private commonserv : CommonServiceService,private router : Router) {
    var _self = this;
    _self.acroute.params.subscribe( params => {
      _self.phone = params.phone;

    });
   }

  ngOnInit() {
    
  }
  
   getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
  }
  /*
   onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (this.getCodeBoxElement(index).value.length === 1) {
      if (index !== 4) {
        this.onFocusEvent(index+1);
        //this.getCodeBoxElement(index+ 1).focus();
      } else {
        this.getCodeBoxElement(index).blur();
        // Submit code
        console.log('submit code ');
      }
    }
    if (eventCode === 8 && index !== 1) {
      this.getCodeBoxElement(index - 1).focus();
    }
  }
   onFocusEvent(index) {
    for (var item = 1; item < index; item++) {
      const currentElement = this.getCodeBoxElement(item);
      if (!currentElement.value) {
          currentElement.focus();
          break;
      }
    }
  }
  */
  verify(){
    var _self = this;
    if(_self.codebox1Ctrl.value && _self.codebox2Ctrl.value && _self.codebox3Ctrl.value && _self.codebox4Ctrl.value && _self.phone){
      var otp = ''+_self.codebox1Ctrl.value+_self.codebox2Ctrl.value+_self.codebox3Ctrl.value+_self.codebox4Ctrl.value;
      var obj ={phone:_self.phone,otp:otp};
      _self.commonserv.verifyotp(obj).subscribe(res => {
        if(res.success){
          _self.router.navigate(['/detail']);
          return;
        }
      });
    }
  }

}
