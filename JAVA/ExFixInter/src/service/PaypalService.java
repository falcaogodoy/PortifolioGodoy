package service;

public class PaypalService implements PagamentoServicoOnline {

	private static final double TAXA_JUROS = 0.02;
	private static final double JUROS_MENSAL = 0.01;
	
	
	
	
	
	@Override
	public Double taxaPagamento(double quantidade) {
		
		return quantidade * TAXA_JUROS;
	}

	@Override
	public Double juros(double quantidade, int mes) {
		
		return quantidade * mes * JUROS_MENSAL;
	}
	
	
	
	
	

}
