package com.health.dashboard;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryPoolMXBean;
import java.util.List;

@SpringBootApplication
@EnableScheduling
public class Application{

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Autowired
    private Environment env;

    public static void main(final String[] args) {
        final ApplicationContext ctx = SpringApplication.run(Application.class, args);
    }

}
