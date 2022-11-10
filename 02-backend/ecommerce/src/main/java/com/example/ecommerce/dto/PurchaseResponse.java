package com.example.ecommerce.dto;

import lombok.Data;
import lombok.NonNull;

// Lombok @Data will generate constructor for *final* fields
@Data
public class PurchaseResponse {

    private final String orderTrackingNumber;
    // private @NonNull String orderTrackingNumber; // equivalent
}
