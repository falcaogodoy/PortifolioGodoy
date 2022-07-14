package application;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

import model.entities.AluguelCarro;
import model.entities.Veiculos;
import model.services.ServicoAluguel;
import model.services.TaxasBrasileiras;

public class Program {

	public static void main(String[] args) throws ParseException {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:ss");
		
		System.out.println("Digite os dados do Aluguel ");
		System.out.print("Digite o Modelo: ");
		String modelo = sc.nextLine();
		
		System.out.print("Digite a Data de Inicio : ");
		Date inicio = sdf.parse(sc.nextLine());
		
		System.out.print("Digite a Data de Inicio : ");
		Date fina2= sdf.parse(sc.nextLine());
		
		AluguelCarro cr = new AluguelCarro(inicio, fina2, new Veiculos(modelo));
		
		
		System.out.print("Digite o Preço Por Hora ");
		double precoHora = sc.nextDouble();
		System.out.print("Digite o Preço Por DIa");
		double precoDia = sc.nextDouble();
		
		ServicoAluguel servicoAluguel = new ServicoAluguel(precoDia, precoHora, new TaxasBrasileiras());
		
		servicoAluguel.processamentoInvoice(cr);
		
		System.out.println("Invoice  :");
		System.out.println("Pagamento Basico : " + String.format("%.2f", cr.getInvoice().getPagamentoBasico()));
		System.out.println("Taxas : " + String.format("%.2f", cr.getInvoice().getTaxas()));
		System.out.println("Pagamento Total : " + String.format("%.2f", cr.getInvoice().totalPagamento()));
		
		
		sc.close();
	}

}
