import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService';

@Component({
    selector: 'app-find',
    templateUrl: './find.component.html',
    styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

    private userName;
    private users;
    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userName = '';
        this.userService.getUsers().subscribe(res => {
            console.log(res);
        })
    }

    addUser() {
        let req = { name: this.userName };
        this.userService.addUser(req).subscribe(res => {
            this.userName = '';
        })
    }

}
