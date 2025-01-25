package main

import (
	"context"
	"log"
	"net/http"

	"backend/ent"
	"backend/ent/migrate"
	"backend/gqlgen/resolvers"

	"entgo.io/ent/dialect"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	// Create ent.Client and run the schema migration.
	client, err := ent.Open(dialect.SQLite, "file:ent?mode=memory&cache=shared&_fk=1")
	if err != nil {
		log.Fatal("opening ent client", err)
	}
	if err := client.Schema.Create(
		context.Background(),
		migrate.WithGlobalUniqueID(true),
	); err != nil {
		log.Fatal("opening ent client", err)
	}

	// Configure the server and start listening on :8080.
	srv := handler.NewDefaultServer(resolvers.NewSchema(client))
	http.Handle("/",
		playground.Handler("GraphQL playground", "/query"),
	)
	http.Handle("/query", srv)
	log.Println("listening on http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("http server terminated", err)
	}
}
