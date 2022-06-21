package entites;

public class FuncionariosTerc extends Funcionarios{

    private Double taxaAdicional;

    public FuncionariosTerc(String nome, Integer horas, Double valHoras, Double taxaAdicional) {
        super(nome, horas, valHoras);
        this.taxaAdicional = taxaAdicional;
    }
}
