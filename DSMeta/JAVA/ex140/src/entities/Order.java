package entities;

import enumx.OrderStatus;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Order {

    private static SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/YYYY");
    private Date moment;
    private OrderStatus status;

    private Client client;
    private List<OrderItem> items = new ArrayList<>();

    public Order() {
    }

    public Order(Date moment, OrderStatus status, Client client) {
        this.moment = moment;
        this.status = status;
        this.client = client;
    }

    public Date getMoment() {
        return moment;
    }

    public void setMoment(Date moment) {
        this.moment = moment;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
    // Metodos //

    public void addItem(OrderItem item){
        items.add(item);
    }

    public void removeItem(OrderItem item){
        items.remove(item);
    }

    public double total(){
        double soma = 0;
        for (OrderItem it: items){
            soma = soma + it.subTotal();
        }
        return soma;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Pedido instante : ");
        sb.append(sdf.format(moment) + "\n");
        sb.append("Status do Pedido : ");
        sb.append(status + "\n");
        sb.append("Cliente : ");
        sb.append(client + "\n");
        sb.append("Itens do Pedido : \n");
        for (OrderItem item : items){
            sb.append(item + "\n");
        }
        sb.append("  ");
        sb.append("Preco total : ");
        sb.append(String.format("%2f",total()));
        return sb.toString();







    }
}
