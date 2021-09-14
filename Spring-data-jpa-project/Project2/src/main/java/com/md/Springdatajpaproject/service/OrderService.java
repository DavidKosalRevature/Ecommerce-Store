package com.md.Springdatajpaproject.service;

import com.md.Springdatajpaproject.entity.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {


    Order saveOrder(Order order);

    List<Order> getAllOrders();

}
