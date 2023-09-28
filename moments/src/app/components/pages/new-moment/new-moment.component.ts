import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';

import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  btnText = 'Partilhar';
  image?: File;

  constructor(
    private momentService: MomentService,
    private messagesService: MessageService,
    private router: Router
  ) {}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.image = file;
  }
  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();
    this.messagesService.add('Momento adicionado com sucesso!');
    this.router.navigate(['/']);
  }
}
