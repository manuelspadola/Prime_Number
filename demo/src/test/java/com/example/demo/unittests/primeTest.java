package java.com.example.demo.unittests;

import com.example.demo.services.PrimeService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;



@SpringBootTest
public class primeTest {

    @Autowired
    PrimeService primeService;

    @Test
    public void primesCalcTester(){
        int grenzwert = 12;
        ArrayList<Integer> primes;

        primes = primeService.getPrimes(grenzwert);
        assert(primes.size() == 6);
    }


}
