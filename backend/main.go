package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"runtime"

	"backend/ent"
	"backend/ent/migrate"
	"backend/gqlgen/resolvers"

	"entgo.io/ent/dialect"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/joho/godotenv"

	_ "github.com/lib/pq"
)

func main() {
	env := os.Getenv("ENV")
	if env == "" {
		log.Fatal("env is not set")
	}

	if env == "local" {
		// NOTE: https://github.com/joho/godotenv/issues/17#issuecomment-751101201
		_, file, _, _ := runtime.Caller(0)
		err := godotenv.Load(filepath.Join(filepath.Dir(file), "../") + "/.env")
		if err != nil {
			log.Fatalln(err)
		}
	}

	postgresUser := os.Getenv("POSTGRES_USER")
	if postgresUser == "" {
		log.Fatal("postgresUser is not set")
	}

	postgresPassword := os.Getenv("POSTGRES_PASSWORD")
	if postgresPassword == "" {
		log.Fatal("postgresPassword is not set")
	}

	postgresHost := os.Getenv("POSTGRES_HOST")
	if postgresHost == "" {
		log.Fatal("postgresHost is not set")
	}

	postgresPort := os.Getenv("POSTGRES_PORT")
	if postgresPort == "" {
		log.Fatal("postgresPort is not set")
	}

	postgresDb := os.Getenv("POSTGRES_DB")
	if postgresDb == "" {
		log.Fatal("postgresDb is not set")
	}

	// Create ent.Client and run the schema migration.
	client, err := ent.Open(dialect.Postgres, fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s?sslmode=disable",
		postgresUser, postgresPassword, postgresHost,
		postgresPort, postgresDb,
	))
	if err != nil {
		log.Fatal("opening ent client", err)
	}
	if err := client.Schema.Create(
		context.Background(),
		migrate.WithGlobalUniqueID(true),
	); err != nil {
		log.Fatal("opening ent client", err)
	}

	// Configure the server and start listening on :8081.
	srv := handler.NewDefaultServer(resolvers.NewSchema(client))
	http.Handle("/",
		playground.Handler("GraphQL playground", "/query"),
	)
	http.Handle("/query", srv)
	log.Println("listening on http://localhost:8081")
	if err := http.ListenAndServe(":8081", nil); err != nil {
		log.Fatal("http server terminated", err)
	}
}
