#!/bin/env bash
# Requires: dart sass command line interface
# Watches for changes to scss files and recompiles them if they are changed

SCSS_FILES=(
    "global"
    "sections/card_city"
    "sections/cards_section"
)

for scss_file in "${SCSS_FILES[@]}"
do
    sass --watch "$scss_file.scss:$scss_file.css" &
done
