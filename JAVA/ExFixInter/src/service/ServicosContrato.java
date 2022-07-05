package service;

import java.util.Calendar;
import java.util.Date;

import entities.Contrato;
import entities.Parcelas;

public class ServicosContrato {

	private PagamentoServicoOnline PagamentoServicoOnline;
	
	
	public ServicosContrato(PagamentoServicoOnline PagamentoServicoOnline) {
		this.PagamentoServicoOnline = PagamentoServicoOnline;
	}
	
	
	
	public void processarContrato(Contrato contrato, int mes) {
		
		double parcelaBasica = contrato.getValorTotal()/mes;
		
		for(int i = 1; 	i<= mes; i++ ) {
			
			double updateTaxa = parcelaBasica + PagamentoServicoOnline.juros(parcelaBasica, i);
			
			
			double totalTaxal = updateTaxa + PagamentoServicoOnline.taxaPagamento(updateTaxa);
			
			Date dataVencimento = adiconarMes(contrato.getData(), i);
			contrato.getParcelas().add(new Parcelas(dataVencimento, totalTaxal));
			
		}
		
		
	}
	
	
	
	private Date adiconarMes(Date date, int N) {
		
		Calendar calendario = Calendar.getInstance();
		calendario.setTime(date);
		calendario.add(Calendar.MONTH, N);
		return calendario.getTime();
		
	}
	
}
