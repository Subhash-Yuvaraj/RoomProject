import { Component, OnInit } from '@angular/core';
import { RoomMember } from './room-member';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details-bootstrap.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  MemberDetails:RoomMember[]=[new RoomMember("Harihara Roopan",412,"harihararoopan.20it@kct.ac.in"),new RoomMember("Hiran",413,"hiran.20it@kct.ac.in"),new RoomMember("Sriram",412,"sriram.20it@kct.ac.in"),new RoomMember("Subhash",413,"subhash.20it@kct.ac.in")];
  constructor() { }

  ngOnInit(): void {
  }

}
