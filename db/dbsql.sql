--create users table
create table users(
user_id serial primary key,
username varchar(20),
	email varchar(20),
	password varchar(20),
	token varchar(20)
)

--create folders table
create table folders(
id serial primary key,
	owner Integer references users(user_id),
	title varchar(50),
	links integer
);


--create links table
create table links(
id serial primary key,
	folder_id Integer references folders(id),
	title varchar(50),
	actualLink varchar(225)
);

-- so a user has many folder and folders have links
-- a link has to be inside a folder