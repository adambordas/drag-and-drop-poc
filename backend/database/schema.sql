DROP TABLE IF EXISTS cards;

DROP TYPE IF EXISTS lane_name;
CREATE TYPE lane_name AS ENUM ('todo', 'in-progress', 'done');

CREATE TABLE cards (
	id uuid PRIMARY KEY,
	description VARCHAR ( 255 ) NOT NULL,
	lane lane_name NOT NULL
);
