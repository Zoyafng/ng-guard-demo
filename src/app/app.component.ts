import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'Authing';

  appId = '5d70d0e991fdd597019df70d';

  visible = true;

  onLoad() {
    console.log(this.visible, '加载了');
  }

  onClose() {
    this.visible = false;

    console.log('关闭了');
  }
  config: any = {
    mode: 'modal',
  };

  onLogin(event: any) {
    console.log('登录了：', event);
  }
}
