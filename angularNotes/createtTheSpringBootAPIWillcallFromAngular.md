## Steps To communicate with spring project in angular

- Install spring tool suite or eclipse but sts is easy to work with the spring projects
- After installation , create the project in STS
- Once the project got created need to add the dependencies
- web (for Rest APIs) , mySql(to connect with sql), JPA(ORM library) etc like this.Depending on project requirement need to add the dependencies.

## step2
- create the JPA entities that represnt the database tables and their columns.
- we need to create the class with setters and getters and the field names are basong on the table column names.
- Then we need to mark them with **@Entity** annotation for all the modal classes.
- Add the **@Table** annotation for this model class, to whcich table this model is connected.
- If the table has any foreign keys , we need to add those relation to the fields using **@OneToOne** annoatation.

## sample entity

## AbstractEntity.java
- To remove the Duplicate Id code in all the classes need to create the super and inherit these into childs.

## AbstractEntity.java

```
package com.nalini.flightServices.entities;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public class AbstractEntity {
	//generated value means it generte the ID basing on generation type
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}

```

## Reservation.java
```
package com.nalini.flightServices.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

/**
 * CREATE TABLE RESERVATION
(
  ID INT NOT NULL AUTO_INCREMENT,
  CHECKED_IN TINYINT(1),
  NUMBER_OF_BAGS INT,
  PASSENGER_ID INT,
  FLIGHT_ID INT,
  CREATED TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID),
  FOREIGN KEY (PASSENGER_ID) REFERENCES PASSENGER(ID) ON DELETE CASCADE,
  FOREIGN KEY (FLIGHT_ID) REFERENCES FLIGHT(ID)
) **/

@Entity
@Table(name = "RESERVATION")
public class Reservation extends AbstractEntity {

	private boolean checkedIn;
	private int numberOfBags;
	//As per the table we have map the flight ID from Flight and passengerID from passenger
	//to add these relation need to add ONetoONe annotation for these
	//whenever the data got inserted in flight and passenger automatically copy the ID s in these two fields.
	@OneToOne
	private Flight flight;
	@OneToOne
	private Passenger passenger;

	public Flight getFlight() {
		return flight;
	}

	public void setFlight(Flight flight) {
		this.flight = flight;
	}

	public Passenger getPassenger() {
		return passenger;
	}

	public void setPassenger(Passenger passenger) {
		this.passenger = passenger;
	}

	public boolean isCheckedIn() {
		return checkedIn;
	}

	public void setCheckedIn(boolean checkedIn) {
		this.checkedIn = checkedIn;
	}

	public int getNumberOfBags() {
		return numberOfBags;
	}

	public void setNumberOfBags(int numberOfBags) {
		this.numberOfBags = numberOfBags;
	}

}

```

## step3
- create the repositories will perform the CRUD operations against to the DB.
- For that we need to create the Interfaces per entity and spring will take care of the Implementation for us.
- While creating the interfaces we need to extend it from **JpaRepository<Flight,Integer>**, this will take care of Flight entity of ID integer type.

## FlightRepository.java

```
package com.nalini.flightServices.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nalini.flightServices.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

}

````

## Step4
- create the controller to add all the Rest APIs
- Add the DTO(Data Transfer objects) to call the APIs if required.
- And the last step is configure the dataSource. To configur this need to add db properties in the properties file.

## application.properties
```
spring.datasource.url=jdbc:mysql://localhost:3306/reservation
#reservation is the DB name
spring.datasource.username=root
spring.datasource.password=root

```

## Controller class

```
package com.nalini.flightServices.integration;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nalini.flightServices.dto.CreateReservationRequest;
import com.nalini.flightServices.dto.UpdateReservationRequest;
import com.nalini.flightServices.entities.Flight;
import com.nalini.flightServices.entities.Passenger;
import com.nalini.flightServices.entities.Reservation;
import com.nalini.flightServices.repos.FlightRepository;
import com.nalini.flightServices.repos.PassengerRepository;
import com.nalini.flightServices.repos.ReservationRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController

//the crossorigin is required if different applications on different ports to communicate eachother
//For example if angular will run on 4200 and this app will run on 8080 with out this annoation if we are trying to access
//rest endpoints will get cross origin error to avoid that we need to add this annotation
@CrossOrigin
public class ReservationRestController {

	@Autowired
	FlightRepository flightRepo;

	@Autowired
	PassengerRepository passengerRepo;

	@Autowired
	ReservationRepository reservationRepo;

	@RequestMapping(value = "/flights", method = RequestMethod.GET)
	public List<Flight> findFlights() {
		return flightRepo.findAll();
	}

	// sample API call
	// http://localhost:8080/flightServices/flightsByDepartureTime?from=AUS&to=NYC&dateOfDeparture=09-05-2023
	@RequestMapping(value = "/flightsByDepartureTime", method = RequestMethod.GET)
	public List<Flight> findFlightsByCityAndDate(@RequestParam("from") String from, @RequestParam("to") String to,
			@RequestParam("dateOfDeparture") @DateTimeFormat(pattern = "MM-dd-yyyy") Date dateOfDeparture) {
		return flightRepo.findFlights(from, to, dateOfDeparture);
	}

	@RequestMapping(value = "/reservations", method = RequestMethod.POST)
	@Transactional // This annotation will take care of all these saves treated as one trasaction
					// in
					// case of any got failed will fail all operations otherwise all success
	// request body annotation will map the incoming json request to the java object
	public Reservation saveReservation(@RequestBody CreateReservationRequest request) {
		Flight flight = flightRepo.findById(request.getFlightID()).get();

		Passenger passenger = new Passenger();
		passenger.setFirstName(request.getPassengerFirstName());
		passenger.setLastName(request.getPassengerLastName());
		passenger.setMiddleName(request.getPassengerMiddleName());
		passenger.setEmail(request.getPassengerEmail());
		passenger.setPhone(request.getPassengerPhone());

		Passenger savedPassenger = passengerRepo.save(passenger);

		Reservation reservation = new Reservation();
		reservation.setFlight(flight);
		reservation.setPassenger(savedPassenger);
		reservation.setCheckedIn(false);

		return reservationRepo.save(reservation);
	}

	@RequestMapping(value = "/reservations/{id}", method = RequestMethod.GET)
	public Reservation findReservation(@PathVariable("id") int id) {
		return reservationRepo.findById(id).get();
	}

	@RequestMapping(value = "/reservations", method = RequestMethod.PUT)
	public Reservation updateReservation(@RequestBody UpdateReservationRequest request) {
		Reservation reservation = reservationRepo.findById(request.getReservationID()).get();
		reservation.setNumberOfBags(request.getNumberOfBags());
		reservation.setCheckedIn(request.isCheckinFlag());
		return reservationRepo.save(reservation);
	}

	@RequestMapping(value = "/flight/{id}", method = RequestMethod.GET)
	public Flight findFlightById(@PathVariable("id") int id) {
		return flightRepo.findById(id).get();
	}

}

```
## step5
- we need to provide the root path for our project in the application.properties file.

## sample API call Url
```
http://localhost:8080/flightServices/flights
```

## application.properties

```
spring.datasource.url=jdbc:mysql://localhost:3306/reservation
#reservation is the DB name
spring.datasource.username=root
spring.datasource.password=root

# This is the root path of our project
server.servlet.context-path=/flightServices

```


# Start create the Angular project


