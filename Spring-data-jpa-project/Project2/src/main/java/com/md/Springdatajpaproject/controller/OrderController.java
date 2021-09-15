package com.md.Springdatajpaproject.controller;

import com.md.Springdatajpaproject.entity.Order;
import com.md.Springdatajpaproject.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // connect frontend
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping("/orders")
    public Order saveOrder(@RequestBody Order order){
        return service.saveOrder(order);

    }
    @GetMapping("/orders")
    public List<Order> getOrders(){
        return service.getAllOrders();
    }

    @GetMapping("/orders/{orderId}")
    public Order getOrdersByOrderId(@PathVariable("orderId") long orderId){
        return service.getOrderById(orderId);
    }
    @PutMapping("/orders/{orderId}")
    public Order updateOrdersByOrderId(@PathVariable("orderId") long orderId, @RequestBody Order order){
        return service.updateOrder(orderId,order);
    }
    @DeleteMapping ("/orders/{orderId}")
    public Order deleteOrdersByOrderId(@PathVariable("orderId") long orderId){
        return service.deleteOrder(orderId);
    }
}
