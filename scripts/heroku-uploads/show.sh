#!/bin/sh

API="https://tranquil-thicket-56465.herokuapp.com"
URL_PATH="/uploads"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
