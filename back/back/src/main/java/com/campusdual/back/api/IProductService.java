package com.campusdual.back.api;

import com.campusdual.back.models.DTO.ProductDto;

import java.util.List;

public interface IProductService {
    ProductDto queryProduct(ProductDto productDTO);

    List<ProductDto> queryAllProducts();

    int insertProduct(ProductDto productDTO);

    int updateProduct(ProductDto productDTO);

    int deleteProduct(ProductDto productDTO);
}