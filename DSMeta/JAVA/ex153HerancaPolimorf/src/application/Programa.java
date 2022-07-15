package application;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import entities.Contribuinte;
import entities.PFisica;
import entities.PJuridica;

public class Programa {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("Digite o numero de Usuarios :  ");
		int user = sc.nextInt();
		
		List<Contribuinte> lista = new ArrayList<Contribuinte>();
		
		for (int i = 1; i <= user; i++ ) {
			
			System.out.println("Digite os dados do Usuario #" + user + " .");	
			System.out.println();
			
			System.out.println(" O Usuario é Pessoa Fisica ou Juridica ? (F/J) ");
			
			char tConta = sc.next().charAt(0);
			
			System.out.print("Digite o Nome : ");
			String nome = sc.next();
			
			System.out.print("A sua Renda Anual : ");
			Double rendaAnual = sc.nextDouble();
					
					
			
			if (tConta == 'f') {
										
				System.out.print("Digite o Gasto com Saude ");
				
				Double gastosSaude = sc.nextDouble();
				PFisica pf = new PFisica(nome, gastosSaude, gastosSaude);
				
				lista.add(pf);
			} else {
				System.out.print("Digite o numero de Funcionarios ");
				Integer nFuncionarios = sc.nextInt();				
								
				PJuridica pj = new PJuridica(nome, rendaAnual, nFuncionarios);
				lista.add(pj);
			}
			
	
		
			
			
			
		}
		
		System.out.println();
		
		System.out.println("Taxas : ");
		for (Contribuinte p : lista) {
			
			System.out.println(p.getNome() + " : $ " + p.imposto());
		}
		
		
		
		
		
		sc.close();
		
	}

}
