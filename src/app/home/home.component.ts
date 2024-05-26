import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // public Editor = ClassicEditor;
  public Editor = ClassicEditor as unknown as {
    create(sourceElementOrData: string | HTMLElement, config?: any): Promise<any>;
  };

}
