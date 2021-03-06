import { Departamento } from './departamento.model';
import { Model } from './model';

export class Funcionario extends Model{
  nome: string;
  funcao: string;
  emial: string;
  ultimoAcesso: Date;
  departamento: Departamento;
}
