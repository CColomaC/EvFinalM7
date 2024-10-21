-- Consultar el Bootcamp por id, incluyendo los usuarios
SELECT * FROM "Bootcamps" b
JOIN "Users_Bootcamps" ub ON b.id = ub."bootcampId"
JOIN "Users" u ON "userId" = u.id
WHERE b.id = 1;

-- Listar todos los Bootcamp con sus usuarios
SELECT * FROM "Bootcamps" b
JOIN "Users_Bootcamps" ub ON b.id = ub."bootcampId"
JOIN "Users" u ON "userId" = u.id;

-- Consultar un usuario por id, incluyendo los Bootcamp
SELECT * FROM "Users" u
JOIN "Users_Bootcamps" ub ON u.id = ub."userId"
JOIN "Bootcamps" b ON ub."bootcampId" = b.id
WHERE u.id = 1;

-- Listar los usuarios con sus bootcamp
SELECT FROM "Users" u
JOIN "Users_Bootcamps" ub ON u.id = ub."userId"
JOIN "Bootcamps" b ON "bootcampId" = b.id;

-- Actualizar Usuario según id
UPDATE "Users"
SET "firstName" = 'Pedro', "lastName" = 'Sánchez'
WHERE id = 1;

-- Eliminar un usuario por id
DELETE FROM "Users"
WHERE id = 1;



