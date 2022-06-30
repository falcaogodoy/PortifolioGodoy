package model.entities;

import java.util.Date;

public class AluguelCarro {

	private Date inicioAluguel;
	private Date finalAluguel;
	private Veiculos veiculo;
	private Invoice invoice;
	
	
	private AluguelCarro() {		
	}


	public AluguelCarro(Date inicioAluguel, Date finalAluguel, Veiculos veiculo) {
		this.inicioAluguel = inicioAluguel;
		this.finalAluguel = finalAluguel;
		this.veiculo = veiculo;
	}


	public Date getInicioAluguel() {
		return inicioAluguel;
	}


	public void setInicioAluguel(Date inicioAluguel) {
		this.inicioAluguel = inicioAluguel;
	}


	public Date getFinalAluguel() {
		return finalAluguel;
	}


	public void setFinalAluguel(Date finalAluguel) {
		this.finalAluguel = finalAluguel;
	}


	public Veiculos getVeiculo() {
		return veiculo;
	}


	public void setVeiculo(Veiculos veiculo) {
		this.veiculo = veiculo;
	}


	public Invoice getInvoice() {
		return invoice;
	}


	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}
	
	
	
}
