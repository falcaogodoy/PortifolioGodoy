package application;

import entites.Funcionarios;
import entites.FuncionariosTerc;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Program {

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        List<Funcionarios> lista = new ArrayList<>();


        System.out.println(" Digite a quantiadde de funcionarios : ");
        int fn = sc.nextInt();

        for (int i=1; i<=fn; i++ ){
                System.out.println("Funcionario n#: " + i + " Dados. " );
                System.out.print(" É terceirizado ? Y/N");
                System.out.println();
                char ch = sc.next().charAt(0);
                System.out.print("Nome : ");
                sc.nextLine();
                String nome = sc.nextLine();
                System.out.print("Horas Trabalhadas  : ");
                int horasTrabalhadas = sc.nextInt();
                System.out.print("Valor por Horas : ");
                double valorHora = sc.nextDouble();

                if( ch == 'y' ){
                    System.out.print("Valor Adicional : ");
                    double valorAdicional = sc.nextDouble();
                    Funcionarios fnc = new FuncionariosTerc(nome,horasTrabalhadas, valorHora, valorAdicional );
                    lista.add(fnc);
                } else {

                    Funcionarios fnc = new Funcionarios(nome,horasTrabalhadas, valorHora );
                    lista.add(fnc);

                }

                System.out.println();
                System.out.println(" ----------------- PAGAMENTOS ----------");

                for(Funcionarios fnc: lista){
                    System.out.println(fnc.getNome() +" Pagamento:  " + fnc.pagamento());
                }


                sc.close();
        }







    }
}
