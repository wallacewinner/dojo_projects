package com.winner.stock.controller;

import com.winner.stock.dto.BrapiResponseDto;
import com.winner.stock.service.StockService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/stocks")
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping("/{symbol}")
    public ResponseEntity<BrapiResponseDto> getStockQuote(@PathVariable String symbol) {
        BrapiResponseDto response = stockService.getStockQuote(symbol);
        return ResponseEntity.ok(response);
    }
}
