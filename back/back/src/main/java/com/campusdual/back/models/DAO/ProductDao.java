package com.campusdual.back.models.DAO;

import com.campusdual.back.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDao extends JpaRepository<Product, Integer> {

}