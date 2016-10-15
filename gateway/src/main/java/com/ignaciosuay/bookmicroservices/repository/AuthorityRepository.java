package com.ignaciosuay.bookmicroservices.repository;

import com.ignaciosuay.bookmicroservices.domain.Authority;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Authority entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {
}
