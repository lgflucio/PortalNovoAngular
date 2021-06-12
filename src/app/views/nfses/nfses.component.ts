import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { PortalConversoesService } from '../../services/portal-conversoes.service';
import { PortalNfseService } from '../../services/portal-nfse.service';

@Component({
  selector: 'app-nfses',
  templateUrl: './nfses.component.html',
  styleUrls: ['./nfses.component.scss']
})
export class NfsesComponent implements OnInit {

  public portalNfse: any[];
  public filtro: any;
  public filtroDiv: any;

  constructor(
    public service: PortalNfseService,
    public serviceConversao: PortalConversoesService) {

    this.filtro = {};
    this.filtroDiv = {};

  }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    console.log(event);
  }

  expanded(event: any): void {
    console.log(event);
  }

  search() {

  }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.service.get()
      .subscribe(
        data => {
          this.portalNfse = data;
        },
        error => {
        });
  }

  limparFiltros() {
    this.filtroDiv.cnpj = "";
    this.filtroDiv.pedido = "";
    this.filtroDiv.protocolo = "";
    this.filtroDiv.data = "";
    this.filtroDiv.numero = "";
    this.filtroDiv.arquivo = "";
    this.filtroDiv.razao = "";
  }

  download(id: number) {
    this.service.downloadFile(id).subscribe(
      data => {
        if (data) {
          var arquivo = atob(data.fileContents);
          var blob = new Blob([arquivo], { type: data.contentType });

          if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, data.fileDownloadName);
          }
          else {
            const source = `data:application/pdf;base64,${data.fileContents}`;
            const link = document.createElement("a");
            link.href = source;
            link.download = `${data.fileDownloadName}`
            link.click();
            // var link = window.document.createElement('a');
            // link.href = window.URL.createObjectURL(blob);
            // link.download = data.fileDownloadName;
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
          }
        }

      },

      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Erro ao realizar download, por favor contate o administrador'
        })
      });
  }

  filtrar() {
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Erro ao realizar consulta, por favor contate o administrador'
    })
  }

  sendReceiver(id: number) : void {
    debugger;
    this.serviceConversao.sendConvert(id).subscribe(data => {
      if (data == 'Erro') {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: data + ', por favor contate o administrador'
        })
      }
      else {
        debugger;
        var protocolo = data.toString();
        Swal.fire({
          icon: 'info',
          title: protocolo,
          html:
            'Caro Prestador sua nota foi enviada para conversão </br>' +
            '<b>Foi gerado um número de protocolo onde poderá ser consultado clicando <a href="http://localhost:4200/#/dashboard">aqui</a> </b> </br></br>' +
            'Após convertido, será disponibilizado automáticamente no sistema RECEIVER',
          showCloseButton: true,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Ok',
        })
      }
    },
      error => {
        console.log(error)
        if (error.status == 200) {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            html:
              error.error.text +
              '</br><b>Consulta clicando <a href="http://localhost:4200/#/dashboard">aqui</a> </b> </br></br>' +
              'Após convertido, será disponibilizado automáticamente no sistema RECEIVER',
          })
        }
        else
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Ocorreu um erro ao enviar para conversão, favor contate o administrador'
          })
        }
      });


    // var protocolo = (Math.random() * 10).toString()
    // Swal.fire({
    //   title: protocolo.replace('.', ''),
    //   html:
    //     '<img style="width: 470px;" src="assets/img/brand/post-pdf-to-xml.png" alt="Converting Pdf"></br>' +
    //     'Caro Prestador sua nota foi enviada para conversão </br>' +
    //     '<b>Foi gerado um número de protocolo onde poderá ser consultado clicando <a href="http://localhost:4200/#/dashboard">aqui</a> </b> ' +
    //     ' </br>' +
    //     'Após convertido, será disponibilizado automáticamente no sistema RECEIVER',
    //   showCloseButton: true,
    //   confirmButtonText:
    //     '<i class="fa fa-thumbs-up"></i> Ok',
    // })
  }
}
