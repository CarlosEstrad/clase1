import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ResponseType } from 'src/app/core/model/enums/response-type.enum';
import { NotificacionService } from 'src/app/core/services/utils/notificacion.service';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss']
})
export class ClipboardComponent implements OnInit {

  title = 'Compartir'
  @ViewChild('clipboardContent', { static: true }) clipboardContent: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Array<any>,
    public notificacionService: NotificacionService) { }

  ngOnInit() {
  }

  copyToClipboard() {
    var sel, range;
    var el = document.getElementById('clipboardContent');
    sel = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    sel.removeAllRanges();

    this.notificacionService.showMessage("Ahora puedes pegar el contenido en tus documentos o correos", ResponseType.Success);
  }

}
