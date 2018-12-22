import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MonacoEditorModule, COMPLETION_PROVIDERS } from 'ngx-monaco';

import { AppComponent } from './app.component';
import { TravisCompletionProvider } from './providers/travis-completion.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [
     { provide: COMPLETION_PROVIDERS, useClass: TravisCompletionProvider, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
