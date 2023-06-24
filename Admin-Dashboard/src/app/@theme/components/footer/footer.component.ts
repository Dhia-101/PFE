import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
    <p> © Copyright SmartAGL SARL 2020. All rights reserved.</p>
    </span>
  `,
})
export class FooterComponent {
}
