import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  myInfo: UserInfo | undefined;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.showUserInfo();
  }
  getUserInfo() {
    return this.http.get<UserInfo>(
      'https://cs-230-lab-default-rtdb.firebaseio.com/my-info.json'
    );
  }
  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      this.myInfo = data;
    });
  }
}
