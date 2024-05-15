import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PacientesServiceService {

  private api: string = "http://localhost:3001/alerce" // api del bakckend evaluación 1

  constructor(private httpClient: HttpClient) { }

  // crear paciente
  postPaciente(
    rut: string, nombre: string, edad: number, sexo: string,
    enfermedad: string, fechaIngreso: Date, revisado: boolean
  ){
    let paciente = {
      rut: rut, nombre: nombre, edad: edad, sexo: sexo,
      enfermedad: enfermedad, fechaIngreso: fechaIngreso,
      revisado: revisado
    }
    return this.httpClient.post(this.api + "/paciente", paciente,{})
  }

  // obetener pacientes
  getPacientes(){
    return this.httpClient.get(this.api + "/pacientes")
  }

  // obtener pacientes por id
  getPacientePorId(id: string) {
    return this.httpClient.get(this.api + "/pacientes/${id}");
  }

  // actualizar por id
  putPacientePorId(id: number, paciente: any) {
    return this.httpClient.put(this.api + "/pacientes/${id}", paciente, {});
  }

  // borrar paciente por id
  deletePacientePorId(id: number) {
    return this.httpClient.delete(this.api + "/pacientes/${id}");
  }
}
