package application;
import entities.Client;
import entities.Order;
import entities.OrderItem;
import entities.Product;
import enumx.OrderStatus;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class Program {
    public static void main(String[] args) throws ParseException {

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Scanner sc = new Scanner(System.in);

        System.out.println(" Digite os dados do Cliente");
        System.out.print("Nome : ");
        String nome = sc.nextLine();
        System.out.print("Digite o E-mail");
        String email = sc.next();
        System.out.print("Data de Aniversario (Dia/Mes/Ano)");
        Date aniversario = sdf.parse(sc.next());

        Client cliente = new Client( nome, email, aniversario);
        System.out.println("Digite os dados do pedido:  ");

        System.out.print(" Qual o Status do pedido ? ");
        OrderStatus status = OrderStatus.valueOf(sc.next());


        Order order = new Order(new Date(), status, cliente);

        System.out.println("Quantos Itens o pedido vai ter ?  ");


        int npedido = sc.nextInt();

        for (int i =0; i < npedido ; i++  ){
            System.out.println(" Entre com os dados do pedido " + (i+1) + " #.");
            System.out.print("Nome do Produto : ");
            sc.nextLine();
            String produtoNome = sc.next();
            System.out.print("Digite o preço do Produto");
            Double preco = sc.nextDouble();
            System.out.print("Qual a quantidade ? ");
            int quantidade = sc.nextInt();

            Product p = new Product(produtoNome, preco);
            OrderItem it = new OrderItem(quantidade, preco, p);

            order.addItem(it);




        }



        System.out.println();
        System.out.println(order);
        sc.close();
        
    }
}
