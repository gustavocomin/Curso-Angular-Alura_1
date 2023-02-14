import { CardModule } from "./../../shared/components/card/card.module";
import { PhotoModule } from "./../photo/photo.module";
import { CommonModule } from "@angular/common";
import { FilterByDescription } from "./filter-by-description.pipe";
import { NgModule } from "@angular/core";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [CommonModule, PhotoModule, CardModule],
})
export class PhotoListModule {}
