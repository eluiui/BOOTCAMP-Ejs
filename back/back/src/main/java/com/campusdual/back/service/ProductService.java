package com.campusdual.back.service;

import com.campusdual.back.api.IProductService;
import com.campusdual.back.models.DAO.ProductDao;
import com.campusdual.back.models.DTO.ProductDto;
import com.campusdual.back.models.DTO.dtomapper.ProductMapper;
import com.campusdual.back.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("ProductService")
@Lazy
public class ProductService implements IProductService {
    @Autowired
    private ProductDao productDao;

    @Override
    public ProductDto queryProduct(ProductDto productDTO) {
        Product product = ProductMapper.INSTANCE.toEntity(productDTO);
        return ProductMapper.INSTANCE.toDTO(productDao.getReferenceById(product.getId()));
    }

    @Override
    public List<ProductDto> queryAllProducts() {
        return ProductMapper.INSTANCE.toDTOList(productDao.findAll());
    }

    @Override
    public int insertProduct(ProductDto productDTO) {
        Product product= ProductMapper.INSTANCE.toEntity(productDTO);
        productDao.saveAndFlush(product);
        return product.getId();
    }

    @Override
    public int updateProduct(ProductDto productDTO) {
        return insertProduct(productDTO);
    }

    @Override
    public int deleteProduct(ProductDto productDTO) {
        int id = productDTO.getId();
        Product product = ProductMapper.INSTANCE.toEntity(productDTO);
        productDao.delete(product);
        return  id;
    }
}
