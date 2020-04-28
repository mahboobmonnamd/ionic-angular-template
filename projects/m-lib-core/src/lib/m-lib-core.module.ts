import { NgModule } from '@angular/core';
import { MLibCoreComponent } from './m-lib-core.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MLibCoreComponent],
  imports: [IonicModule.forRoot()],
  exports: [MLibCoreComponent],
})
export class MLibCoreModule {}
