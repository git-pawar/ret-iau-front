import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public userInformation: object;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.authService.getUserData().then(data => {
      this.userInformation = data;
      //console.log(data);
    });
  }

  public logoutAction() {
    if (this.authService.logout()) {
      this.router.navigate(["login"]);
    }
  }
}
