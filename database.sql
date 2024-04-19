-- CREATE TABLE Doctor (
--   doctor_id INTEGER PRIMARY KEY,
--   first_name TEXT NOT NULL,
--   last_name TEXT NOT NULL,
--   specialization TEXT NOT NULL,
--   practicing_from DATE NOT NULL,
--   location TEXT NOT NULL,
--   schedule TEXT NOT NULL,
--   max_patients INTEGER NOT NULL
-- );
INSERT INTO Doctor (doctor_id, first_name, last_name, specialization, practicing_from, location, schedule, max_patients)
VALUES
  (1, 'Kalpana', 'K', 'Cardiology', '2023-01-01', 'Sri Rama Hospital', 'Monday-Friday 18:00-21:00', 10),
  (2, 'Manasa', 'BK', 'Dermatology', '2022-02-01', 'Pushpa Hospital', 'Tuesday-Saturday 17:00-20:00', 15),
  (3, 'Pranathi', 'V', 'Gynacologist', '2024-02-01', 'Vinayaka Hospital', 'Monday-Tuesday-Saturday-Sunday 14:00-19:00', 20);
  