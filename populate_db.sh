#bash
docker exec -ti dashboard_timescale_1 createdb ecom -U postgres
docker exec -ti dashboard_timescale_1 psql -U postgres --dbname ecom -f /db-init/ekz-airquality-import.sql
