package application;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import entities.Produto;

public class Program {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		List<Produto> list = new ArrayList<>();
		
		System.out.println("Entre com o Caminho do arquivio : C:\\Users\\Godoy\\Documents\\PortifolioGodoy\\JAVA\\ExTrabalhandoArquivos ");		
		String sourceFileStr = sc.nextLine();
		
		File sourceFile = new File(sourceFileStr);		
		String sourceFolderStr = sourceFile.getParent();
		
		boolean sucess = new File(sourceFolderStr + "\\out").mkdir();
		
		String targertFileStr = sourceFolderStr + "\\out\\estoque.csv";
		
		try(BufferedReader br = new BufferedReader(new FileReader(sourceFileStr))) {
			
			String itemCsv = br.readLine();
			while(itemCsv != null) {
				
				String[] fields = itemCsv.split(",");
				String name = fields[0];
				double price = Double.parseDouble(fields[1]);
				int quantity = Integer.parseInt(fields[2]);
				
				list.add(new Produto(name, price, quantity));
				
				itemCsv = br.readLine();
				
				
			}
			
			try (BufferedWriter bw = new BufferedWriter(new FileWriter(targertFileStr))) {

				for (Produto item : list) {
					bw.write(item.getName() + "," + String.format("%.2f", item.total()));
					bw.newLine();
				}

				System.out.println(targertFileStr + " CREATED!");
				
			} catch (IOException e) {
				System.out.println("Error writing file: " + e.getMessage());
			}

		} catch (IOException e) {
			System.out.println("Error reading file: " + e.getMessage());
		}

		sc.close();
			
			
			
		
	}
		

	

}
