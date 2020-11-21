package com.example.demo.controller;

import com.example.demo.services.PrimeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class restController {
    private final PrimeService primeService;

    public restController(PrimeService primeService) {
        this.primeService = primeService;
    }


    @GetMapping("/primes")
    List<Integer> getPrimes(@RequestParam() Long grenzwert) {
        return primeService.getPrimes(Math.toIntExact(grenzwert));
    }
}
