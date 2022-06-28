package model.entities;

public class Account {
	
	private Integer accNumero;
	private String usuario;
	private Double saldo;
	private Double limiteSaque;
	
	
	
	
	public Integer getNumero() {
		return accNumero;
	}
	public void setNumero(Integer numero) {
		this.accNumero = numero;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public Double getSaldo() {
		return saldo;
	}	
	public void setSaldo(Double saldo) {
		this.saldo = saldo;
	}
	public Double getLimiteSaque() {
		return limiteSaque;
	}
	public void setLimiteSaque(Double limiteSaque) {
		this.limiteSaque = limiteSaque;
	}
	
	public Account() {
		
	}

	public Account(Integer numero, String usuario, Double saldo, Double limiteSaque) {
	
		this.accNumero = numero;
		this.usuario = usuario;
		this.saldo = saldo;
		this.limiteSaque = limiteSaque;
	}
	
	// Metodos//
	
	public void deposito(Double valor) {
		
		saldo += valor;
	}
	
	public void saque(Double valor) {
		validador(valor);
		saldo -= valor;
	}




	@Override
	public String toString() {
		return "Account [accNumero=" + accNumero + ", usuario=" + usuario + ", saldo=" + saldo + ", limiteSaque="
				+ limiteSaque + "]";
	}
	
	
	public void validador(double valor) {
		if(valor > getLimiteSaque()) {
			throw new RuntimeException("Error de Saque: Valor excede o Limite de Saque");
		} 
		if (valor > getSaldo()) {
			throw new RuntimeException("Error de Saque: Sem Saldo.");
		}
		
		
	}
	
	

}
