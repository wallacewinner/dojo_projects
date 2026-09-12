package com.winner.stock.client;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.cloud.openfeign.FeignClient;
import com.winner.stock.dto.BrapiResponseDto;

@FeignClient(url = "https://brapi.dev", name = "brapi")
public interface BrapiClient {
    @GetMapping("/api/v2/stocks/quote?symbols={symbol}")
        BrapiResponseDto getStockQuote(@PathVariable("symbol") String symbol);
}