package com.md.Springdatajpaproject.service;

import com.md.Springdatajpaproject.entity.Cart;
import com.md.Springdatajpaproject.repo.CartRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CartServiceImpl implements CartService {

    @Autowired
    CartRepository repository;


    @Override
    public Cart addCart(Cart cart) {

        return repository.save(cart);
    }

    @Override
    public List<Cart> getAllCarts() {
        return repository.findAll();
    }

    @Override
    public Cart getCartById(long cartId) {
        return repository.getById(cartId);
    }

    @Override
    public void deleteCart(long cartId) {

        repository.deleteById(cartId);
        log.info("Delete a cart by id :" +cartId);

    }

    @Override
    public void deleteAllCart() {
        repository.deleteAll();
        log.info("Delete all carts");

    }
}
