import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomPipe } from './pipe/CustomPipe';
import { InbuiltComponent } from './inbuilt/inbuilt.component';
import { DoublePurePipe } from './pipe/DoublePurePipe';
import { DoubleImpurePipe } from './pipe/DoubleImpurePipe';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    DoublePurePipe,
    DoubleImpurePipe,
    InbuiltComponent,
    CustomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
