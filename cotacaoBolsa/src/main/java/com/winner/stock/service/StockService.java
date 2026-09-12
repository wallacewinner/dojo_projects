package com.winner.stock.service;

import com.winner.stock.client.BrapiClient;
import com.winner.stock.dto.BrapiResponseDto;
import com.winner.stock.dto.StockResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
   private final BrapiClient apiClient;

   public StockService(BrapiClient apiClient) {
      this.apiClient = apiClient;
   }

   public StockResponseDto getStockQuote(String symbol) {
      BrapiResponseDto response = apiClient.getStockQuote(symbol);
      return mapToStockResponseDto(response);
   }

   private StockResponseDto mapToStockResponseDto(BrapiResponseDto dto) {
       if (dto == null) return null;

       List<StockResponseDto.ResultadoStockDto> resultados = dto.results() == null ? List.of() :
           dto.results().stream().map(res -> new StockResponseDto.ResultadoStockDto(
               res.requestedSymbol(),
               res.symbol(),
               res.changed(),
               res.data() == null ? null : new StockResponseDto.DadosStockDto(
                   res.data().shortName(),
                   res.data().currency(),
                   res.data().regularMarketPrice(),
                   res.data().regularMarketChangePercent(),
                   res.data().regularMarketVolume(),
                   res.data().marketCap()
               )
           )).toList();

       return new StockResponseDto(resultados, dto.requestedAt(), dto.took());
   }
}