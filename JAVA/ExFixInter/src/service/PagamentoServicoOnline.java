package service;

public interface PagamentoServicoOnline {
	
	Double taxaPagamento(double quantidade);	
	Double juros(double quantidade, int mes);
	
	
	

}
