#!/bin/bash

API="https://tranquil-thicket-56465.herokuapp.com"
URL_PATH="/uploads"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
