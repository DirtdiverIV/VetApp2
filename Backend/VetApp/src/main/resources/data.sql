INSERT INTO clients (Name, last_name, phone_number, mail, address) VALUES
  ('María', 'Gómez', '1234567890', 'maria@example.com', 'Calle Principal 1'),
  ('Juan', 'Rodríguez', '9876543210', 'juan@example.com', 'Avenida Central 2'),
  ('Sofía', 'López', '5551234567', 'sofia@example.com', 'Calle Peatonal 3'),
  ('Carlos', 'Martínez', '5559876543', 'carlos@example.com', 'Avenida Norte 4'),
  ('Ana', 'Pérez', '7778889999', 'ana@example.com', 'Calle Sur 5'),
  ('Luis', 'Fernández', '1112223333', 'luis@example.com', 'Calle Este 6'),
  ('Laura', 'González', '3332221111', 'laura@example.com', 'Avenida Oeste 7'),
  ('Pedro', 'Díaz', '4445556666', 'pedro@example.com', 'Callejón 8'),
  ('Isabel', 'Sanchez', '6665554444', 'isabel@example.com', 'Calle Principal 9'),
  ('Antonio', 'Romero', '1239874560', 'antonio@example.com', 'Avenida Central 10'),
  ('Carmen', 'Jiménez', '7896541230', 'carmen@example.com', 'Calle Peatonal 11'),
  ('Javier', 'Hernández', '1597534682', 'javier@example.com', 'Calle Sur 12'),
  ('Elena', 'Torres', '9513578642', 'elena@example.com', 'Avenida Norte 13'),
  ('Ricardo', 'Vargas', '7539518642', 'ricardo@example.com', 'Calle Oeste 14'),
  ('Patricia', 'Ortega', '3698521470', 'patricia@example.com', 'Avenida Este 15'),
  ('Fernando', 'Soto', '7854213690', 'fernando@example.com', 'Callejón 16'),
  ('Natalia', 'Ramos', '9517536248', 'natalia@example.com', 'Avenida Principal 17');

  INSERT INTO pets (name, species, breed, age, client_id) VALUES
  ('Rex', 'Perro', 'Labrador', 3, 1),
  ('Mittens', 'Gato', 'Siamese', 2, 2),
  ('Buddy', 'Perro', 'Golden Retriever', 4, 3),
  ('Luna', 'Gato', 'Persa', 1, 4),
  ('Rocky', 'Perro', 'Bulldog', 5, 5),
  ('Whiskers', 'Gato', 'Maine Coon', 3, 6),
  ('Coco', 'Perro', 'Chihuahua', 2, 7),
  ('Simba', 'Gato', 'Sphynx', 2, 8),
  ('Max', 'Perro', 'Husky', 3, 9),
  ('Oreo', 'Gato', 'British Shorthair', 1, 10),
  ('Charlie', 'Perro', 'Dachshund', 4, 11),
  ('Lily', 'Gato', 'Ragdoll', 2, 12),
  ('Daisy', 'Perro', 'Poodle', 3, 13),
  ('Oliver', 'Gato', 'Bengal', 1, 14),
  ('Bailey', 'Perro', 'Boxer', 5, 15),
  ('Leo', 'Gato', 'Scottish Fold', 2, 16),
  ('Bella', 'Perro', 'Pug', 3, 17),
  ('Loki', 'Gato', 'Himalayan', 2, 1),
  ('Duke', 'Perro', 'Doberman', 4, 2),
  ('Milo', 'Gato', 'Russian Blue', 1, 1),
  ('Fluffy', 'Gato', 'Persa', 2, 3),
  ('Lucky', 'Perro', 'Beagle', 3, 6),
  ('Sasha', 'Gato', 'Siamese', 1, 9),
  ('Rusty', 'Perro', 'Dalmatian', 2, 12),
  ('Salem', 'Gato', 'Maine Coon', 4, 15),
  ('Teddy', 'Perro', 'Labrador', 1, 2),
  ('Misty', 'Gato', 'Scottish Fold', 3, 2),
  ('Rocky', 'Perro', 'Boxer', 4, 5),
  ('Cleo', 'Gato', 'Bengal', 2, 8),
  ('Molly', 'Perro', 'Poodle', 5, 11);

  INSERT INTO appointments (date, pet_id, description) VALUES
  ('2023-09-17 09:00:00', 1, 'Vacunación'),
  ('2023-09-17 10:30:00', 2, 'Desparasitación'),
  ('2023-09-17 12:00:00', 3, 'Castración'),
  ('2023-09-17 13:30:00', 4, 'Peluquería'),
  ('2023-09-17 15:00:00', 5, 'Examen de salud'),
  ('2023-09-18 09:00:00', 6, 'Vacunación'),
  ('2023-09-18 10:30:00', 7, 'Desparasitación'),
  ('2023-09-18 12:00:00', 8, 'Castración'),
  ('2023-09-18 13:30:00', 9, 'Peluquería'),
  ('2023-09-18 15:00:00', 10, 'Examen de salud'),
  ('2023-09-19 09:00:00', 11, 'Vacunación'),
  ('2023-09-19 10:30:00', 12, 'Desparasitación'),
  ('2023-09-19 12:00:00', 13, 'Castración'),
  ('2023-09-19 13:30:00', 14, 'Peluquería'),
  ('2023-09-19 15:00:00', 15, 'Examen de salud'),
  ('2023-09-20 09:00:00', 16, 'Vacunación'),
  ('2023-09-20 10:30:00', 17, 'Desparasitación'),
  ('2023-09-20 12:00:00', 18, 'Castración'),
  ('2023-09-20 13:30:00', 19, 'Peluquería'),
  ('2023-09-20 15:00:00', 20, 'Examen de salud'),
  ('2023-09-21 09:00:00', 1, 'Vacunación'),
  ('2023-09-21 10:30:00', 2, 'Desparasitación'),
  ('2023-09-21 12:00:00', 3, 'Castración'),
  ('2023-09-21 13:30:00', 4, 'Peluquería'),
  ('2023-09-22 09:00:00', 5, 'Vacunación'),
  ('2023-09-22 10:30:00', 6, 'Desparasitación'),
  ('2023-09-22 12:00:00', 7, 'Castración'),
  ('2023-09-22 13:30:00', 8, 'Peluquería'),
  ('2023-09-22 15:00:00', 9, 'Examen de salud'),
  ('2023-09-23 09:00:00', 10, 'Vacunación'),
  ('2023-09-23 10:30:00', 11, 'Desparasitación'),
  ('2023-09-23 12:00:00', 12, 'Castración'),
  ('2023-09-23 13:30:00', 13, 'Peluquería'),
  ('2023-09-23 15:00:00', 14, 'Examen de salud'),
  ('2023-09-24 09:00:00', 15, 'Vacunación'),
  ('2023-09-24 10:30:00', 16, 'Desparasitación'),
  ('2023-09-24 12:00:00', 17, 'Castración'),
  ('2023-09-24 13:30:00', 18, 'Peluquería'),
  ('2023-09-24 15:00:00', 19, 'Examen de salud'),
  ('2023-09-25 09:00:00', 20, 'Vacunación'),
  ('2023-09-25 10:30:00', 1, 'Desparasitación'),
  ('2023-09-25 12:00:00', 2, 'Castración'),
  ('2023-09-25 13:30:00', 3, 'Peluquería'),
  ('2023-09-25 15:00:00', 4, 'Examen de salud');

  INSERT INTO medical_histories (date, description, pet_id) VALUES
  ('2023-09-02 10:00:00', 'Control de salud', 1),
  ('2023-09-03 14:00:00', 'Chequeo de rutina', 2),
  ('2023-09-04 11:30:00', 'Cirugía de esterilización', 3),
  ('2023-09-05 09:30:00', 'Vacunado contra lesmaniosis', 4),
  ('2023-09-06 15:45:00', 'Fiebre alta, se le recetan antipiréticos', 5),
  ('2023-09-07 13:20:00', 'Control postoperatorio', 6),
  ('2023-09-08 10:10:00', 'Examen de sangre', 7),
  ('2023-09-09 16:15:00', 'Revisión dental', 8),
  ('2023-09-10 09:50:00', 'Vacunación anual', 9),
  ('2023-09-11 14:30:00', 'Control de peso', 10),
  ('2023-09-12 11:05:00', 'Diarrea persistente', 11),
  ('2023-09-13 09:25:00', 'Revisión ocular', 12),
  ('2023-09-14 15:35:00', 'Vacunación contra la rabia', 13),
  ('2023-09-15 13:15:00', 'Alergia a la comida', 14),
  ('2023-09-16 10:55:00', 'Control de pulgas y garrapatas', 15),
  ('2023-09-17 09:15:00', 'Esterilización', 16),
  ('2023-09-18 14:45:00', 'Control de salud', 17),
  ('2023-09-19 11:25:00', 'Cambio de dieta', 3),
  ('2023-09-20 09:40:00', 'Herida en la pata', 2),
  ('2023-09-21 15:55:00', 'Dolor de oído', 20),
  ('2023-09-22 13:10:00', 'Vacunación de refuerzo', 1),
  ('2023-09-23 10:45:00', 'Control de pulgas', 2),
  ('2023-09-24 09:05:00', 'Cirugía de castración', 3),
  ('2023-09-25 15:25:00', 'Control de rutina', 4),
  ('2023-09-26 13:00:00', 'Problemas de digestión', 5),
  ('2023-09-27 10:30:00', 'Vacunación anual', 6),
  ('2023-09-28 08:50:00', 'Dolor de espalda', 7),
  ('2023-09-29 16:05:00', 'Herida en la cola', 8),
  ('2023-09-30 14:40:00', 'Alergia a las pulgas', 9),
  ('2023-08-20 12:15:00', 'Control de salud', 10),
  ('2023-08-21 09:55:00', 'Examen de sangre', 11),
  ('2023-08-22 15:20:00', 'Diarrea crónica', 12),
  ('2023-08-23 13:40:00', 'Problemas de comportamiento', 13),
  ('2023-08-24 11:00:00', 'Dolor de articulaciones', 14),
  ('2023-08-25 09:20:00', 'Herida en la oreja', 15),
  ('2023-08-26 15:50:00', 'Vacunación contra la tos de las perreras', 16),
  ('2023-08-27 14:10:00', 'Control de peso', 17),
  ('2023-08-28 12:35:00', 'Picadura de insecto', 1),
  ('2023-08-29 10:45:00', 'Problemas de alergia', 2),
  ('2023-08-30 09:05:00', 'Cirugía dental', 1),
  ('2023-08-01 14:30:00', 'Vacunación anual', 1),
  ('2023-08-02 12:55:00', 'Control de salud', 2),
  ('2023-08-03 11:15:00', 'Cirugía de castración', 3),
  ('2023-08-04 09:35:00', 'Revisión ocular', 4),
  ('2023-08-05 15:00:00', 'Problemas de alergia', 5),
  ('2023-08-06 13:20:00', 'Dolor de espalda', 6),
  ('2023-08-07 11:45:00', 'Diarrea persistente', 7),
  ('2023-08-08 10:05:00', 'Control de pulgas y garrapatas', 8),
  ('2023-08-09 08:30:00', 'Problemas de comportamiento', 9),
  ('2023-08-10 15:55:00', 'Vacunación contra la rabia', 10);

  INSERT INTO payments (fecha, cantidad, client_id) VALUES
  ('2023-09-01 14:30:00', 75.0, 1),
  ('2023-09-02 16:45:00', 35.0, 2),
  ('2023-09-03 11:00:00', 110.0, 1),
  ('2023-09-04 13:15:00', 90.0, 3),
  ('2023-09-05 10:30:00', 60.0, 4),
  ('2023-09-06 15:45:00', 45.0, 5),
  ('2023-09-07 14:00:00', 55.0, 6),
  ('2023-09-08 12:30:00', 70.0, 7),
  ('2023-09-09 09:45:00', 40.0, 8),
  ('2023-09-10 11:15:00', 85.0, 9),
  ('2023-09-11 17:30:00', 65.0, 10),
  ('2023-09-12 14:45:00', 50.0, 11),
  ('2023-09-13 12:00:00', 95.0, 12),
  ('2023-09-14 10:15:00', 75.0, 13),
  ('2023-09-15 16:30:00', 55.0, 14),
  ('2023-09-16 13:45:00', 70.0, 15),
  ('2023-09-17 11:00:00', 90.0, 11),
  ('2023-09-18 15:15:00', 45.0, 6),
  ('2023-09-19 12:30:00', 60.0, 5),
  ('2023-09-20 10:45:00', 80.0, 5),
  ('2023-09-21 14:00:00', 55.0, 4),
  ('2023-09-22 11:15:00', 70.0, 1),
  ('2023-09-23 09:30:00', 40.0, 2),
  ('2023-09-24 13:45:00', 65.0, 3),
  ('2023-09-25 10:00:00', 50.0, 4),
  ('2023-09-26 15:15:00', 90.0, 5),
  ('2023-09-27 12:30:00', 75.0, 6),
  ('2023-09-28 10:45:00', 55.0, 7),
  ('2023-09-29 14:00:00', 70.0, 8),
  ('2023-09-30 11:15:00', 80.0, 9),
  ('2023-08-01 14:30:00', 65.0, 10),
  ('2023-08-02 12:45:00', 40.0, 11),
  ('2023-08-03 10:00:00', 55.0, 12),
  ('2023-08-04 15:15:00', 70.0, 13),
  ('2023-08-05 13:30:00', 90.0, 14),
  ('2023-08-06 11:45:00', 50.0, 15),
  ('2023-08-07 09:00:00', 75.0, 16),
  ('2023-08-08 14:15:00', 60.0, 17),
  ('2023-08-09 12:30:00', 55.0, 1),
  ('2023-08-10 10:45:00', 70.0, 2),
  ('2023-08-11 16:00:00', 85.0, 4),
  ('2023-08-12 14:15:00', 45.0, 1),
  ('2023-08-13 12:30:00', 55.0, 2),
  ('2023-08-14 10:45:00', 70.0, 3),
  ('2023-08-15 15:00:00', 40.0, 4),
  ('2023-08-16 13:15:00', 60.0, 5),
  ('2023-08-17 11:30:00', 80.0, 6),
  ('2023-08-18 09:45:00', 50.0, 7),
  ('2023-08-19 14:00:00', 75.0, 8),
  ('2023-08-20 12:15:00', 55.0, 9),
  ('2023-08-21 10:30:00', 70.0, 10),
  ('2023-08-22 16:45:00', 90.0, 11),
  ('2023-08-23 14:00:00', 65.0, 12),
  ('2023-08-24 12:15:00', 45.0, 13),
  ('2023-08-25 10:30:00', 70.0, 14);

  INSERT INTO treatments (name, description, price) VALUES
  ('Peluquería', 'Baño y corte de pelo', 30.0),
  ('Control de Pulgas', 'Tratamiento antipulgas', 25.0),
  ('Odontología', 'Limpieza dental', 80.0),
  ('Rayos X', 'Radiografía para diagnóstico', 90.0),
  ('Endoscopia', 'Examen visual interno', 110.0),
  ('Tratamiento de Heridas', 'Curación de heridas', 40.0),
  ('Control de Peso', 'Seguimiento del peso', 15.0),
  ('Chequeo de Rutina', 'Examen de salud básico', 55.0),
  ('Control Postoperatorio', 'Seguimiento después de cirugía', 35.0),
  ('Revisión Ocular', 'Examen de los ojos', 45.0),
  ('Cambio de Dieta', 'Asesoramiento nutricional', 25.0),
  ('Control de Pulgas y Garrapatas', 'Tratamiento antiparásitos', 30.0),
  ('Vacunación de Refuerzo', 'Vacuna de refuerzo anual', 55.0),
  ('Control de Rutina', 'Examen de salud regular', 40.0);
