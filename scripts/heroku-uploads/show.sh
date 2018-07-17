#!/bin/sh

API="https://serene-eyrie-91568.herokuapp.com"
URL_PATH="/uploads"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
