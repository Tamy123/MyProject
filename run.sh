#!/usr/bin/env bash
cd backend
npm i && sleep 2s
cd ..
cd frontend
npm i && sleep 2s
cd ..
cd backend
npm start & sleep 10s && cd ..
cd frontend
echo yes | npm start &
exit 0