#!/usr/bin/env bash

# about half a million words. too many. many are not even words.
# curl "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt" > words.txt

# 10k most common words according to Google text corpus
curl "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english-usa-no-swears.txt" > words.txt
