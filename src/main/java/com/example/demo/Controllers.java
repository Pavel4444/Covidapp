package com.example.demo;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controllers {
	
	
    @GetMapping("/api/corona1")
	public static String getDailyData() throws IOException{

		HttpURLConnection connection = (HttpURLConnection) new URL("https://covid19.mathdro.id/api/daily").openConnection();
		
		connection.setRequestMethod("GET");

		int responseCode = connection.getResponseCode();
		if(responseCode == 200){
			String response = "";
			Scanner scanner = new Scanner(connection.getInputStream());
			while(scanner.hasNextLine()){
				response += scanner.nextLine();
				
			}
			scanner.close();
			return response;

		}
		return "Corona api unavaible";
	}


	    
	    @GetMapping("/api/corona2")
		public static String getCoronaData() throws IOException{

			HttpURLConnection connection = (HttpURLConnection) new URL("https://api.covid19api.com/summary").openConnection();
			
			connection.setRequestMethod("GET");

			int responseCode = connection.getResponseCode();
			if(responseCode == 200){
				String response = "";
				Scanner scanner = new Scanner(connection.getInputStream());
				while(scanner.hasNextLine()){
					response += scanner.nextLine();
					
				}
				scanner.close();
				return response;

			}
			return "Corona api unavaible";
		}
	    
	}
