package com.md.Springdatajpaproject.service;

import com.md.Springdatajpaproject.entity.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {


    Order saveOrder(Order order);

    List<Order> getAllOrders();

    Order getOrderById(long orderId);

    Order updateOrder(long orderId,Order order);

    Order deleteOrder(long orderId);

}
