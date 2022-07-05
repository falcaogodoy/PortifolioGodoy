package application;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

import entities.Contrato;
import entities.Parcelas;
import service.PaypalService;
import service.ServicosContrato;

public class Program {

	public static void main(String[] args) throws ParseException {
		
		Scanner sc = new Scanner(System.in);
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		
		
		
		System.out.println("Entre com os dados do Contrato");
		
		System.out.print("Digite o numero do Contrato");
		int numero = sc.nextInt();
		
		System.out.print("Digite a data do inicio : (dd/MM/yyyy) ");		
		Date data = sdf.parse(sc.next());
		
		System.out.println("Digite o valor do Contrato : ");
		Double valorTotal = sc.nextDouble();
		
		System.out.println("Entre com o numero de Parcelas");
		int parcelas = sc.nextInt();
		
		
		Contrato contrato = new Contrato(numero, data, valorTotal);
		
		ServicosContrato cs = new ServicosContrato(new PaypalService());
		
		cs.processarContrato(contrato, parcelas);
		
		System.out.println("Parcelas");
		
		for(Parcelas pc : contrato.getParcelas()) {
			
			System.out.println(pc);
		}
		
		
		
		sc.close();

	}

}
