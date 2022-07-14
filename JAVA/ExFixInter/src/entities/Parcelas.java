package entities;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Parcelas {
	private static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
	
	private Date dataVencimento;
	private Double quantia;
	
	public Parcelas() {}

	public Parcelas(Date dataVencimento, Double quantia) {
		super();
		this.dataVencimento = dataVencimento;
		this.quantia = quantia;
	}

	public Date getDataVencimento() {
		return dataVencimento;
	}

	public void setDataVencimento(Date dataVencimento) {
		this.dataVencimento = dataVencimento;
	}

	public Double getQuantia() {
		return quantia;
	}

	public void setQuantia(Double quantia) {
		this.quantia = quantia;
	}

	@Override
	public String toString() {
		return sdf.format(dataVencimento) + " -- " + quantia ;
	}
	
	
	
	
	
	
}
