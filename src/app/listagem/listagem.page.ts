import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})

export class ListagemPage implements OnInit {

  public posts;
  public page;
  public total_page;

  constructor(private ApiService: ApiService) {
    this.page = 1;
    this.ApiService.getPosts(this.page).subscribe((data: any)=>{
      console.log(data);
      this.total_page = data.total_page;
      this.posts = data.data;
    });
  }

  loadMoreData(event){
    this.page++;
    this.ApiService.getPosts(this.page).subscribe((data: any)=>{
      console.log(data);
      this.posts = this.posts.concat(data.data);
      event.target.complete();
      if(this.total_page == this.page)
        event.target.disabled == true;
    });
  }

  async presentModal(){
    const modal = await this.modalController.create({
      Component: ModalPage
    });
    return await modal.present();
  }

  ngOnInit() {
  }
}
