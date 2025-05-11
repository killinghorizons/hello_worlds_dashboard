CREATE TABLE "hello" (
	"id" serial PRIMARY KEY NOT NULL,
	"language" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"category" varchar(3) NOT NULL,
	"code" text NOT NULL
);
