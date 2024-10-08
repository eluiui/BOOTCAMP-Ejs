package com.campusdual.back.models.DTO.dtomapper;

import com.campusdual.back.models.DTO.ProductDto;
import com.campusdual.back.models.Product;
import org.mapstruct.Mapper;

import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    ProductDto toDTO(Product product);

    List<ProductDto> toDTOList(List<Product> products);

    Product toEntity(ProductDto productdto);
}
