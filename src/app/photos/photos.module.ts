import { NgModule } from "@angular/core";
import { CardModule } from "./../shared/components/card/card.module";
import { PhotoFormMoldule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";

@NgModule({
  declarations: [],
  imports: [PhotoModule, PhotoListModule, PhotoFormMoldule, CardModule],
})
export class PhotosModule {}
