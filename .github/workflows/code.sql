CREATE TABLE buildings (
  id INT PRIMARY KEY,
  building_name VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL
);

CREATE TABLE locations (
  id INT PRIMARY KEY,
  location_name VARCHAR(100) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  building_id INT NOT NULL,
  room_number VARCHAR(50),
  description TEXT,
  FOREIGN KEY (building_id) REFERENCES buildings(id)
);

CREATE TABLE events (
  id INT PRIMARY KEY,
  event_name VARCHAR(100) NOT NULL,
  start_time DATETIME NOT NULL,
  end_time DATETIME NOT NULL,
  location_id INT NOT NULL,
  FOREIGN KEY (location_id) REFERENCES locations(id)
);
