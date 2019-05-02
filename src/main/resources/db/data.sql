--**************************************************************************************
-- id, name
INSERT INTO task_types VALUES (1,'Correct');
INSERT INTO task_types VALUES (2,'Develop');
INSERT INTO task_types VALUES (3,'Question');

--**************************************************************************************
-- id, name
INSERT INTO task_states VALUES (1,'New');
INSERT INTO task_states VALUES (2,'In development');
INSERT INTO task_states VALUES (3,'Finished');

--**************************************************************************************
-- id, name
INSERT INTO task_priorities VALUES (1,'Immediate');
INSERT INTO task_priorities VALUES (2,'Normal');
INSERT INTO task_priorities VALUES (3,'Low');

--**************************************************************************************
--id, first_name, last_name, email, password
INSERT INTO users VALUES (1,'Tom','The manager','tom@themanager.com','password');
INSERT INTO users VALUES (2,'Dave','The cofee maker','dave@thecofeemaker.com','password');
INSERT INTO users VALUES (3,'John','The cofee bringer','john@thecofeebringer.com','password');

--**************************************************************************************
-- id, name, created, manager_id
INSERT INTO projects VALUES (1,'First project','2018-09-07',1);
INSERT INTO projects VALUES (2,'Second project','2019-01-01',2);

--**************************************************************************************
-- id, name, description, created, assigned_user_id, project_id, priority_id, state_id, type_id
INSERT INTO tasks VALUES (1,'make cofee','prepare coffee for John The manager','2018-10-07',2,1,1,2,2);
INSERT INTO tasks VALUES (2,'bring cofee','bring coffee to John The manager','2018-10-07',3,1,2,1,2);

--**************************************************************************************
-- id, description, created, task_id,user_id
INSERT INTO task_history VALUES (1,'user changed task_priority of task to Immediate','2019-01-01',1,2);

--**************************************************************************************
-- user_id, project_id
INSERT INTO users_projects VALUES (1,1);
INSERT INTO users_projects VALUES (1,2);
INSERT INTO users_projects VALUES (2,1);
INSERT INTO users_projects VALUES (2,2);
INSERT INTO users_projects VALUES (3,1);













