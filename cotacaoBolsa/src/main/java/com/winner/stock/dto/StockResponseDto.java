package com.winner.stock.dto;

import java.util.List;

public record StockResponseDto(
    List<ResultadoStockDto> resultados,
    String dataConsulta,
    Integer tempoRespostaMs
) {
    public record ResultadoStockDto(
        String simboloSolicitado,
        String simbolo,
        Boolean alterado,
        DadosStockDto dados
    ) {}

    public record DadosStockDto(
        String nomeCurto,
        String moeda,
        Double precoMercado,
        Double variacaoPercentual,
        Long volumeMercado,
        Long valorDeMercado
    ) {}
}
