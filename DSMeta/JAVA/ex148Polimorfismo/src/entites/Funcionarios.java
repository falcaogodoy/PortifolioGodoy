package entites;

public class Funcionarios {

    public String nome;
    public Integer horas;
    public Double valHoras;

    public Funcionarios() {
    }

    public Funcionarios(String nome, Integer horas, Double valHoras) {
        this.nome = nome;
        this.horas = horas;
        this.valHoras = valHoras;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getHoras() {
        return horas;
    }

    public void setHoras(Integer horas) {
        this.horas = horas;
    }

    public Double getValHoras() {
        return valHoras;
    }

    public void setValHoras(Double valHoras) {
        this.valHoras = valHoras;
    }


    public Double pagamento(){

        return horas * valHoras;

    }

}
