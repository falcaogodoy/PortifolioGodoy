package entities;

public class PJuridica  extends Contribuinte{
	
	
	private Integer nFuncionarios;
		
	

	public PJuridica(String nome, Double rendaAnual, Integer nFuncionarios) {
		super(nome, rendaAnual);
		this.nFuncionarios = nFuncionarios;
	}




	public Integer getnFuncionarios() {
		return nFuncionarios;
	}




	public void setnFuncionarios(Integer nFuncionarios) {
		this.nFuncionarios = nFuncionarios;
	}




	@Override
	public double imposto() {
		if(nFuncionarios > 10 ) {
			
			return getRendaAnual() * 0.14;
			
		} else {
			return getRendaAnual() * 0.16;
		}
	}

	
	
	
	
}
