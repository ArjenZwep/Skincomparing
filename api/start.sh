#!/bin/bash
#flask db init  #needed when first run!
flask db migrate
flask db upgrade
flask run --host=0.0.0.0