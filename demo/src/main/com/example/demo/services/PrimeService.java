package com.example.demo.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class PrimeService {

    public ArrayList<Integer> getPrimes (int grenzwert) {
        ArrayList<Integer> primeNumbers = new ArrayList<Integer>();
        for (int i = 1; i <= grenzwert; i++)
        {
            if(isPrime(i))
            {
                primeNumbers.add(i);
            }
        }
        return primeNumbers;
    }


    private boolean isPrime(int n)
    {
        for(int i=2;i<n;i++)
        {
            if(n%i==0)
                return false;
        }
        return true;
    }
}
