package model.services;

public class TaxasBrasileiras implements TaxaServico{
	
	public double taxas ( double quantia) {
		if (quantia <= 100.00) {
			return quantia * 0.2; 
		}
		else {
			return quantia * 0.15;
		}
	}
}
