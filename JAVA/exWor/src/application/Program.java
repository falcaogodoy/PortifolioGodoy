package application;

import entities.Departament;
import entities.HourContract;
import entities.Worker;
import entities.WorkerLevel;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) throws ParseException {


        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        System.out.print("Entre com o nome do Departamento : ");
        String departamentName = sc.nextLine();
        System.out.print("Entre com os dados do Trabalhador : ");
        System.out.println();
        System.out.print("Nome  ");
        String nomeTrabalhador = sc.nextLine();
        System.out.print("Entre com Level : ");
        System.out.println();
        System.out.print("Level  ");
        String level = sc.nextLine();
        System.out.print("Entre com Salario: ");
        System.out.println();
        System.out.print("Salario  ");
        double salarioBase = sc.nextDouble();

        Worker worker = new Worker(nomeTrabalhador, WorkerLevel.valueOf(level),salarioBase, new Departament(departamentName));
        System.out.print(" Quantos contratos esse trabalhador tem ?  ");

        int n = sc.nextInt();
        for (int i=1; i <= n; i++  ){
            System.out.println(" Entre com os dados do #" + i + " contrato.");
            System.out.print("Entre com a data: ");
            Date dataContrato = sdf.parse(sc.next());
            System.out.print("valor por Hora : ");
            double valorPerHours = sc.nextDouble();
            System.out.print(" Quantas Horas trabalhadas?  ");
            int horas = sc.nextInt();

            HourContract contract = new HourContract(dataContrato,valorPerHours, horas);
            worker.addContract(contract);



        }

        System.out.println();
        System.out.print(" Entre com o mes e ano para calcular a Renda.");
        String mesAno  = sc.next();
        int mes = Integer.parseInt(mesAno.substring(0, 2));
        int ano = Integer.parseInt(mesAno.substring(3));
        System.out.println("Nome : " + worker.getName());
        System.out.println("Departamento : " + worker.getDepartament().getName());
        System.out.println(" Renda de " + mesAno + "   " + String.format("%.2f", worker.income(mes, ano)));






        sc.close();

    }
}
