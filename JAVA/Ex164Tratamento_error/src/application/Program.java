package application;

import java.util.Scanner;

import model.entities.Account;

public class Program {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		
		
		
		
		System.out.println("Seja bem vindo : ");
		
		System.out.print("Digite o numero da Aconta : ");
		int nacc = sc.nextInt();
		sc.nextLine();
		System.out.print("Digite o nome do Usuario :  ");
		String nome = sc.next();
		System.out.print("Digite o Saldo Inicial:  ");
		double saldoI = sc.nextDouble();
		System.out.print("Digite o Limite de Saque ");
		double lmI = sc.nextDouble();
		
		Account acc = new Account(nacc, nome, saldoI, lmI);
		
		System.out.println();
		System.out.println("Digite quanto deseja Depositar :  ");
		Double valor = sc.nextDouble();
		
	try {	
		acc.deposito(valor);
		
		System.out.println("Novo Saldo pos deposito: " + acc.getSaldo());
		
		System.out.println("Digite quanto deseja Retirar :  ");
		Double valor2 = sc.nextDouble();
		acc.saque(valor2);
		
		
		System.out.println("Novo Saldo pos Saque : " + acc.getSaldo());
	}
	catch(RuntimeException e) {
		System.out.println(e.getMessage());
	}
	
		sc.close();
		
	}

}
