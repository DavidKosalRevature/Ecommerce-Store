package com.md.Springdatajpaproject.controller;

import com.md.Springdatajpaproject.entity.Order;
import com.md.Springdatajpaproject.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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

}
