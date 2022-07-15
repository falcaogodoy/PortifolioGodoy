package entites;

public class FuncionariosTerc extends Funcionarios{

    private Double taxaAdicional;

    public FuncionariosTerc(String nome, Integer horas, Double valHoras, Double taxaAdicional) {
        super(nome, horas, valHoras);
        this.taxaAdicional = taxaAdicional;
    }

    public FuncionariosTerc(String nome, Integer horas, Double valHoras) {
        super(nome, horas, valHoras);
    }

    public Double getTaxaAdicional() {
        return taxaAdicional;
    }

    public void setTaxaAdicional(Double taxaAdicional) {
        this.taxaAdicional = taxaAdicional;
    }

    @Override
    public Double pagamento(){

        return super.pagamento() + taxaAdicional * 1.1;

    }

}
