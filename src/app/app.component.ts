import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uploadFile';
  image: File;
  mutipleImage = []

  constructor(private http: HttpClient, private crudService: CrudService) {

  }


  selectImage(event: any) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0]
      this.image = file
      console.log(this.image)

    }
  }

  onChange(){
    const formatData = new FormData()

    formatData.append('file', this.image)

    this.crudService.postFiles(this.image).subscribe({
      next: (res) => {
          console.log(res)
      }
    })
  }
}
