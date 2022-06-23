package entities;

public class PFisica extends Contribuinte {
	
	private Double gastosSaude;
	
	
	public PFisica(String nome, Double rendaAnual, Double gastosSaude) {
		super(nome, rendaAnual);
		this.gastosSaude = gastosSaude;
	}

	

	public Double getGastosSaude() {
		return gastosSaude;
	}


	public void setGastosSaude(Double gastosSaude) {
		this.gastosSaude = gastosSaude;
	}


	@Override
	public double imposto() {
		double taxaBasica;
		
		if(getRendaAnual() < 20000) {
			taxaBasica = getRendaAnual() * 0.15;
		}
		else {
			taxaBasica = getRendaAnual() * 0.25;
		}
		
		taxaBasica = taxaBasica -  (getGastosSaude() * 0.5);
		if(taxaBasica < 0) {
			return 0;
		}else {
			return taxaBasica;
		}
	}
	
	
	
	
	
}
