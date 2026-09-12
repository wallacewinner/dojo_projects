package com.winner.stock.dto;

import java.util.List;

public record BrapiResponseDto(
    List<StockResultDto> results,
    String requestedAt,
    Integer took
) {
    public record StockResultDto(
        String requestedSymbol,
        String symbol,
        Boolean changed,
        StockDataDto data
    ) {}

    public record StockDataDto(
        String shortName,
        String currency,
        Double regularMarketPrice,
        Double regularMarketChangePercent,
        Long regularMarketVolume,
        Long marketCap
    ) {}
}
