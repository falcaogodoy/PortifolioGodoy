package model.entities;

public class Invoice {
	
	private Double pagamentoBasico;
	private Double taxas;
	
	public Invoice() {
	
	}

	public Invoice(Double pagamentoBasico, Double taxas) {
		this.pagamentoBasico = pagamentoBasico;
		this.taxas = taxas;
	}

	public Double getPagamentoBasico() {
		return pagamentoBasico;
	}

	public void setPagamentoBasico(Double pagamentoBasico) {
		this.pagamentoBasico = pagamentoBasico;
	}

	public Double getTaxas() {
		return taxas;
	}

	public void setTaxas(Double taxas) {
		this.taxas = taxas;
	}
	
	// Metodos//
	
	
	public Double totalPagamento () {
		
		return getPagamentoBasico() + getTaxas();
	}
	
	

}
