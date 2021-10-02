import { Component, OnInit } from '@angular/core';
import { faBars, faUserFriends, faGift } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  faBars = faBars;
  faUserFriends = faUserFriends;
  faGift = faGift;
  
  ngOnInit(): void {
  }

}
