# sva-lecture-project
A little project I developed for the lecture "system architectures for distributed applications".


## How to start the project
To start Minikube:
```
minikube start
```

To load the docker images:
```
minikube image load <Name of the image>
```
```
minikube image load mongo
minikube image load sva-project-flaskserver
minikube image load sva-project-reactserver
```

To create the Kubernetes resources:
```
kubectl apply -f <Name of the config>
```
```
kubectl apply -f 01-mongo-deployment-and-service.yaml
kubectl apply -f 02-flask-deployment-and-service.yaml
kubectl apply -f 03-react-deployment-and-service-and-ingress.yaml
```

To open the connection:
```
minikube tunnel
```

To delete the application: % TODO: Not finished
```
kubectl delete <Name of the ressource>
```
```
kubectl delete mongo
kubectl delete mongo-nodeport-svc
kubectl delete flask-deployment
kubectl delete flask-service
kubectl delete react-deployment
kubectl delete react-service
kubectl delete react-ingress
```