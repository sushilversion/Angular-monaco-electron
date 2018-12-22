import { Component , ViewChild , AfterViewInit, ElementRef} from '@angular/core';
import { MonacoFile } from 'ngx-monaco'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';

  @ViewChild('editor') editorContent: ElementRef;

  file: MonacoFile = {
    uri: 'index.js',
    language: 'javascript',
    content: `console.log('hello world');`
  };

  onFileChange(file: MonacoFile){
    //handle file change
    console.log('File Change invoked');
  }

  ngAfterViewInit() {
    console.log('nfAfterview init');
    console.log(this.editorContent);

  }


}
