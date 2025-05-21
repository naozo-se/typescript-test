```
# container structure
docker-compose up -d --build

# in container 
docker exec -ti {container_naame} bash
# install necessary
npm install typescript ts-node
# init Project
npx tsc --init

# execute tsfile
./node_modules/.bin/ts-node test.ts
```
