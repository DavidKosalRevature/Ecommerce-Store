package com.md.Springdatajpaproject.service;

import com.md.Springdatajpaproject.entity.Cart;
import com.md.Springdatajpaproject.entity.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {

    Cart addCart(Cart cart);

    List<Cart> getAllCarts();

    Cart getCartById(long cartId);

    void deleteCart(long cartId);

    void deleteAllCart();



}
