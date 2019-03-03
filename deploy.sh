
docker build -t leojj/notey-client:latest -t leojj/notey-client:$SHA -f ./client/Dockerfile ./client
docker build -t leojj/notey-server:latest -t leojj/notey-server:$SHA -f ./server/Dockerfile ./server

docker push leojj/notey-client:latest
docker push leojj/notey-server:latest

docker push leojj/notey-client:$SHA
docker push leojj/notey-server:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=leojj/notey-server:$SHA
kubectl set image deployments/client-deployment client=leojj/notey-client:$SHA
