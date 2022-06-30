package model.services;
import model.entities.AluguelCarro;
import model.entities.Invoice;

public class ServicoAluguel {
	
	private Double precoDiario;
	private Double precoHora;
	
	private TaxaServico taxaServico;

	public ServicoAluguel(Double precoDiario, Double precoHora, TaxaServico taxaServico) {
		
		this.precoDiario = precoDiario;
		this.precoHora = precoHora;
		this.taxaServico = taxaServico;
	}
	
	
	public void processamentoInvoice (AluguelCarro aluguelCarro) {
		
		long t1 = aluguelCarro.getInicioAluguel().getTime();
		long t2 = aluguelCarro.getFinalAluguel().getTime();
		double horas = (double)(t2 - t1)/1000/60/60; 
		
		double pagamentoBasico;
		
		if(horas <= 12.00) {
			pagamentoBasico = Math.ceil(horas) * precoHora;
		}
		else {
			pagamentoBasico = Math.ceil(horas/24) * precoDiario;
		}
		double taxas = taxaServico.taxas(pagamentoBasico);
		
		aluguelCarro.setInvoice(new Invoice(pagamentoBasico, taxas));
	}
	
	
	
}
