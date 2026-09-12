package com.winner.stock.service;

import com.winner.stock.client.BrapiClient;
import com.winner.stock.dto.BrapiResponseDto;
import org.springframework.stereotype.Service;

@Service
public class StockService {
   private final BrapiClient apiClient;

   public StockService(BrapiClient apiClient) {
      this.apiClient = apiClient;
   }

   public BrapiResponseDto getStockQuote(String symbol) {
      BrapiResponseDto response = apiClient.getStockQuote(symbol);
      System.out.println(response.toString());
      return response;
   }
}