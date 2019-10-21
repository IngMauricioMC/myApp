import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  dadosPessoa = {
      job: '',
      name: ''
  }

  constructor(private apiService : ApiService, private alertController: AlertController) { }

  ngOnInit() {
  }

  async submitForm(){

  	const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message : this.dadosPessoa.job,
      // message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    this.ApiService.sendPostRequest(this.dadosPessoa).subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
