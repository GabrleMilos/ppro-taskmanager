DROP TABLE task_types IF EXISTS;
DROP TABLE task_states IF EXISTS;
DROP TABLE task_priorities IF EXISTS;
DROP TABLE task_history IF EXISTS;
DROP TABLE projects IF EXISTS;
DROP TABLE users IF EXISTS;
DROP TABLE tasks IF EXISTS;
DROP TABLE users_projects IF EXISTS;

--**************************************************************************************
CREATE TABLE task_types
(
  id   INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(80)
);

--**************************************************************************************
CREATE TABLE task_priorities
(
  id   INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(80)
);

--**************************************************************************************
CREATE TABLE task_states
(
  id   INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(80)
);

--**************************************************************************************
CREATE TABLE users
(
  id         INTEGER IDENTITY PRIMARY KEY,
  first_name VARCHAR(50),
  last_name  VARCHAR(50),
  email      VARCHAR(50),
  password   VARCHAR(50)
);


--**************************************************************************************
CREATE TABLE projects
(
  id         INTEGER IDENTITY PRIMARY KEY,
  name       VARCHAR(50),
  created    DATE,
  manager_id INTEGER NOT NULL
);

ALTER TABLE projects
  ADD CONSTRAINT fk_users FOREIGN KEY (manager_id) REFERENCES users (id);

--**************************************************************************************
CREATE TABLE tasks
(
  id          INTEGER IDENTITY PRIMARY KEY,
  name        VARCHAR(50),
  description VARCHAR(150),
  created     DATE,
  assigned_user_id INTEGER NOT NULL,
  project_id INTEGER NOT NULL,
  priority_id INTEGER NOT NULL,
  state_id INTEGER NOT NULL,
  type_id INTEGER NOT NULL
);

ALTER TABLE tasks
  ADD CONSTRAINT fk_users FOREIGN KEY (assigned_user_id) REFERENCES users (id);
ALTER TABLE tasks
  ADD CONSTRAINT fk_projects FOREIGN KEY (project_id) REFERENCES projects (id);
ALTER TABLE tasks
  ADD CONSTRAINT fk_task_priorities FOREIGN KEY (priority_id) REFERENCES task_priorities (id);
ALTER TABLE tasks
  ADD CONSTRAINT fk_task_states FOREIGN KEY (state_id) REFERENCES task_states  (id);
ALTER TABLE tasks
  ADD CONSTRAINT fk_task_types FOREIGN KEY (type_id) REFERENCES task_types (id);

--**************************************************************************************
CREATE TABLE task_history
(
  id          INTEGER IDENTITY PRIMARY KEY,
  description VARCHAR(150),
  created     DATE,
  task_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL
);

ALTER TABLE task_history
  ADD CONSTRAINT fk_tasks FOREIGN KEY (task_id) REFERENCES tasks (id);
ALTER TABLE task_history
  ADD CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users (id);

--**************************************************************************************
CREATE TABLE users_projects
(
  user_id INTEGER NOT NULL,
  project_id INTEGER NOT NULL
);

ALTER TABLE users_projects
  ADD CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE users_projects
  ADD CONSTRAINT fk_projects FOREIGN KEY (project_id) REFERENCES projects (id);

--**************************************************************************************