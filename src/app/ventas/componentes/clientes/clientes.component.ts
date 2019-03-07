import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Ecliente } from '../../modelos/ecliente';
declare var Swal: any;
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  lisClientes: Ecliente[];
  constructor(private gestorCliente: ClientesService) { }

  ngOnInit() {
    this.gestorCliente.getClientes().subscribe(res => {console.log('Data de clientes: ' , res);
this.lisClientes = res;
  } );
  }
async nuevo() {
  const { value: formValues } = await Swal.fire({
    title: 'Agregar Cliente',
    html:
      `<label for="">Nombre:</label><input id="txtnom" class="swal2-input" placeholder="Nombre">` +
      '<label for="">Edad:</label><input id="txtedad" class="swal2-input" placeholder="Edad">' +
      '<label for="">Pais:</label><input id="txtpais" class="swal2-input" placeholder="Pais">' +
      '<label for="">Saldo:</label><input id="txtsaldo" class="swal2-input" placeholder="Sueldo">',
    focusConfirm: false,
    preConfirm: () => {
      // let element: HTMLElement;
      // element = document.getElementById('ButtonX') as HTMLElement;

      return [
        (<HTMLInputElement>document.getElementById('txtnom')).value,
        (<HTMLInputElement>document.getElementById('txtedad')).value,
        (<HTMLInputElement>document.getElementById('txtpais')).value,
        (<HTMLInputElement>document.getElementById('txtsaldo')).value
        // document.getElementById('swal-input1').value,
        // document.getElementById('swal-input2').value

      ];
    }
  });

  if (formValues) {
    // Swal.fire(JSON.stringify(formValues));
// tslint:disable-next-line: prefer-const
    let data = {
      nombre: formValues[0],
      edad: formValues[1],
      pais: formValues[2],
      saldo: formValues[3]
    };
    this.gestorCliente.grabarCliente(data);
  }
}
Eliminar(id: string) {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Deseas eliminar este cliente?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, deseo borrar"
  }).then(result => {
    if (result.value) {
      this.gestorCliente.eliminarCliente(id);
      Swal.fire("Eliminado!", "El cliente se eliminó correctamente", "success");
    }
  });
}


}

